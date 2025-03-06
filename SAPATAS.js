/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
SetPackage(0);
var cmd1 = InitCommand(28, 3); 
ClearMods(cmd1); 
SetModifier(cmd1, 14, "C:\\EC_VIECELLI\\SAPATAS.ppf");
 
SetModifier(cmd1, 164, "0"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

