/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
var cmd1 = InitCommand(50, 682); 
ClearMods(cmd1); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

