/// <reference path="c:\program files\vero software\edgecam 2018 r1\cam\PCI\pci-vsdoc.js" />
// Initialising command:- Insert Nc Code
cmd1 = InitCommand(7, 109);
ClearMods(cmd1);
// Setting modifier 'Comment_'
SetModifier(cmd1, 15, "Z=PRK ;M5 G0 T0 ");
gdh1 = InitDigInfo();
cmdret=ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);
// Initialising command:- Insert Nc Code
cmd1 = InitCommandMasked(7, 109, 0, "S");
ClearMods(cmd1);
// Initialising command:- Insert Nc Code
cmd1 = InitCommand(7, 109);
ClearMods(cmd1);
// Setting modifier 'Comment_'
SetModifier(cmd1, 15, ";M29");
gdh1 = InitDigInfo();
cmdret=ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);
