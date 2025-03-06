// JavaScript source code
/*

            Function: Insert fixture Positions on Sequence automactlly

    Programmer: C.FARIAS
    Company:    SKA
    Customer:   Universum M�VEIS
    Date:       16/07/2018, at 08:50
    Version:    RC 1
	
	CASE 2: Inserido valor de quantidade de ventosas e batentes na macro 6000.

 */

//debugger;
var EdgecamMACRO = 6000;
var CustomerName="Viecelli";



function InserePosicaoVentosaCnc() {
    /// <summary>
    ///     Esse m�todo � respons�vel inserir a posi��o da ventosa na �rvore de instru��es do CAM
    /// como um 'c�digo CNC'.
    /// </summary>

    var Sequence = GetPCIVariable("&SEQUENCENAME");
    if (Sequence == "") {

        nRet = MessageBox(_MB_YESNO, "Deseja Cri�-la autom�ticamente?");

        if (nRet == _MB_RET_NO) { return; } // fim da execu��o da macro.
        Create_Sequence();


    }

    // Inicializa a opera��o
    var hDigArray = [];
    mUserOperation1 = InitOperation("Fixa��es - "+CustomerName+"", "", 0);
    nRet = DoOperationMods(mUserOperation1);
    
   // Agrupa as fun��es abaixo dentro da mesma opera��o.
    nRet = CommitOperation(mUserOperation1, hDigArray);

    wait(1);

    var fixture;
    var tipo = "Batente";
    var total = GetpciNumber("$_"+CustomerName+"_" + tipo + "s_total");

    Loop(tipo, total); // loop de Batentes

    tipo = "Ventosa";
    total = GetpciNumber("$_"+CustomerName+"_" + tipo + "s_total");
    
	Loop(tipo, total); // loop de ventosas
       
    FreeOperation(mUserOperation1);
    return;
}

function Loop(tipo,total) {

    for (i = 1; i <= total; i++) {
        fixture = GetPCIVariable("$_"+CustomerName+"_"+ tipo + "_" + i);

        Insert_Fixture(fixture, total);

    }
}

function Insert_Fixture(fixture, total) {
    
    var data = JSON.parse(fixture);

    // Initialising command:- Inserir Fixtures "+CustomerName+"
    cmd0 = InitCommand(7, EdgecamMACRO);
    ClearMods(cmd0);
    // Setting modifier ' tipo'
    SetModifier(cmd0, 500, data.FixtureID);
    // Setting modifier ' x pos '
    SetModifier(cmd0, 501, data.X);
    // Setting modifier ' y pos '
    SetModifier(cmd0, 502, data.Y);
    // Setting modifier ' raio  '
    SetModifier(cmd0, 503, data.Raio);
    // Setting modifier ' Qnt  '
    SetModifier(cmd0, 504, total);
    // Setting modifier ' Comment  '
    SetModifier(cmd0, 15, data.Nome);
    nRet = ExecCommand(cmd0, -1);

}

InserePosicaoVentosaCnc();



