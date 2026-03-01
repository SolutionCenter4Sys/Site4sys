@echo off
setlocal enabledelayedexpansion

REM Garante que o script rode na pasta do projeto
cd /d "%~dp0"

set "LOG_FILE=%~dp0fix-deps.log"
echo ========================================
echo   Reparando dependencias do Site4sys...
echo ========================================
echo [INFO] Log: "%LOG_FILE%"
echo.
echo ===== Iniciado em %date% %time% ===== > "%LOG_FILE%"

where npm >nul 2>&1
if errorlevel 1 (
  echo [ERRO] npm nao encontrado no PATH.
  echo [ERRO] npm nao encontrado no PATH. >> "%LOG_FILE%"
  echo Instale o Node.js: https://nodejs.org/
  pause
  exit /b 1
)

echo [INFO] Encerrando processos node.exe (se existirem)...
taskkill /F /IM node.exe >> "%LOG_FILE%" 2>&1
if errorlevel 1 (
  echo [INFO] Nenhum node.exe em execucao ^(ok^).
  echo [INFO] Nenhum node.exe em execucao. >> "%LOG_FILE%"
)

if exist "node_modules" (
  echo [INFO] Removendo node_modules...
  rmdir /s /q "node_modules" >> "%LOG_FILE%" 2>&1
  if exist "node_modules" (
    echo [ERRO] Nao foi possivel remover node_modules.
    echo [ERRO] Nao foi possivel remover node_modules. >> "%LOG_FILE%"
    echo [DICA] Feche editores/terminais/antivirus e execute como Administrador.
    pause
    exit /b 1
  )
) else (
  echo [INFO] Pasta node_modules nao existe ^(ok^).
  echo [INFO] Pasta node_modules nao existe. >> "%LOG_FILE%"
)

if exist "package-lock.json" (
  echo [INFO] Removendo package-lock.json...
  del /f /q "package-lock.json" >> "%LOG_FILE%" 2>&1
  if exist "package-lock.json" (
    echo [ERRO] Nao foi possivel remover package-lock.json.
    echo [ERRO] Nao foi possivel remover package-lock.json. >> "%LOG_FILE%"
    pause
    exit /b 1
  )
) else (
  echo [INFO] package-lock.json nao existe ^(ok^).
  echo [INFO] package-lock.json nao existe. >> "%LOG_FILE%"
)

echo [INFO] Verificando cache npm...
call npm cache verify >> "%LOG_FILE%" 2>&1
if errorlevel 1 (
  echo [ERRO] Falha em npm cache verify.
  echo [ERRO] Falha em npm cache verify. >> "%LOG_FILE%"
  pause
  exit /b 1
)

echo [INFO] Instalando dependencias novamente...
call npm install >> "%LOG_FILE%" 2>&1
if errorlevel 1 (
  echo [ERRO] Falha no npm install.
  echo [ERRO] Falha no npm install. >> "%LOG_FILE%"
  echo [INFO] Consulte o log em: "%LOG_FILE%"
  pause
  exit /b 1
)

echo [SUCESSO] Dependencias reparadas com sucesso.
echo [INFO] Proximo passo:
echo [INFO] - Desenvolvimento: run-local.bat
echo [INFO] - Producao: run-prod.bat
echo ===== Finalizado em %date% %time% ===== >> "%LOG_FILE%"
echo [INFO] Consulte o log em: "%LOG_FILE%"
pause

endlocal
