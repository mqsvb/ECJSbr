/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />

// Initialising command:- Machining Sequence

var posAtual=GetPCIVariable ("&POSTNAME")
var codAgrup=GetPCIVariable ("&EDGEUSER")

alert('Macros JS Atualizadas =]'  + "\n\n Maquina: " + posAtual)

var cmd1 = InitCommand(16, 90); 
ClearMods(cmd1); 
// Setting modifier 'Sequence Name'
SetModifier(cmd1, 101, "posAtual"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

