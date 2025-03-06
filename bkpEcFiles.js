// COMANDO 'START PROCESS'
var cmd1 = InitCommand(2, 102); 
ClearMods(cmd1); 
//SetModifier(cmd1, 76, "C:\\Users\\Viniciusm\\Documents\\Vero Software\\TELAZUL.bat"); 
SetModifier(cmd1, 76, "C:\\EC_VIECELLI\\BKP-EC_files.bat"); 

var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

