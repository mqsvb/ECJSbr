/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />

function temposMaquina() {
	SetPackage(1);
		if (GetPCINumber("&3AXMILL") == 0){
			nRet = MessageBox(_MB_ICONERROR, "CRIE ANTES, UMA SEQUENCIA DE USINAGEM");
			return 0;
		}
		var tempoReal;
		//var tempoEdgecam;

	
		//Custom dialog real box realVar 
		SetPCIVariable("_tempoCalc", "0,0802");		
		nretcalc = AskBox(["Digite tempo Sequencia Edgecam: "], ["_tempoCalc"]);

		// Get the PCI variables set by the AskBox (required)
		var tempoEdgecam = GetPCIVariable("_tempoCalc"); 
		
		tempoReal = tempoEdgecam*0.0802; // return minuto decimal
		hora_part = Number(Math.round(tempoReal)/60).toFixed(1) ; // return hora decimal


Display ("\nTempo estimado: " + hora_part + " horas ");


return 0;
}     

	
temposMaquina();