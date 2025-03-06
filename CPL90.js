/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />


 

		SetPCIVariable("_listcpl", "1");     // set to second item in the list

		nRet = AskBox(["List^L1 (C270)^L2 (C180)^L3 (C90)^L4 (C0)^-----^L6^L7^L8^L9^L10"], ["_listcpl"]);

		var nListcplvar = GetPCIVariable("_listcpl"); // Get the PCI variables set by the AskBox (required)


			if (nRet == -3) { 

					
				var cmd1 = InitCommand(2, 61); 
				ClearMods(cmd1); 
				SetModifier(cmd1, 242, "L[_listcpl]"); 
				SetModifier(cmd1, 100, "MILL(XY)|0"); 
				SetModifier(cmd1, 101, "3D|1"); 
				SetModifier(cmd1, 246, "Face Normal|3"); 
				SetModifier(cmd1, 165, "<Yes>"); 
				SetModifier(cmd1, 164, "<Yes>"); 
				SetModifier(cmd1, 166, "Default|0"); 
				var gdh1 = InitDigInfo();


			AskDigInfo("Pick Faces", gdh1, _ENTITYDIG, 162, "", false);

			AskDig("Pick Origem ", "PICKUP");
			AddFreeDig(gdh1, "X" + GetPCIVariable("X@PICKUP") + "Y" + GetPCIVariable("Y@PICKUP") + "Z" + GetPCIVariable("Z@PICKUP"));
			AddFinishDig(gdh1, _FINISH);  

			var cmdret = ExecCommand(cmd1, gdh1); 
			FreeDigInfo(gdh1); 


            } 
			else { 
					Display("Operação CPL90 Cancelada\\");
			}
			


 

