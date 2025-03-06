/// <reference path="c:\program files\hexagon\edgecam 2022.0\cam\PCI\pci-vsdoc.js" />
// *** PCI Template ***
function main()
{
SetPackage(1);
if (GetPCINumber("&3AXMILL") == 0)
{
	nRet = MessageBox(_MB_ICONERROR, "Invalid environment");
	return 0;
}
cmd0 = InitCommand(11, 87);
ClearMods(cmd0);
SetModifier(cmd0, 199, "VEIO");
cmdret = ExecCommand(cmd0, -1);
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
