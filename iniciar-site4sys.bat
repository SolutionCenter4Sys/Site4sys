@echo off
setlocal enabledelayedexpansion
title Site4sys - Servidor Local
color 0A

cls
echo.
echo  ##############################################
echo  ##                                          ##
echo  ##     SITE4SYS  ^|  http://localhost:3000   ##
echo  ##                                          ##
echo  ##############################################
echo.

:: ── 1. Verificar Node.js instalado ─────────────────────────
where node >nul 2>&1
if errorlevel 1 (
    color 0C
    echo  [ERRO] Node.js nao encontrado no sistema.
    echo.
    echo  Baixe e instale em: https://nodejs.org
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%v in ('node -v 2^>nul') do set NODE_VER=%%v
echo  [OK] Node.js detectado: %NODE_VER%

:: ── 2. Verificar npm instalado ──────────────────────────────
where npm >nul 2>&1
if errorlevel 1 (
    color 0C
    echo  [ERRO] npm nao encontrado. Reinstale o Node.js.
    pause
    exit /b 1
)

for /f "tokens=*" %%v in ('npm -v 2^>nul') do set NPM_VER=%%v
echo  [OK] npm detectado: v%NPM_VER%
echo.

:: ── 3. Entrar na pasta do projeto ───────────────────────────
cd /d "C:\Cursor\Site4sys"
if errorlevel 1 (
    color 0C
    echo  [ERRO] Pasta nao encontrada: C:\Cursor\Site4sys
    echo.
    pause
    exit /b 1
)

echo  [OK] Pasta: %CD%
echo.

:: ── 4. Instalar dependencias se necessario ──────────────────
if not exist "node_modules\" (
    echo  ------------------------------------------------
    echo  [!] node_modules ausente. Instalando...
    echo  [!] Isso pode demorar alguns minutos.
    echo  ------------------------------------------------
    echo.
    call npm install
    if errorlevel 1 (
        color 0C
        echo.
        echo  [ERRO] Falha ao instalar dependencias.
        echo  Verifique sua conexao com a internet e tente novamente.
        echo.
        pause
        exit /b 1
    )
    echo.
    echo  [OK] Dependencias instaladas com sucesso!
    echo.
) else (
    echo  [OK] Dependencias ja instaladas.
    echo.
)

:: ── 5. Abrir navegador automaticamente apos 5 segundos ─────
echo  ================================================
echo   Iniciando servidor de desenvolvimento...
echo  ================================================
echo.
echo   URL: http://localhost:3000
echo.
echo   Aguarde o servidor inicializar.
echo   O navegador abrira automaticamente.
echo.
echo   Para encerrar: pressione Ctrl+C
echo  ================================================
echo.

start "" cmd /c "timeout /t 5 /nobreak >nul && start http://localhost:3000"

:: ── 6. Iniciar servidor Next.js ─────────────────────────────
call npm run dev

:: ── 7. Servidor encerrado ───────────────────────────────────
echo.
color 0E
echo  [!] Servidor encerrado.
echo.
pause
endlocal
