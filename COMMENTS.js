/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
// *** PCI Template ***
function main()
{
SetPackage(1);
if (GetPCINumber("&3AXMILL") == 0)
{
	nRet = MessageBox(_MB_ICONERROR, "Invalid environment");
	return 0;
}
//cmd0 = InitCommand(11, 87);
//ClearMods(cmd0);
//SetModifier(cmd0, 199, "COMMENTS03");
//cmdret = ExecCommand(cmd0, -1);

// Initialising command:- Define Operation
//cmd0 = InitCommand(11, 87);
//ClearMods(cmd0);
// Setting modifier 'Operation'
//SetModifier(cmd0, 199, "COMMENTS");
//nRet = ExecCommand(cmd0, -1);

do
{

// Initialising command:- Comment
cmd0 = InitCommand(7, 108);
ClearMods(cmd0);
// Setting modifier 'Comment'
SetModifier(cmd0, 15, "-----------");
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
