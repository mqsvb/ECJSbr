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
		var hCustom = InitOperation("Gravação Texto Viecelli©", "", 0);
			
		//Dialog
		
		AddUserModToOperation(hCustom, "$_mtextFile", "Txt", "^Edição Texto", 0, "");	
		AddUserModToOperation(hCustom, "_realLargura", "Largura Txt", "^Edição Texto", 0,"");	
		AddUserModToOperation(hCustom, "_realAltura", "Altura Txt", "^Edição Texto", 0,"12");
		AddUserModToOperation(hCustom, "_level", "Level", "^Espessura MDF", 0,"13");	
		
				
		// Display the Dialog
		cmdRet = DoOperationMods(hCustom);
		ClearMods(hCustom);
		if (cmdRet!=-3)
		{
			Display("Operação Text-Cycle cancelada\\");
			bResult = ShowDialog(hCustom);
			FreeOperation(hCustom);
			return 0;
		}
		
		//Read PCI variables
		
		nametxt = GetPCIVariable("$_mtextFile");
		leveltxt = GetPCINumber("_level");
		txtLarg = GetPCINumber("_realLargura");
		txtAlt= GetPCINumber("_realAltura")
		
		return 1;
	}

	function Generate(){

		// Initialising command:- Create Text Feature
		cmd1 = InitCommand(50, 11);
		ClearMods(cmd1);
		// Setting modifier 'FontType'
		SetModifier(cmd1, 184, "Vector|1");
		// Setting modifier 'Rotation'
		SetModifier(cmd1, 174, "0.0");
		// Setting modifier 'Mirror'
		SetModifier(cmd1, 176, "None|0");
		// Setting modifier 'Alignment'
		SetModifier(cmd1, 178, "Centre|2");
		// Setting modifier 'Height'*************************************************
		SetModifier(cmd1, 171, txtAlt);
		// Setting modifier 'Colour'
		SetModifier(cmd1, 1, "White|7");
		// Setting modifier 'Layer'
		SetModifier(cmd1, 3, "Geometry");
		// Setting modifier 'Style'
		SetModifier(cmd1, 2, "Solid|0");
		// Setting modifier 'String^Edit...'*******************************************
		nametxt = nametxt.toUpperCase(); //************************
		SetModifier(cmd1, 170, nametxt);
		// Setting modifier 'Font/Style'
		SetModifier(cmd1, 175, "standard|0");
		// Setting modifier 'Width'*****************************************************
		SetModifier(cmd1, 172, txtLarg);
		// Setting modifier 'Line Spacing'
		SetModifier(cmd1, 179, "5");
		// Setting modifier 'Slant'
		SetModifier(cmd1, 173, "90");
		// Setting modifier 'Language'
		SetModifier(cmd1, 207, "");
		// Setting modifier 'Script'
		SetModifier(cmd1, 195, "Default|0");
		gdh1 = InitDigInfo();
	
	
	AskDig("Coordenada do Texto", "PICKTEXT"); 
	AddFreeDig(gdh1, "X"+ GetPCIVariable("X@PICKTEXT")+ "Y" + GetPCIVariable("Y@PICKTEXT") + "Z" + leveltxt);
	AddDigInfoPortNumber(1);
	AddDigArray(gdh1);
	AddFinishDig(gdh1, _FINISH);
	var cmdret = ExecCommand(cmd1, gdh1); 
	FreeDigInfo(gdh1);	


		
		//Include("DES-160.js");
		// Initialising command:- Milling Cutter
		cmd0 = InitCommand(36, 108);
		ClearMods(cmd0);
		// Setting modifier 'ToolStore^Find...'
		SetModifier(cmd0, 180, "DES-160");
		// Setting modifier 'Mount Description'
		SetModifier(cmd0, 269, "Dmin=1mm Chanfro 45°");
		// Setting modifier 'Position'
		SetModifier(cmd0, 48, "2");
		// Setting modifier 'Comment'
		SetModifier(cmd0, 15, "DES-160");
		// Setting modifier 'Diameter'
		SetModifier(cmd0, 47, "22.38");
		// Setting modifier 'Tool Type'
		SetModifier(cmd0, 140, "Mill|0");
		// Setting modifier 'SubType'
		SetModifier(cmd0, 188, "Taper|4");
		// Setting modifier 'Angle'
		SetModifier(cmd0, 24, "90");
		// Setting modifier 'Units'
		SetModifier(cmd0, 116, "Millimetres|1");
		// Setting modifier 'Feed Type'
		SetModifier(cmd0, 165, "Per Minute|1");
		// Setting modifier 'More...'
		SetModifier(cmd0, 153, "");
		// Setting modifier 'Flute Length'
		SetModifier(cmd0, 179, "11");
		// Setting modifier 'Number of Teeth'
		SetModifier(cmd0, 130, "2");
		// Setting modifier 'Reach'
		SetModifier(cmd0, 147, "80");
		// Setting modifier 'Roughing'
		SetModifier(cmd0, 176, "<Yes>");
		// Setting modifier 'Finishing'
		SetModifier(cmd0, 177, "<Yes>");
		// Setting modifier 'Clearance Type'
		SetModifier(cmd0, 195, "None|1");
		// Setting modifier 'Colour'
		SetModifier(cmd0, 125, "2|2");
		// Setting modifier 'Layer'
		SetModifier(cmd0, 126, "DES-160");
		// Setting modifier 'Loading'
		SetModifier(cmd0, 216, "");
		// Setting modifier 'Z Gauge'
		SetModifier(cmd0, 61, "115");
		// Setting modifier 'Length'
		SetModifier(cmd0, 185, "50");
		// Setting modifier 'Diameter'
		SetModifier(cmd0, 186, "22.38");
		// Setting modifier 'Visible'
		SetModifier(cmd0, 287, "<Yes>");
		// Setting modifier 'Library'
		SetModifier(cmd0, 200, "");
		// Setting modifier 'Source'
		SetModifier(cmd0, 215, "Cutting Tools|1");
		// Setting modifier 'Toolstore'
		SetModifier(cmd0, 158, "");
		// Setting modifier 'Holder Graphic^Browse...'
		SetModifier(cmd0, 171, "Holder-RoverC9.meg");
		// Setting modifier 'Holder Z Offset'
		SetModifier(cmd0, 174, "25");
		// Setting modifier 'Holder Origin'
		SetModifier(cmd0, 281, "Flute Height|0");
		// Setting modifier 'Spindle'
		SetModifier(cmd0, 252, "");
		// Setting modifier 'Direction'
		SetModifier(cmd0, 161, "Forward|2");
		// Setting modifier 'Gear'
		SetModifier(cmd0, 162, "Auto|0");
		// Setting modifier 'Max RPM'
		SetModifier(cmd0, 163, "50000");
		// Setting modifier 'Coolant'
		SetModifier(cmd0, 243, "Off|0");
		// Setting modifier 'Through Coolant'
		SetModifier(cmd0, 146, "Off|0");
		// Setting modifier 'Angled Head'
		SetModifier(cmd0, 142, "");
		// Setting modifier 'Source TS DB'
		//SetModifier(cmd0, 270, "Provider=SQLNCLI11;Server=ENG-SIDINEI\\ECSQLEXPRESS;Database=Rover2019R1;DataTypeCompatibility=80;User ID=toolstore_user;Password=y74rvpy2d24atkpbkd_c2sbcu;");
		// Setting modifier 'Mount TS PK'
		SetModifier(cmd0, 271, "4712");
		// Setting modifier 'Time TS Mount'
		SetModifier(cmd0, 273, "2020-06-25 13:59:34");
		// Setting modifier 'Time TS Tool'
		SetModifier(cmd0, 274, "2020-06-25 13:59:34");
		nRet = ExecCommand(cmd0, -1);


		// Initialising command:- Text Mill
		cmd1 = InitCommand(102, 75);
		ClearMods(cmd1);
		// Setting modifier 'Feedrate'
		SetModifier(cmd1, 5, "5");
		// Setting modifier 'Plunge Feed'
		SetModifier(cmd1, 6, "5");
		// Setting modifier 'Speed'
		SetModifier(cmd1, 7, "9500");
		// Setting modifier 'Technology'
		SetModifier(cmd0, 77, "General|1");
		// Setting modifier 'Tolerance'
		SetModifier(cmd1, 62, "0.01");
		// Setting modifier 'Depth'
		SetModifier(cmd1, 162, "2");
		// Setting modifier 'Clearance'******************************
		SetModifier(cmd1, 28, leveltxt+20);
		// Setting modifier 'Retract'
		SetModifier(cmd0, 29, "2");
		// Setting modifier 'leveltxt'*******************************
		SetModifier(cmd1, 161, leveltxt);
		// Setting modifier 'Depth'
		SetModifier(cmd1, 9, "-1.5");
		// Setting modifier 'Finish At'
		SetModifier(cmd1, 107, "Clearance|2");

		var gdh1 = InitDigInfo();
		var cmdret=ExecCommand(cmd1, gdh1);
		AddFinishDig(gdh1 ,_FINISH);
		FreeDigInfo(gdh1);
					
		//Include("TOOLCHANGE-Z.js");
		// Inicializar comando:- toolchange Z
		cmd1 = InitCommand(101, 41);
		ClearMods(cmd1);
		// Configurar parâmetros 'Nome'
		SetModifier(cmd1, 100, "Z|3");
		gdh1 = InitDigInfo();
		cmdret=ExecCommand(cmd1, gdh1);
		FreeDigInfo(gdh1);


	return 0;
	}
}
textoRapido();
