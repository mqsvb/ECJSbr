/// <reference path="c:\program files\hexagon\edgecam 2023.1\cam\PCI\pci-vsdoc.js" />
// Initialising command:- DXF

function saveDxf()
{
var cmd1 = InitCommand(19, 24); 
ClearMods(cmd1); 

do
{
// Setting modifier 'Name^Browse...'
SetModifier(cmd1, 14, ""); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

if (nRet != _FINISH)
{
	return 0;
}
nRet = ExecCommand(cmd0, -1);

} while(nRet == _ESCAPE);





}

saveDxf();


