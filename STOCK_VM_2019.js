/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
// *** PCI Template ***
function main()
{
SetPackage(1);
if (GetPCINumber("&3AXMILL") == 0)
{
	nRet = MessageBox(_MB_ICONERROR, "CRIAR SEQUENCIA USINAGEM ANTES DO BRUTO");
	return 0;
}

SetPackage(0);
ToolbarMods(1);
var temp=0;

SetPCIVariable("StockBase", GetPCIVariable("&NEXTENT")); //use Number(GetPCIVariable("X")) if necessary

//Display("Base is "+GetPCIVariable("StockBase")+"\\");

// Initialising command:- Stock
cmd1 = InitCommand(50, 200);
ClearMods(cmd1);
// Setting modifier 'Automatic Stock'
SetModifier(cmd1, 61, "<Yes>");
// Setting modifier 'Shape'
SetModifier(cmd1, 52, "Box|1");
//%ASKMODS=CMDRET=[cmd1]
cmdret = ExecCommand(cmd1, -1);

SetPCIVariable("StockBase1", GetPCIVariable("&NEXTENT")-1); //use Number(GetPCIVariable("X")) if necessary

//Display("\\Base1 is "+GetPCIVariable("StockBase1")+"\\");

SetPCIVariable("cont", GetPCIVariable("StockBase")); //use Number(GetPCIVariable("X")) if necessary
SetPCIVariable("contponto", 0); //use Number(GetPCIVariable("X")) if necessary

/* TODO: %label=denovo */
do {
//Display("\\Cont= "+GetPCIVariable("cont")+"\\");

nret = Query(Number(GetPCIVariable("cont")), true);

SetPCIVariable("Tipo", Number(GetPCIVariable("&ETYPE"))); //use Number(GetPCIVariable("X")) if necessary


if (Number(GetPCIVariable("Tipo"))==4)  //use Number(GetPCIVariable("X")) if necessary
{
	temp = Number(GetPCIVariable("contponto"))+1;
SetPCIVariable("contponto", temp); //use Number(GetPCIVariable("X")) if necessary

//%DISPLAY=Entidade Nº [cont]\ Tipo = [Tipo]
//Display("\\Entidade Nº "+GetPCIVariable("contponto")+"\ Tipo = "+GetPCIVariable("Tipo"));
//Display("\\Posição X"+GetPCIVariable("&XSTART")+" Y"+GetPCIVariable("&YSTART")+" Z"+GetPCIVariable("&ZSTART")+"\\");

//  colar arredondamento aqui.
//**    X1, Y1, Z1, X2, Y2, Z2 ARE YOUR SOLID'S EXTENSIONS    ***
var X_Temp=Number(GetPCIVariable("&XSTART"));
var Y_Temp=Number(GetPCIVariable("&YSTART"));
var Z_Temp=Number(GetPCIVariable("&ZSTART"));

//arredondamento();

if (Number(GetPCIVariable("contponto"))==1)  //use Number(GetPCIVariable("X")) if necessary
{

var X_Maior=Number(GetPCIVariable("&XSTART"));
var Y_Maior=Number(GetPCIVariable("&YSTART"));
var Z_Maior=Number(GetPCIVariable("&ZSTART"));
var X_Menor=Number(GetPCIVariable("&XSTART"));
var Y_Menor=Number(GetPCIVariable("&YSTART"));
var Z_Menor=Number(GetPCIVariable("&ZSTART"));


}

//arredondamento 2 aqui..........
//arredontamento_2();

if (Number(GetPCIVariable("contponto"))>1)  //use Number(GetPCIVariable("X")) if necessary
{
//Display("\\maior que um");

	if (X_Maior<X_Temp) {X_Maior=X_Temp;}
	if (Y_Maior<Y_Temp) {Y_Maior=Y_Temp;}
	if (Z_Maior<Z_Temp) {Z_Maior=Z_Temp;}
	if (X_Menor>X_Temp) {X_Menor=X_Temp;}
	if (Y_Menor>Y_Temp) {Y_Menor=Y_Temp;}
	if (Z_Menor>Z_Temp) {Z_Menor=Z_Temp;}

}


}
 temp = Number(GetPCIVariable("cont"))+1;
SetPCIVariable("cont", temp); //use Number(GetPCIVariable("X")) if necessary

/* TODO: %if [cont]<=[StockBase1] %goto=denovo */
}
while (Number(GetPCIVariable("cont"))<=Number(GetPCIVariable("StockBase1")));


//%DISPLAY=Start: X1=[X_Menor] Y1=[Y_Menor] Z1=[Z_Menor]\End: X2=[X_Maior] Y2=[Y_Maior] Z2=[Z_Maior]
;
temp = X_Maior-X_Menor;
temp = Math.round(temp*1000)/1000;
temp = temp.toString();
temp = temp.replace(",",".");
SetPCIVariable("DIM_X", temp); //use Number(GetPCIVariable("X")) if necessary
;
temp = Y_Maior-Y_Menor;
temp = Math.round(temp*1000)/1000;
temp = temp.toString();
temp = temp.replace(",",".");
SetPCIVariable("DIM_Y", temp); //use Number(GetPCIVariable("X")) if necessary
;
temp = Z_Maior-Z_Menor;
temp = Math.round(temp*1000)/1000;
temp = temp.toString();
temp = temp.replace(",",".");
SetPCIVariable("DIM_Z", temp); //use Number(GetPCIVariable("X")) if necessary
;
Display("\\STOCK BLOCK   X="+GetPCIVariable("DIM_X")+"  Y="+GetPCIVariable("DIM_Y")+"  Z="+GetPCIVariable("DIM_Z")+"\\");


/* TODO: %Label=Finish */

// Initialising command:- Entities
cmd1 = InitCommand(10, 69);
ClearMods(cmd1);
brutos = InitDigInfo();
// Finish input
SetPCIVariable("cont", Number(GetPCIVariable("StockBase"))); //use Number(GetPCIVariable("X")) if necessary
SetPCIVariable("contponto", "0"); //use Number(GetPCIVariable("X")) if necessary

/* TODO: %label=denovo1 */
do {
	nret = Query(Number(GetPCIVariable("cont")), true);

	SetPCIVariable("Tipo", Number(GetPCIVariable("&ETYPE"))); //use Number(GetPCIVariable("X")) if necessary
	if (Number(GetPCIVariable("Tipo"))==250)  //use Number(GetPCIVariable("X")) if necessary
	{
		// %DISPLAY=Entidade Nº [cont]\ Tipo = [Tipo]\
		// Add Entity Selection by number, 3DSnap YES Direction Forward (Topology ID)
		temp=Number(GetPCIVariable("cont"))+1;
		AddEntnoDig(brutos, temp, _DIR_FORWARD, _DIG_3DSNAP);
	}

	temp=Number(GetPCIVariable("cont"))+1;
	SetPCIVariable("cont", temp); //use Number(GetPCIVariable("X")) if necessary
/* TODO: %if [cont]<=[StockBase1] %goto=denovo1 */
}
while (Number(GetPCIVariable("cont"))<=Number(GetPCIVariable("StockBase1")));


AddFinishDig(brutos , _FINISH);
AddFinishDig(brutos , _FINISH);
cmdret = ExecCommand(cmd1, brutos);
FreeDigInfo(brutos);



// Initialising command:- Stock
cmd1 = InitCommand(50, 200);
ClearMods(cmd1);
// Setting modifier ''
SetModifier(cmd1, 255, "<Yes>");
// Setting modifier 'Type'
SetModifier(cmd1, 51, "Stock|1");
// Setting modifier 'Shape'
SetModifier(cmd1, 52, "Box|1");
// Setting modifier 'Depth'
SetModifier(cmd1, 5, "<Digitise>");
// Setting modifier ' '
SetModifier(cmd1, 152, "");
// Setting modifier 'Colour'
SetModifier(cmd1, 1, "3|3");
// Setting modifier 'Layer'
SetModifier(cmd1, 3, "BrutoViec");
// Setting modifier 'Style'
SetModifier(cmd1, 2, "0|0");
// Setting modifier 'Box Offset'
SetModifier(cmd1, 62, "0.0");
// Setting modifier 'Cylinder Offset'
SetModifier(cmd1, 69, "0.0");
gdh1 = InitDigInfo();

// Add Free dig to Selection input data
AddFreeDig(gdh1, "Z"+Z_Maior);
 
// Add Free dig to Selection input data
AddFreeDig(gdh1, "Z"+Z_Maior+"X"+X_Maior+"Y"+Y_Maior);  

// Add Free dig to Selection input data
AddFreeDig(gdh1, "Z"+Z_Menor+"X"+X_Menor+"Y"+Y_Menor);  

cmdret = ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);

