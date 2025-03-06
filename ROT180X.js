/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />

cmd1 = InitCommand(29, 67);
ClearMods(cmd1);
SetModifier(cmd1, 23, "180");
SetModifier(cmd1, 135, "<Yes>");
SetModifier(cmd1, 3, "<None>");
gdh1 = InitDigInfo(); 
                    
AskDig("Selecionar centro de Rotação", "PICKX");

AddFreeDig(gdh1, "IX15+"+ GetPCIVariable("X@PICKX") + "Y"+ GetPCIVariable("Y@PICKX") + "Z0");

AskDigInfo("Selecione Solido para copiar", gdh1, _ENTITYDIG, 161, "", false);
//AddEntnoDig(gdh1, FindEntityNo(_FINDENTNO_FROM_BASEENT, 161, 1, 0), _DIR_FORWARD, _DIG_3DSNAP);

//AddFinishDig(gdh1 ,_FINISH);
cmdret=ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);

///MOVE 30MM EM Y-
//cmd1 = InitCommand(29, 66);
//ClearMods(cmd1);
//SetModifier(cmd1, 131, "<None>");
//SetModifier(cmd1, 132, "-30");
//SetModifier(cmd1, 133, "<None>");
//SetModifier(cmd1, 3, "<None>");
//gdh1 = InitDigInfo();
//AddEntnoDig(gdh1, FindEntityNo(_FINDENTNO_FROM_BASEENT, 161, 2, 0), _DIR_FORWARD, _DIG_3DSNAP);
//AddFinishDig(gdh1 ,_FINISH);
//cmdret=ExecCommand(cmd1, gdh1);
//FreeDigInfo(gdh1);