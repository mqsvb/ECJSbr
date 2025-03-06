/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />

/*

11/06/2021 - Dev Vinicius Marques | marques.vb2@gmail.com |

	Based on Planit© Examples Files
	Writed in VS Code


*/

function textoRapido(){
	
		if (GetPCINumber("&3AXMILL") == 0)
	{
		nRet = MessageBox(_MB_ICONERROR, "Crie uma sequência de Usinagem");
		return 0;
	}

	if(Dialog()) Generate();

	function Dialog(){
		var hCustom = InitOperation("Rotaciona CPL", "", 0);
			
		//Dialog
		
		AddUserModToOperation(hCustom, "_realValorRot", "Valor Rotaciona", "^Edição Texto", 0,"90");	
		AddUserModToOperation(hCustom, "_realAltura", "Altura Txt", "^Edição Texto", 0,"12");
			
				
		// Display the Dialog
		cmdRet = DoOperationMods(hCustom);
		ClearMods(hCustom);
		if (cmdRet!=-3)
		{
			Display("Operação cancelada\\");
			bResult = ShowDialog(hCustom);
			FreeOperation(hCustom);
			return 0;
		}
		
		//Read PCI variables
		
		txtValorRot = GetPCINumber("_realValorRot");
		txtAlt= GetPCINumber("_realAltura")
		
		return 1;
	}

	// Initialising command:- Workplane
	var cmd1 = InitCommand(1, 61); 
	ClearMods(cmd1); 
	// Setting modifier 'Workplane'***********************
	SetModifier(cmd1, 240, "L1");
	// Setting modifier 'Work Plane'
SetModifier(cmd1, 100, "MILL(XY)|0"); 
// Setting modifier 'Dimensions'
SetModifier(cmd1, 101, "3D|1"); 
// Setting modifier 'Associative'
SetModifier(cmd1, 165, "<Yes>"); 
// Setting modifier 'Workplane Type'
SetModifier(cmd1, 166, "Default|0"); 
// Setting modifier '{Z} Rotation'*************************
SetModifier(cmd1, 23, txtValorRot); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 


	return 0;
	}
textoRapido();