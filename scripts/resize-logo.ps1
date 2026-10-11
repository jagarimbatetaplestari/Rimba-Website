Add-Type -AssemblyName System.Drawing
$srcPath = "D:\Project\Rimba\public\Logo.png"
$destPath = "D:\Project\Rimba\public\logo-web.png"

$src = [System.Drawing.Image]::FromFile($srcPath)
$newWidth = 512
$newHeight = 512

$bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality

$g.DrawImage($src, 0, 0, $newWidth, $newHeight)
$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)

$g.Dispose()
$bmp.Dispose()
$src.Dispose()

Write-Host "Successfully created logo-web.png"
