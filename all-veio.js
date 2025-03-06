function main()
{
SetPackage(1);

// Initialising command:- Workplane
var cmd1 = InitCommand(16, 61); 
ClearMods(cmd1); 
// Setting modifier 'Name'
SetModifier(cmd1, 244, "Top"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

caract=Include("FEAT-WK2021.js");
manufac=Include("manufatura.js");
bruta=Include("STOCK_VM_2019.js");

do
{

// Initialising command:- Infos De Programa Viecelli
cmd0 = InitCommand(7, 6000);
ClearMods(cmd0);
// Setting modifier 'Lado Bom'
SetModifier(cmd0, 500, "Nenhum|1");
// Setting modifier 'Virada em'
SetModifier(cmd0, 501, "Nenhum|1");
// Setting modifier 'Sentido do Veio'
SetModifier(cmd0, 502, "Nenhum|1");
// Setting modifier 'Observação '
SetModifier(cmd0, 504, "----");
nRet = AskMods(cmd0);
if (nRet != _FINISH)
{
	return 0;
}
nRet = ExecCommand(cmd0, -1);

} while(nRet == _ESCAPE);

return 0;
}

main();