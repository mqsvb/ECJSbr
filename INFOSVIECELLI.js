/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
// *** PCI Template ***
function main()
{
SetPackage(1);
if (GetPCINumber("&3AXMILL") == 0)
{
	nRet = MessageBox(_MB_ICONERROR, "Macro funciona somente com uma sequencia de usinagem");
	return 0;
}
/*
if (GetPCIVariable("&POSTNAME")!="dual-rovers_biesse-2014.mcp" | "rover_a_viecelli.mcp" | tempo-rovers_biesse-2014.mcp){
	alert ("Pós processador Não contem Macro: \n\n 'Infos de Programa Viecelli'")
	return 0;
}
*/

do
{


// Initialising command:- Infos De Programa Viecelli
cmd0 = InitCommand(7, 6000);
ClearMods(cmd0);
// Setting modifier 'Lado Bom'
SetModifier(cmd0, 500, "Nenhum|1");
// Setting modifier 'Revestimento' 
SetModifier(cmd0, 503, "");
// Setting modifier 'Virada em'
SetModifier(cmd0, 501, "Nenhum|1");
// Setting modifier 'Sentido do Veio'
SetModifier(cmd0, 502, "Nenhum|1");
// Setting modifier 'Observação '
SetModifier(cmd0, 504, "----");
// Setting modifier '5 Eixos '
SetModifier(cmd0, 508, "<No>");
// Setting modifier 'Fazer 45° '
//SetModifier(cmd0, 509, "<No>");
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