// Initialising command:- Delete Layer
cmd1 = InitCommand(50, 136);
ClearMods(cmd1);
// Setting modifier 'Name'
SetModifier(cmd1, 51, "Apagar;");
gdh1 = InitDigInfo();
cmdret = ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);

//
//**** PASSAR PARA MANUFATURA *****
SetPackage(1);

//*** DEFINIR COMENTÁRIO PARA MÁQUINA ****
SetPCIVariable("FILA", "5"); //use Number(GetPCIVariable("X")) if necessary
//%CALC=Y2=[Y2]*-1
if (Number(GetPCIVariable("DIM_Y"))>1000)  //use Number(GetPCIVariable("X")) if necessary
{
SetPCIVariable("FILA", "1"); //use Number(GetPCIVariable("X")) if necessary
}
//
// inicializando Comando :- Insert Nc Code
cmd1 = InitCommand(7, 109);
ClearMods(cmd1);
//
SetModifier(cmd1, 15, "G71 LX="+GetPCIVariable("DIM_X")+" LY="+GetPCIVariable("DIM_Y")+" LZ="+GetPCIVariable("DIM_Z")+" PLPZ="+GetPCIVariable("DIM_Z")+" HC=1 PRS=0 PRL=1 FIL="+GetPCIVariable("FILA")+" BLO=1 ACC=0 RUO=2 PDM=0 PUOS=0 KA=530");
gdh1 = InitDigInfo();
cmdret = ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);

// MACRO DELTA
/* TODO: %IF [DIM_Y]>999 %Goto=Endfila */
var FILA=1;

if (Number(GetPCIVariable("DIM_Y"))<999) {FILA=2;}

cmd1 = InitCommand(7, 126);
ClearMods(cmd1);
SetModifier(cmd1, 108, "FILA-"+FILA+"|"+FILA);
gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 
                    
var cmd1 = InitCommand(11, 83); 
ClearMods(cmd1); 
SetModifier(cmd1, 194, "0"); 
SetModifier(cmd1, 197, "<Yes>"); 
SetModifier(cmd1, 198, "<Yes>"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- New Layer
var cmd1 = InitCommand(50, 135); 
ClearMods(cmd1); 
// Setting modifier 'Name'
SetModifier(cmd1, 51, "Geo"); 
// Setting modifier 'Visible'
SetModifier(cmd1, 42, "<Yes>"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

return 0;
}

main();





