/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />

/*

11/06/2021 - Dev Vinicius Marques | marques.vb2@gmail.com |

	Based on Planit© Examples Files
	Writed in VS Code


*/

function saveAs(){
	
		if (GetPCINumber("&3AXMILL") == 0)
	{
		nRet = MessageBox(_MB_ICONERROR, "Crie uma sequência de Usinagem");
		return 0;
	}

	if(Dialog()) Generate();

	function Dialog(){
		var hCustom = InitOperation("Save File Viecelli", "", 0);
			
		//Dialog
		
		AddUserModToOperation(hCustom, "$_mtextFile", "Txt", "^Edição Texto", 0, "");	
				
				
		// Display the Dialog
		cmdRet = DoOperationMods(hCustom);
		ClearMods(hCustom);
		if (cmdRet!=-3)
		{
			Display("Operação Save As cancelada\\");
			bResult = ShowDialog(hCustom);
			FreeOperation(hCustom);
			return 0;
		}
		
		//Read PCI variables
		
		nametxt = GetPCIVariable("$_mtextFile");
		
		
		return 1;
	}

	function Generate(){

// Initialising command:- Part
var cmd1 = InitCommand(19, 3); 
ClearMods(cmd1); 
// Setting modifier 'Name^Browse...'
SetModifier(cmd1, 14, "C:\\Users\\Viniciusm\\Desktop\\SAVEAS-01.ppf"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 



	return 0;
	}
}
saveAs();