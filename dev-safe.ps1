# dev-safe.ps1 - Safe development startup script
# This script prevents EPERM errors by cleaning build files before starting

Write-Host "🧹 Cleaning build files..." -ForegroundColor Yellow

# Stop any running Next.js processes
Get-Process -Name "node" -ErrorAction SilentlyContinue | Where-Object { $_.CommandLine -like "*next*" } | Stop-Process -Force -ErrorAction SilentlyContinue

# Wait a moment for processes to fully stop
Start-Sleep -Seconds 2

# Remove .next directory safely
if (Test-Path ".\.next") {
    try {
        Remove-Item ".\.next" -Recurse -Force -ErrorAction Stop
        Write-Host "✅ Removed .next directory" -ForegroundColor Green
    } catch {
        Write-Host "⚠️  Could not remove .next directory: $($_.Exception.Message)" -ForegroundColor Yellow
        Write-Host "📝 Try closing VS Code and running again" -ForegroundColor Cyan
    }
}

# Remove trace files specifically
Get-ChildItem -Path "." -Filter "*.trace" -Recurse -ErrorAction SilentlyContinue | Remove-Item -Force -ErrorAction SilentlyContinue

# Remove turbo cache if it exists
if (Test-Path ".\.turbo") {
    Remove-Item ".\.turbo" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "✅ Removed .turbo directory" -ForegroundColor Green
}

Write-Host "🚀 Starting development server..." -ForegroundColor Green
npm run dev
