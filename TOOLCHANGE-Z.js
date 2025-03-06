//%InitCommand=cmd1=101,41
//%ClearMods=[cmd1]
//%SetModifier=[cmd1],100,Z|3
//%InitDigInfo=gdh1
//%ExecCommand=cmdret=[cmd1],[gdh1]
//%FreeDigInfo=[gdh1]



// Inicializar comando:- toolchange Z
cmd1 = InitCommand(101, 41);
ClearMods(cmd1);
// Configurar parâmetros 'Nome'
SetModifier(cmd1, 100, "Z|3");
gdh1 = InitDigInfo();
cmdret=ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);
