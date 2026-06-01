param(
  [Parameter(Mandatory=$true)][string]$In,
  [Parameter(Mandatory=$true)][string]$Out,
  [int]$Threshold = 38,   # how close to white counts as background
  [int]$Feather = 14      # soft edge band width (in distance units)
)

Add-Type -AssemblyName System.Drawing

$src = [System.Drawing.Bitmap]::FromFile($In)
$w = $src.Width; $h = $src.Height
$bmp = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($src, 0, 0, $w, $h)
$g.Dispose(); $src.Dispose()

$rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$data = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$stride = $data.Stride
$bytes = $stride * $h
$buf = New-Object byte[] $bytes
[System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $buf, 0, $bytes)

# distance-from-white for a pixel index (BGRA order)
function WhiteDist([byte[]]$b, [int]$i) {
  $bl = $b[$i]; $gr = $b[$i+1]; $rd = $b[$i+2]
  $dr = 255 - $rd; $dg = 255 - $gr; $db = 255 - $bl
  return [Math]::Sqrt($dr*$dr + $dg*$dg + $db*$db)
}

$visited = New-Object 'bool[]' ($w * $h)
$queue = New-Object System.Collections.Generic.Queue[int]
# seed from all four edges
for ($x = 0; $x -lt $w; $x++) {
  foreach ($y in @(0, ($h-1))) { $queue.Enqueue($y * $w + $x) }
}
for ($y = 0; $y -lt $h; $y++) {
  foreach ($x in @(0, ($w-1))) { $queue.Enqueue($y * $w + $x) }
}

$far = $Threshold + $Feather
while ($queue.Count -gt 0) {
  $p = $queue.Dequeue()
  if ($visited[$p]) { continue }
  $visited[$p] = $true
  $px = $p % $w; $py = [int]($p / $w)
  $i = $py * $stride + $px * 4
  $d = WhiteDist $buf $i
  if ($d -gt $far) { continue }  # hit the subject, stop spreading

  # set alpha: full transparent if clearly background, feathered near edge
  if ($d -le $Threshold) {
    $buf[$i+3] = 0
  } else {
    $a = [int](255 * (($d - $Threshold) / $Feather))
    if ($a -lt 0) { $a = 0 }; if ($a -gt 255) { $a = 255 }
    if ($a -lt $buf[$i+3]) { $buf[$i+3] = [byte]$a }
  }

  if ($px -gt 0)      { $n = $p - 1;  if (-not $visited[$n]) { $queue.Enqueue($n) } }
  if ($px -lt $w-1)   { $n = $p + 1;  if (-not $visited[$n]) { $queue.Enqueue($n) } }
  if ($py -gt 0)      { $n = $p - $w; if (-not $visited[$n]) { $queue.Enqueue($n) } }
  if ($py -lt $h-1)   { $n = $p + $w; if (-not $visited[$n]) { $queue.Enqueue($n) } }
}

[System.Runtime.InteropServices.Marshal]::Copy($buf, 0, $data.Scan0, $bytes)
$bmp.UnlockBits($data)

# crop to non-transparent bounds with small padding
$minX = $w; $minY = $h; $maxX = 0; $maxY = 0
for ($y = 0; $y -lt $h; $y++) {
  for ($x = 0; $x -lt $w; $x++) {
    $a = $buf[$y * $stride + $x * 4 + 3]
    if ($a -gt 10) {
      if ($x -lt $minX) { $minX = $x }; if ($x -gt $maxX) { $maxX = $x }
      if ($y -lt $minY) { $minY = $y }; if ($y -gt $maxY) { $maxY = $y }
    }
  }
}
$pad = 12
$minX = [Math]::Max(0, $minX - $pad); $minY = [Math]::Max(0, $minY - $pad)
$maxX = [Math]::Min($w-1, $maxX + $pad); $maxY = [Math]::Min($h-1, $maxY + $pad)
$cw = $maxX - $minX + 1; $ch = $maxY - $minY + 1

$crop = New-Object System.Drawing.Bitmap($cw, $ch, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$cg = [System.Drawing.Graphics]::FromImage($crop)
$cg.DrawImage($bmp, (New-Object System.Drawing.Rectangle(0,0,$cw,$ch)), (New-Object System.Drawing.Rectangle($minX,$minY,$cw,$ch)), [System.Drawing.GraphicsUnit]::Pixel)
$cg.Dispose()

$crop.Save($Out, [System.Drawing.Imaging.ImageFormat]::Png)
$crop.Dispose(); $bmp.Dispose()
Write-Output ("OK {0} -> {1}  ({2}x{3} -> {4}x{5})" -f (Split-Path $In -Leaf), (Split-Path $Out -Leaf), $w, $h, $cw, $ch)
