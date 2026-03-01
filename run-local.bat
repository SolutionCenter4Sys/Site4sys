@echo off
setlocal enabledelayedexpansion

REM Garante que o script rode na pasta do projeto
cd /d "%~dp0"

echo ========================================
echo   Iniciando Site4sys localmente...
echo ========================================
set "LOG_FILE=%~dp0run-local.log"
echo [INFO] Log: "%LOG_FILE%"
echo.
echo ===== Iniciado em %date% %time% ===== > "%LOG_FILE%"

where npm >nul 2>&1
if errorlevel 1 (
  echo [ERRO] npm nao encontrado no PATH.
  echo Instale o Node.js: https://nodejs.org/
  echo [ERRO] npm nao encontrado no PATH. >> "%LOG_FILE%"
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo [INFO] Dependencias nao encontradas. Executando npm install...
  call npm install >> "%LOG_FILE%" 2>&1
  if errorlevel 1 (
    echo [ERRO] Falha ao instalar dependencias.
    echo [ERRO] Falha ao instalar dependencias. >> "%LOG_FILE%"
    echo [INFO] Consulte o log em: "%LOG_FILE%"
    pause
    exit /b 1
  )
)

echo [INFO] Subindo servidor de desenvolvimento...
echo [INFO] Acesse: http://localhost:3000
echo.
call npm run dev >> "%LOG_FILE%" 2>&1
set "EXIT_CODE=%ERRORLEVEL%"
if not "!EXIT_CODE!"=="0" (
  echo [ERRO] Falha ao iniciar em desenvolvimento. Codigo: !EXIT_CODE!
  echo [ERRO] Falha ao iniciar em desenvolvimento. Codigo: !EXIT_CODE! >> "%LOG_FILE%"
  echo [INFO] Consulte o log em: "%LOG_FILE%"
  pause
  exit /b !EXIT_CODE!
)

echo [INFO] Processo finalizado.
echo [INFO] Consulte o log em: "%LOG_FILE%"
pause

endlocal
