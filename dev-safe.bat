@echo off
echo 🧹 Cleaning build files...

REM Stop any running Next.js processes
taskkill /f /im node.exe 2>nul

REM Wait for processes to stop
timeout /t 2 /nobreak >nul

REM Remove .next directory
if exist ".next" (
    echo Removing .next directory...
    rmdir /s /q ".next" 2>nul
    if %errorlevel% equ 0 (
        echo ✅ Removed .next directory
    ) else (
        echo ⚠️ Could not remove .next directory - try closing VS Code
    )
)

REM Remove trace files
del /s /q "*.trace" 2>nul

REM Remove turbo cache
if exist ".turbo" (
    rmdir /s /q ".turbo" 2>nul
    echo ✅ Removed .turbo directory
)

echo 🚀 Starting development server...
npm run dev
