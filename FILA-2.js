//%InitCommand=cmd1=7,126
//%ClearMods=[cmd1]
//%SetModifier=[cmd1],108,FILA-2|2
//%InitDigInfo=gdh1
//%ExecCommand=cmdret=[cmd1],[gdh1]
//%FreeDigInfo=[gdh1]


// Inicializar comando:- FILA-2
cmd1 = InitCommand(7, 126);
ClearMods(cmd1);
// Configurar parâmetros 'Nome'
SetModifier(cmd1, 108, "FILA-2|2");
gdh1 = InitDigInfo();
cmdret=ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);
