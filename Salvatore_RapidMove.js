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

// Initialising command:- Rapid Move
cmd0 = InitCommand(101, 1);
ClearMods(cmd0);
//nRet = ExecCommand(cmd0, -1);

var gdh1 = InitDigInfo();
AddFreeDig(gdh1, "X160 Y-145 Z-10");
AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd0, gdh1); 
FreeDigInfo(gdh1); 

return 0;
}

main();
