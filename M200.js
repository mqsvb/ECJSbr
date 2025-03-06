//%InitCommand=cmd1=7,145
//%ClearMods=[cmd1]
//%SetModifier=[cmd1],108,VRY|1
//%InitDigInfo=gdh1
//%ExecCommand=cmdret=[cmd1],[gdh1]
//%FreeDigInfo=[gdh1]


// Inicializar comando:- virar peça
cmd1 = InitCommand(7, 145);
ClearMods(cmd1);
// Configurar parâmetros 'Nome'
SetModifier(cmd1, 108, "VRY|1");
gdh1 = InitDigInfo();
cmdret=ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);