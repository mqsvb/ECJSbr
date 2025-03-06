@echo off
set mes=%date:~3,2%
if %mes%==01 set mes=Mes_01
if %mes%==02 set mes=Mes_02
if %mes%==03 set mes=Mes_03
if %mes%==04 set mes=Mes_04
if %mes%==05 set mes=Mes_05
if %mes%==06 set mes=Mes_06
if %mes%==07 set mes=Mes_07
if %mes%==08 set mes=Mes_08
if %mes%==09 set mes=Mes_09
if %mes%==10 set mes=Mes_10
if %mes%==11 set mes=Mes_11
if %mes%==12 set mes=Mes_12
set dia=%date:~0,2%
set ano=%date:~6,4%

set pasta_origem=C:\Users\%username%\Documents\Hexagon\EDGECAM\2023.1\Themes
md "\\server\ENGENHARIA\ENG-PROG\BKP DOCS EDGECAM 2020\Themes_PROGRAMADORES\%username%\%ano%\%mes%\%dia%\Themes"
set pasta_destino=\\server\ENGENHARIA\ENG-PROG\BKP DOCS EDGECAM 2020\Themes_PROGRAMADORES\%username%\%ano%\%mes%\%dia%\Themes
xcopy "%pasta_origem%\*.*" "%pasta_destino%" /e /c /y

set pasta_origem=C:\Users\%username%\Documents\Hexagon\EDGECAM\2023.1\Cam\Machdef
md "\\server\ENGENHARIA\ENG-PROG\BKP DOCS EDGECAM 2020\Themes_PROGRAMADORES\%username%\%ano%\%mes%\%dia%\Themes\Machdef-bkp"
set pasta_destino=\\server\ENGENHARIA\ENG-PROG\BKP DOCS EDGECAM 2020\Themes_PROGRAMADORES\%username%\%ano%\%mes%\%dia%\Themes\Machdef-bkp
xcopy "%pasta_origem%\*.*" "%pasta_destino%" /e /c /y

set pasta_origem=C:\EC_VIECELLI
md "\\server\ENGENHARIA\ENG-PROG\BKP DOCS EDGECAM 2020\Themes_PROGRAMADORES\%username%\%ano%\%mes%\%dia%\Themes\EC_VIECELLI_0"
set pasta_destino=\\server\ENGENHARIA\ENG-PROG\BKP DOCS EDGECAM 2020\Themes_PROGRAMADORES\%username%\%ano%\%mes%\%dia%\Themes\EC_VIECELLI_0
xcopy "%pasta_origem%\*.*" "%pasta_destino%" /e /c /y

msg * Backup %username% %date%: Themes, PCI, Machdef e SM Edgecam 2023.1 salvos com sucesso! 


echo.
//start \\server\engenharia\ENG-PROG\BKP DOCS EDGECAM 2020\Themes_PROGRAMADORES
echo.
exit