/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />

function findSpuBase()
{   
   

    SetPCIVariable("$_textSpu", "000XXXX");

    nret = AskBox(["Digite Programa SPU"], ["$_textSpu"]);

    // Get the PCI variables set by the AskBox (required)
	var fileBase     = GetPCIVariable("$_textSpu"); 

   if(nret!=-3){
       Display ("\nOperação de buscar SPU cancelada");
       		return 0;
}

/*
// Initialising command:- New File
var cmd1 = InitCommand(9, 0); 
ClearMods(cmd1); 
// Setting modifier 'Force Restart'
SetModifier(cmd1, 339, "<Yes>"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 
*/

// Initialising command:- Open CAM Part
var cmd1 = InitCommand(3, 3); 
ClearMods(cmd1); 
// Setting modifier 'Name^Browse...'


SetModifier(cmd1, 14,  "\\\\Server\\index\\Projetos\\Programas\\Edgecam\\" + fileBase + ".ppf"); 
//SetModifier(cmd1, 14,  "\\\\Server\\index\\Projetos\\Programas\\Edgecam\\" + fileBase); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 


return 0;
}

findSpuBase();