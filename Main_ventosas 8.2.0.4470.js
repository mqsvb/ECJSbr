/*

            Function: Insert 'ventosas' automactlly inside Edgecam by position

    Programmer: C.FARIAS
    Company:    SKA
    Customer:   UNIVERSUM MÓVEIS
    Date:       16/07/2018, at 08:50 
    Version:    2018 R1
	
	CASE 1: alterada montagem dos batentes e das ventosas para adaptar as dimensões do bruto no lugar das dimensões da peça.

    17/07/2018 - C.FARIAS: Alteradas as variaveis que recebem os dados do SQL para objeto "Model"

    18/07/2018 - C.FARIAS: Criado ponto central no retangulo qnd aplicado rotação da Ventosa
                           Criado Campo para Inserir o Angulo de Rotação da Ventosa para inserção manual
                           Criado novo Método DefineRotation que cria o retangulo longe da peça, rotaciona e depois espera o usuario finalizar o translate.


 */
/// <reference path= "<EDGELOCAL>\PCI\pci-vsdoc.js" />

//debugger;

// Configurações Iniciais abaixo.
{
/// <summary>
///     Nome do Cliente
/// </summary>
var CustomerName="Viecelli";

    
/// <summary>
///     Esse objeto contém a linha à ser inserida dentro do CNC diretamente pelo Edgecam.
/// </summary>
var mPosicaoVentosaCnc;

/// <summary>
///     Esse objeto é o buffer do Edgecam responsável pela execução dos comandos.
/// </summary>
var mBuffer;

/// <summary>
///     Esse objeto é responsável por continuar inserindo as ventosas dentro do Edgecam.
/// </summary>
var mVentosa;

/// <summary>
///     Contador para saber quantos planos tem que criar e quantos já foram criados (sempre iniciará em 1,
/// mas ela está inicializada em 0).
/// </summary>
var mContador;

/// <summary>
///     Contém o número de ventosas e Batentes que o usuário decidiu inserir.
/// </summary>
var mNumVentosasInserir;
var mNumBatentesInserir;

/// <summary>
///     2 - Out of Range. Retorna contador porque não sera possivel inserir as fixações.
///     1 - Usuário cancelou a ação de inserir as ventosas.
///     0 - Continua inserindo as ventosas.
/// </summary>
var mUserCancelouAcao=0;

/// <summary>
///     Lista de fixações capturada do Fixture Manager (Nome padrão VENTOSA e BATENTE)
/// </summary>
    var Model = [];   // novo array de objetos para estruturar melhor os dados do SQL.
    // .type .Name .Path .Raio 
    // [0]  {.Total  .VentTotal .BatTotal}   

/// <summary>
///     Valores Minimos e maximos do Sólido visivel no edgeam em XYZ em relação a CPL ativa.
/// </summary>
var SolidXmin;
var SolidXmax;
var SolidYmin;
var SolidYmax;
var SolidZmin;
var SolidZmax;



var mPosX;
var mPosY;
var mPosZ;
/// <summary>
///     Ponto Central do Retangulo de visualização com Rotação diferente de 0.
/// </summary>
var PontoCentral;

/// <summary>
///     Arrai de Posições calculadas para inserção automática das fixações.
/// </summary>
var XArray = [];
var YArray = [];
var mPosLineY;

/// <summary>
///    Listas e ID's da GUI.
/// </summary>
var ListaVentosas = "^<Selecione>";
var ListaBatentes = "^<Selecione>";
var BatenteID = [];
var VentosaID = [];
var rListVentosas;
var rListBatentes;
var FixtureID;
var rRadioRefBatentes;

// Diametro do Batente
var BatenteDIAM = 10;


// Contador para gerar o Indice da variavel PCI que salvará os detalhes das posições.
var m = 0;

// Variavei temporaria.
var tmp;

// Define Mascara no edgecam salvando informações em XML para o caminho das imagens.
    Define_Masks();

// Conecta ao SQL
SQL_conect();
}

// Captura as Dimensões do Solido
GetSolidDimensions();

if (mUserCancelouAcao==0) {
mPosZ = SolidZmin;  // valor em z capturado no metodo GetSolidDimensions



// Executa a interface de Usuário.
CreateUserGui(); 
}
// Limpa as variaveis da interface de usuário.
Clear_GUI_Variables();

function CreateUserGui()
{
    /// <summary>
    ///     Esse método cria uma 'interface' para o usuário.
    /// </summary>

   
    // Inicializa a operação
    mUserOperation = InitOperation("Inserção de ventosas -  "+CustomerName, "", 0);

    // Adiciona controles na interface.s
    var SeparadorVentosas = "Ventosas à Inserir";
    var SeparadorBatentes = "Batentes à Inserir";

    // Gerar listas de Ventosas e Batentes;
    Gerar_Listas();

    
    // VEntosas
    AddUserModToOperation(mUserOperation, "_checkInsertVentosas", "Inserir Ventosas", "Geral^" + SeparadorVentosas, 0, "1");
    AddUserModToOperation(mUserOperation, "ListVentosas", "Ventosas" + ListaVentosas, "Geral^" + SeparadorVentosas, 1, "");
    AddUserModToOperation(mUserOperation, "_intSkaNumVentosas", "Quant.", "Geral^" + SeparadorVentosas, 0, "1");
    AddUserModToOperation(mUserOperation, "_realSkaRotVentosas", "Angulo", "Geral^" + SeparadorVentosas, 0, "1");
    AddUserModToOperation(mUserOperation, "_checkSkaAutoVentosas", "Inserir Automaticamente", "Geral^" + SeparadorVentosas, 0, "1");
    AddValidStateUserMod(mUserOperation, "_checkInsertVentosas", 0, "ListVentosas", 0);
    AddValidStateUserMod(mUserOperation, "_checkInsertVentosas", 0, "_intSkaNumVentosas", 0);
    AddValidStateUserMod(mUserOperation, "_checkInsertVentosas", 0, "_checkSkaAutoVentosas", 0);
    AddValidStateUserMod(mUserOperation, "_checkInsertVentosas", 0, "_realSkaRotVentosas", 0);
    AddValidStateUserMod(mUserOperation, "_checkSkaAutoVentosas", 1, "_realSkaRotVentosas", 0);

    //Batentes
    AddUserModToOperation(mUserOperation, "_checkInsertBatentes", "Inserir Batentes", "Geral^" + SeparadorBatentes, 0, "1");
    AddUserModToOperation(mUserOperation, "ListBatentes", "Batentes" + ListaBatentes, "Geral^" + SeparadorBatentes, 0, "1");
    AddUserModToOperation(mUserOperation, "_intSkaNumBatentes", "Quant.", "Geral^" +SeparadorBatentes, 0, "1");
    AddUserModToOperation(mUserOperation, "_checkSkaAutoBatentes", "Inserir Automaticamente", "Geral^" + SeparadorBatentes, 0, "1");
    AddUserModToOperation(mUserOperation, "_radioSkaBatentesPos", "Ref. XY^Inf. Esquerdo^Inf. Direito^Sup. Esquerdo ^Sup. Direito ", "Geral^" + SeparadorBatentes, 0, "1");
    AddValidStateUserMod(mUserOperation, "_checkInsertBatentes", 0, "ListBatentes", 0);
    AddValidStateUserMod(mUserOperation, "_checkInsertBatentes", 0, "_intSkaNumBatentes", 0);
    AddValidStateUserMod(mUserOperation, "_checkInsertBatentes", 0, "_checkSkaAutoBatentes", 0);
    AddValidStateUserMod(mUserOperation, "_checkInsertBatentes", 0, "_radioSkaBatentesPos", 0);





    
    do {
           // Mostra o dialog para o usuário e espera o retorno.
        cmdRet = DoOperationMods(mUserOperation);

        if (cmdRet != _FINISH) { break; }

        // Retorna feedback ao usuário dos campos que não estão corretos e reexibe a caixa de Dialogo.
        strAlert = "O Campo ";
        var erro = 0;
        if (GetPCINumber("_checkInsertVentosas") == 1) {
            if (GetPCINumber("ListVentosas") == 1) { strAlert += "Ventosas Precisa ser Definido"; alert(strAlert); erro = 1; continue; }
            if (GetPCINumber("_intSkaNumVentosas") == 0) { strAlert += "Qnt de Ventosas Precisa ser Definido"; alert(strAlert); erro = 1; continue; }
            

        }

        if (GetPCINumber("_checkInsertBatentes") == 1) {
            if (GetPCINumber("ListBatentes") == 1) { strAlert += "Batentes Precisa ser Definido"; alert(strAlert); erro = 1; continue; }
            if (GetPCINumber("_intSkaNumBatentes") == 0) { strAlert += "Qnt de Batentes Precisa ser Definido"; alert(strAlert); erro = 1; continue; }
        }

       

    } while (erro == 1);

        // Define o ID das fixações selecionadas no User GUI em relação a lista capturada do SQL.
        rListVentosas = VentosaID[GetPCINumber("ListVentosas")];
        rListBatentes = BatenteID[GetPCINumber("ListBatentes")];
        rRadioRefBatentes = GetPCINumber("_radioSkaBatentesPos");
        
    

    //alert("rRadioRefBatentes: " + rRadioRefBatentes);

    //Valors do Switch case
    //var _FINISH = -3;
    //var _ESCAPE = -2;
    //var _ABORT = -1;
    switch (cmdRet)
    {  

        case _FINISH: {
            Model[rListVentosas].Angulo = GetPCINumber("_realSkaRotVentosas");
            InicializaInsercaoVentosa(); break;
        }

        
    }

    FreeOperation(mUserOperation);
}

function Gerar_Listas() {
    /// <summary>
    ///     Esse método gera a Lista de Batentes e Ventosas exibida no UserGui.
    /// </summary>
    

    var i = 1;     // contador de elementos no SQL
    var j = 2;     // Contador de ventosas
    var l = 2;     // Contador de Batentes

    while (i <= Model[0].Total) {

        switch (Model[i].Type) {

            case "Ventosa":
                // ...Salva cada Item para gerar uma lista de opções
                ListaVentosas += "^";
                ListaVentosas += Model[i].Name;
                VentosaID[j] = [i];
                j++;
                break;

            case "Batente":
                // ...Salva cada Item para gerar uma lista de opções
                ListaBatentes += "^";
                ListaBatentes += Model[i].Name;
                BatenteID[l] = [i];
                l++;
                break;

        }

        i++;

    }
}

function InicializaInsercaoVentosa()
{
    /// <summary>
    ///     Esse método inicializa a inserção das ventosas dentro do Edgecam.
    /// </summary>

    mNumVentosasInserir = Number(GetPCIVariable("_intSkaNumVentosas"));
    mNumBatentesInserir = Number(GetPCIVariable("_intSkaNumBatentes"));

    i = 0;
    while (i < mNumBatentesInserir && mUserCancelouAcao != 1) {

        // inserir automaticamente os batentes
        BatenteDIAM = Model[rListBatentes].Raio * 2;
        if (getpcinumber("_checkSkaAutoBatentes") == 1) { AutoInsert(Model[rListBatentes].IdType, mNumBatentesInserir); break; }

        Criar_retangulo(rListBatentes);



        if (mUserCancelouAcao == 0) {

            // Alinha o batente na tangencia da peça
            calc_tangencia_Batentes();

            // Insere as fixações
            Insere_Fixture(rListBatentes,i);

            i++;
        }


        if (mUserCancelouAcao == 2) {
            // Out of Range. Retorna contador porque não sera possivel inserir.
            Undo();
            continue;
        }

        if (mUserCancelouAcao == 1) {
            // o usuário cancelou
            break;

        }
    }

    i = 0;
    while (i < mNumVentosasInserir && mUserCancelouAcao != 1)
    {
        // inserir automaticamente os Ventosas
        if (getpcinumber("_checkSkaAutoVentosas") == 1) { AutoInsert(Model[rListVentosas].IdType, mNumVentosasInserir); break; }

        Criar_retangulo(rListVentosas);

            if (mUserCancelouAcao== 0) {
                // Insere as fixações normalmente
				
                Insere_Fixture(rListVentosas,i);

                i++;
            }

            
            if (mUserCancelouAcao== 2) {
                // Out of Range. Retorna contador porque não sera possivel inserir.
                continue;
            }

            if (mUserCancelouAcao == 1) {
                // o usuário cancelou
               break ;
       
            }

       
    }

  
}

function calc_tangencia_Batentes() {
    /// <summary>
    ///     Esse método calcula a posição de encaixe dos batentes tangentes a peça
    /// </summary>

     /* Direção de inserção dos batentes 
    rRadioRefBatentes = 1 Canto Inferior Esquerdo
                        2 Canto Inferior Direito
                        3 Canto Superior Esquerdo
                        4 Canto Superior Direito

    */
    var tmp = (BatenteDIAM / 2);
    switch (rRadioRefBatentes) {
        case 1: {
            if (mPosX < SolidXmin) { mPosX = tmp * (-1); }

            if (mPosY < SolidYmin) { mPosY = tmp * (-1);  }

            break;
        }
        case 2: {
            if (mPosX > SolidXmax) { mPosX = SolidXmax + tmp ;  }

            if (mPosY < SolidYmin) { mPosY = tmp * (-1);  }

            break;
        }
        case 3: {
            if (mPosX < SolidXmin) { mPosX = tmp * (-1); }

            if (mPosY > SolidYmax) { mPosY = SolidYmax + tmp; }

            break;
        }
        case 4: {
            if (mPosX > SolidXmax) { mPosX = SolidXmax + tmp; }

            if (mPosY > SolidYmax) { mPosY = SolidYmax + tmp;  }

            break;
        }
    }

}

function Insere_Fixture(FixtureID,m) {

    var InitFIXTURE = GetPCINumber("&nextent");
    
// Initialising command:- Insert Fixture
cmd99 = InitCommand(28, 717);
ClearMods(cmd99);
// Setting modifier 'Fixture'
SetModifier(cmd99, 300, "");
// Setting modifier 'Solid'
    Model[FixtureID].Path = Model[FixtureID].Path.replace("\"", "\\");     // Ajusta a saida do caminho para ter duas barras.
    SetModifier(cmd99, 80, Model[FixtureID].Path);

// Setting modifier 'Angle'
    SetModifier(cmd99, 81, Model[FixtureID].Angulo);
// Setting modifier 'X1_Position'
SetModifier(cmd99, 137, mPosX);
// Setting modifier 'Y1_Position'
SetModifier(cmd99, 138, mPosY);
// Setting modifier 'Z1_Position'
SetModifier(cmd99, 139, mPosZ);
// Setting modifier 'Units of Solids'
SetModifier(cmd99, 168, "1");
gdh1 = InitDigInfo();
cmdret=ExecCommand(cmd99, gdh1);
    FreeDigInfo(gdh1);

   

	//Salva a posição da ventosa inserida.
    mPosX = Math.round(mPosX * 1000) / 1000;
    mPosY = Math.round(mPosY * 1000) / 1000;
    mPosZ = Math.round(mPosZ * 1000) / 1000;

    // escrita em formato JSON para usar na proxima macro.
    mPosicaoVentosaCnc = {
        "FixtureID": Model[FixtureID].IdType,
        "Tipo": Model[FixtureID].Type,
        "Nome": Model[FixtureID].Name,
        "X": mPosX,
        "Y": mPosY,
        "Z": mPosZ,
        "Angulo": Model[FixtureID].Angulo,
        "Raio": Model[FixtureID].Raio,
        "Comprimento": Model[FixtureID].Comprimento,
        "Largura": Model[FixtureID].Largura,
        "Altura": Model[FixtureID].Altura

    };

    mPosicaoVentosaCnc = JSON.stringify(mPosicaoVentosaCnc);
    m++; // contagem começa do 1.
    // Armazena todas as Posições na VARIAVEL PCI
    Calc("$_"+CustomerName+"_" + Model[FixtureID].Type +"_" + m, mPosicaoVentosaCnc);
    
    //contador de Fuxações Inseridas.
    Calc("$_"+CustomerName+"_" + Model[FixtureID].Type + "s_Total", m);  //salva nas Variaveis PCI do edgecam o numero de Fixtures Inseridas.

    //Display("\\Centro " + mPosicaoVentosaCnc);
   
    //Aqui ele insere a linha CNC na sequência.
    //InserePosicaoVentosaCnc();  //Por hora não vou inserir na sequencia automaticamente.
}

function Criar_retangulo(ID)
{
    /// <summary>
    ///     Esse método cria um retângulo dentro do Edgecam 'simulando' uma ventosa.
    /// </summary>

    var retangulo = GetPCINumber("&nextent");
    retangulo++;

    // Inicializar comando:- Retângulo
    cmd1 = InitCommand(2, 1002);
    ClearMods(cmd1);

    if (Model[ID].Shape == "Retangular") {
        // Configurar parâmetros 'Comprimento'
        SetModifier(cmd1, 4, Model[ID].Comprimento);
        // Configurar parâmetros 'Largura'
        SetModifier(cmd1, 5, Model[ID].Largura);
        // Setting modifier 'Corner Radius'
        SetModifier(cmd1, 7, "10");
    } else {
        // Configurar parâmetros 'Comprimento'
        SetModifier(cmd1, 4, Model[ID].Raio*2);
        // Configurar parâmetros 'Largura'
        SetModifier(cmd1, 5, Model[ID].Raio*2);
        // Setting modifier 'Corner Radius'
        SetModifier(cmd1, 7, Model[ID].Raio);
        // Setting modifier 'Initial Angle'
    }

	// Setting modifier 'depth'
    SetModifier(cmd1, 6, "<None>");

    // Configurar parâmetros 'Camada'
    SetModifier(cmd1, 3, "Geometria");
    // Configurar parâmetros 'Cor'
    SetModifier(cmd1, 1, "Café|31");
    // Configurar parâmetros 'Estilo'
    SetModifier(cmd1, 2, "Sólido|0");
    // Seleção de Porta, Portnumber
    //AddDigInfoPortNumber(1);
    //AddDigArray(gdh1);
    //AddFinishDig(gdh1 ,_ESCAPE);
    

    var inclinado = 0;
    if (Model[ID].Type == "Ventosa" && Model[ID].Shape == "Retangular") {
        
            // Se for ventosa, cria um retangulo longe da peça e depois retorna com um translate para esperar o clique e capturar as posições.
            gdh = InitDigInfo();
            AddFreeDig(gdh, "X-10000Y-10000");
            AddFinishDig(gdh, _FINISH);
            cmdret = ExecCommand(cmd1, gdh);   // Cria o retangulo
            FreeDigInfo(gdh);

            var retanguloEnd = GetPCINumber("&nextent");
            retanguloEnd--;

            //Display("\\ Retangulo Inicio:" + retangulo + "  fim:" + retanguloEnd);
            // Define a Rotação do Retangulo para exibir a pre-visualização ao usuário apenas para ventosas.
            cmdret = DefineRotation(Model[ID].IdType, retangulo, retanguloEnd, Model[ID].Angulo);
            inclinado = 1;
    }
    else {
        // Se for Batente Apenas pede a posição para o Usuário.
        cmdret = ExecCommand(cmd1, -1);

        var retanguloEnd = GetPCINumber("&nextent") - 1;
    }

   
   // cmdret = -3;   //temporario pra não dar pau.
    
    //  Caso o usuário tenha 'confirmado' com o botão direito a inserção da macro, insere,
    //caso contrário, para o LOOP.
    if(cmdret == -3)
    {
        //Informa à macro que deve continuar inserindo as ventosas.
        mUserCancelouAcao = 0;

        retangulo = Number(retangulo);

        retanguloEnd = Number(retanguloEnd);

        
        //Display("\\ Retangulo Inicio:"+retangulo+"  fim:"+retanguloEnd);
        if (inclinado == 0) {
            // Captura o centro de X
            bRet = Query(retangulo + 8, true);
            if (bRet == 1) {
                mPosX = getpcivariable("&XCENTRE");
            }

            else { mUserCancelouAcao = 2; alert("Nenhum ponto foi selecionado"); return; /*Se o usuário não clicar em nada e apenas confirmar com o botão direito*/ }


            // Captura o centro em Y

            bRet = Query(retangulo + 10, true);
            mPosY = getpcivariable("&YCENTRE");


            //Check Out of Range
            nRet = OutOfRange(Model[ID].IdType);
            if (nRet == 1) {
                mUserCancelouAcao = 2; //continua inserindo as ventosas mas pula o clique fora da peça.

            }
        }

    }
    else
    {
        //Informa à macro que o usuário cancelou a operação.
        mUserCancelouAcao = 1;

        MessageBox(_MB_ICONWARNING, "Operação cancelada");
        mContador = mNumVentosasInserir;
       
    }
    
    // Remove o Retangulo criado como apoio.
    Removegeometry(retangulo, retanguloEnd, inclinado);
 }

function InserePosicaoVentosaCnc()
{
    /// <summary>
    ///     Esse método é responsável inserir a posição da ventosa na árvore de instruções do CAM
    /// como um 'código CNC'.
    /// </summary>

    var Sequence = GetPCIVariable("&SEQUENCENAME");
    if (Sequence == "") {

       
        Create_Sequence();


    } 

        // Initialising command:- Insert Nc Code
        cmd1 = InitCommand(7, 109);
        ClearMods(cmd1);

        // Setting modifier 'Comment'
        SetModifier(cmd1, 15, mPosicaoVentosaCnc);
        gdh1 = InitDigInfo();
        cmdret = ExecCommand(cmd1, gdh1);
        FreeDigInfo(gdh1);
    


}

function GetSolidDimensions() {

    /// <summary>
    ///     Esse método é responsável Capturar as dimensões do Solido
    /// </summary>


    // initialise buffer 
    var gdh = InitDigInfo();
    // select all visible Stocks 
    nRet = AddAllVisDigInfo(gdh, "15");
	if (nRet==0){alert("Bruto não foi criado"); mUserCancelouAcao=1; return;}
    // add a Finish digitise if selection is complete    
    AddFinishDig(gdh, _FINISH);

    //nRet = AskDigInfo("Digitize Topology Element", gdh, _ENTITYDIG, "-255", -1, true);

    var i = 0;
    do {

        if (DigStat = QueryDigInfo(gdh, i++)) {
            var Entno = GetPCINumber("&Entno");
            var EType = GetPCINumber("&EType");
            var KIID = GetPCINumber("&KIID");
            if (Entno > 0) {

                var flags = _DATAFLAG_WORLD_COORDS;
                var dataSet = _EXTRADATA_BOUNDING_BOX;
                var data = GetEntityData(Entno, KIID, flags, dataSet);
                var info = JSON.parse(data);
            }
        }
    }
    while (DigStat);

    //libera cache.
    FreeDigInfo(gdh);

    // Valores capturados do Solido Visivel.
    SolidXmin = info.boundingbox.min.x;
    SolidXmax = info.boundingbox.max.x;
    SolidYmin = info.boundingbox.min.y;
    SolidYmax = info.boundingbox.max.y;
    SolidZmin = info.boundingbox.min.z;
    SolidZmax = info.boundingbox.max.z;

}

function SQL_conect() {

    /// <summary>
    ///     Conexão com SQL server para gerar a lista de dados.
    /// </summary>
    
    var connString = GetRegistryString(_TSTORE_SVR_CFG_REC);  // valor do registro do Windows
    var strQuery = "select 'Ventosa' as 'Tipo' , t1.CUSTOM_DESCRIPTION as 'Nome' , t1.CUSTOM_MODEL_PATH as 'PATH' from TS_FIXTURES_CUSTOM  as t1 WHERE t1.CUSTOM_DESCRIPTION  Like '%Ventosa%'  union select 'Batente' as 'Tipo' , t1.CUSTOM_DESCRIPTION as 'Nome' , t1.CUSTOM_MODEL_PATH as 'PATH' from TS_FIXTURES_CUSTOM  as t1 WHERE t1.CUSTOM_DESCRIPTION  Like '%Batente%' ;"
    //strQuery = "select CHK_DESCRIPTION, CHK_MODEL_PATH from TS_FIXTURES_CHUCKS";
    //alert("Data base conection : " + connString);
    var ObjConn = new ActiveXObject("adodb.Connection");

    ObjConn.Open(connString);
    var rs = new ActiveXObject("adodb.Recordset");
    rs.Open(strQuery, ObjConn);
    rs.MoveFirst();

    var i = 1;
    var j = 0;  // contador de total de ventosas
    var k = 0;  // contador de total de batentes

    while (!rs.eof) {

        /* Model = [];   // novo array de objetos para estruturar melhor os dados do SQL.
            // .Type .Name .Path .Raio
            // [0]  {.Total  .VentTotal .BatTotal}  */

       
        // ...Salva o caminho de cada Item da lista acima.
        Model[i] = {
            Type : rs.fields("Tipo").value,
            Name : rs.fields("Nome").value,
            Path: rs.fields("PATH").value            
        }

        if (Model[i].Type == "Ventosa") { Model[i].IdType = 2; j++;}
        if (Model[i].Type == "Batente") { Model[i].IdType = 1; k++;}
        
		// verificação e captura do valor do raio cadastrado na fixação.
        {
            
            var res = Model[i].Name.search("Ø") + 1;
            if (res != 0) {
                Model[i].Shape = "Cilindrica"; 
                var res1 = Model[i].Name.substr(res);
                var resFim = res1.search(/[^0-9|.]/g);
                     if (resFim != -1) { res = res1.substr(0, resFim); } else { res = res1; }
                //res = Number(res);
                Model[i].Raio = res / 2;

            } else {
              
                Model[i].Shape = "Retangular";
                var res1 = Model[i].Name.split(" ");
                res1 = res1[1].split("x");
                Model[i].Comprimento = res1[0];
                Model[i].Largura = res1[1];
                Model[i].Altura = res1[2];

            }
            
       // if (res == 0) { alert("a Fixação '" + ModelName[FixtureID] + "' selecionada não está com a nomenclatura correta."); }

      
        
        
    }
		
		
       // Display("\\Tipo: " + Modeltype[i] + "\\Nome: " + ModelName[i]+ "\\ Path: " + ModelPath[i] + "\\ Raio: " + ModelRaio[i]);
        rs.MoveNext();
        i++;
    }

    i--;
    //sqlElements = i;   // salva quantidade de elementos em Model[0]
    Model[0] = {
        Total: i, 
        VentTotal: j,
        BatTotal: k};
    
    rs.close();
    ObjConn.close();
}

function AutoInsert(Model, Qnt){

    /// <summary>
    ///     Insere automaticamente as fixações. O cliente precisará definir algums padrões para serem inseridos. Isso é apenas um esboço.
    /// </summary>

    // Model = 0 - Ventosa 
    //         1 - Batente

  
    switch (Model) {

        case 2: {
            // Inserir automaticamente as ventosas.
            tmp = mNumVentosasInserir;
            QntY = getQuadradoPerfeito(tmp);
            QntX = getLastColun(tmp, QntY);
            //Display("\\QUadrado = " + QntX + " x " + QntY);

            getPositionsVentosas(QntX, QntY);

            mContador = 0;
            while (mContador < Qnt) {

                mPosX = XArray[mContador];
                mPosY = YArray[mContador];

                // Insere Fixações
                Insere_Fixture(rListVentosas, mContador);

                mContador++;
            }

        break;
        }

        case 1: {
            // Define as quantidades de batentes em X e Y na proporção "X=Y+1"
            if (Qnt % 2 == 0) { getPositions(Qnt / 2 + 1, Qnt / 2 - 1); } else { getPositions((Qnt - 1) / 2 + 1, (Qnt - 1) / 2); }

            mContador = 0;
            while (mContador < Qnt) {

                mPosX = XArray[mContador];
                mPosY = YArray[mContador];

                // Insere Fixações
                Insere_Fixture(rListBatentes, mContador);

                mContador++;
            }
            break;
        }
    }


}

function getPositions(QntX,QntY) {
    /// <summary>
    ///     Esse método calcula as posições dos batentes para inserção automática na proporção de x=y+1.
    /// </summary>

    mContador = 0;
    
    //mNumBatentesInserir quantidade total de batentes.
    var xINC = (SolidXmax - SolidXmin) / (2*QntX);
    var yINC = (SolidYmax - SolidYmin) / (2 * QntY);

    /* Direção de inserção dos batentes 
    rRadioRefBatentes = 1 Canto Inferior Esquerdo
                        2 Canto Inferior Direito
                        3 Canto Superior Esquerdo
                        4 Canto Superior Direito

    */
    var tmpX, tmpX1;
    var tmpY;
	

    // direção de incremento para encaixe do batente.
    var dX=1 , dY=1 ;

    //alert("Case selecionado " + rRadioRefBatentes);

    switch (rRadioRefBatentes) {
        case 1: { tmpX = SolidXmin; tmpY = SolidYmin; break; }
        case 2: { tmpX = SolidXmax; tmpY = SolidYmin; xINC = xINC * -1; dX = -1; break;}
        case 3: { tmpX = SolidXmin; tmpY = SolidYmax; yINC = yINC * -1; dY = -1; break; }
        case 4: { tmpX = SolidXmax; tmpY = SolidYmax; xINC = xINC * -1; yINC = yINC * -1; dX = -1; dY = -1 ; break; }
    }

    var tmpCont = 0;
    tmpX1 = tmpX; // variavel temporaria de X para não perder o valor inicial.
    while (tmpCont < QntX) {
        tmpX1 = tmpX1 + xINC;
        XArray[mContador] = tmpX1;
        YArray[mContador] = tmpY - ((BatenteDIAM / 2)*dY);

        tmpX1 = tmpX1 + xINC;
        mContador++;
        tmpCont++;
    }

    tmpCont = 0;
    
    while (tmpCont < QntY) {
        tmpY = tmpY + yINC;
        XArray[mContador] = tmpX - ((BatenteDIAM / 2) * dX);
        YArray[mContador] = tmpY;

        tmpY = tmpY + yINC;
        mContador++;
        tmpCont++;
    }
}


function getQuadradoPerfeito(tmp) {

    /// <summary>
    ///     Esse método Calcula o quadrado perfeito mais proximo do numero de ventosas solicitado para inserção automática
    /// </summary>

    
    var j;
    for (i = tmp; i>0 ; i--) {

        j = Math.sqrt(i);
        j = Math.round(j);
        j = j * j;
        //Display("\\I menor = " + i + " J = " + j);
            if (j == i) {
                j = Math.sqrt(i);
            break;
            }
        
    }

   return j;  
}

function getLastColun(tmp, QntY) {

    /// <summary>
    ///     Esse método faz o arredondamento de colunas que as ventosas podem estar distribuidas.
    /// </summary>

    var tmp1 = tmp / QntY;
    var r = Math.round(tmp1);
    tmp1 = tmp - (QntY * r);

    //Display("\\ tmp1 = " + tmp1);

     if (tmp1 > 0) { r++;}



    return r;
}

function getPositionsVentosas(QntX, QntY) {

    /// <summary>
    ///     Esse método cria uma distribuição retangular das posições das ventosas em X Colunas e Y linhas.
    /// </summary>


    //Display("\\QntX:" + QntX + " QntY: " + QntY);
    mContador = 0;

    //mNumBatentesInserir quantidade total de batentes.
    var xINC = (SolidXmax - SolidXmin) / (2 * QntX);
    var yINC = (SolidYmax - SolidYmin) / (2 * QntY);

    var tmpContX = 0;
    var tmpX = SolidXmin;
    while (tmpContX < QntX) {

        tmpX = tmpX + xINC;

            tmpCont = 0;
            tmpMAX = SolidYmin;
            while (tmpCont < QntY) {
                tmpMAX = tmpMAX + yINC;
                XArray[mContador] = tmpX;
                YArray[mContador] = tmpMAX;
                tmpMAX = tmpMAX + yINC;
                mContador++;
                tmpCont++;
            }

        
        
        tmpX = tmpX + xINC;
        //mContador++;
        tmpContX++;
    }



}

function Create_Sequence() {

    // Initialising command:- Machining Sequence
    cmd1 = InitCommandMasked(2, 90, 0, "M");
    ClearMods(cmd1);
    // Setting modifier 'Sequence Name'
    SetModifier(cmd1, 101, "Teste.2");
    // Setting modifier 'Discipline'
    SetModifier(cmd1, 105, "1");
    // Setting modifier 'Apply Speed Capping'
    SetModifier(cmd1, 145, "<Yes>");
    // Setting modifier 'Machine Tool'
    SetModifier(cmd1, 102, "intermac.mcp");
    // Setting modifier 'Mating Location'
    SetModifier(cmd1, 200, "Primary Component Location");
    SetModifier(cmd1, 201, "<None>");
    // Setting modifier 'Initial Datum'
    SetModifier(cmd1, 244, "ComponentDatum");
    // Setting modifier 'Datum Type'
    SetModifier(cmd1, 212, "1");
    // Setting modifier 'Output Tolerance'
    SetModifier(cmd1, 62, "0.001");
    // Setting modifier 'Job Data'
    SetModifier(cmd1, 150, "");
    // Setting modifier 'Job Name^Browse...'
    SetModifier(cmd1, 249, "Teste.2");
    // Setting modifier 'Lathe Setup'
    SetModifier(cmd1, 160, "");
    // Setting modifier 'Inherit Fixture'
    SetModifier(cmd1, 278, "Auto|3");
    // Setting modifier 'Chuck Setup'
    SetModifier(cmd1, 180, "");
    // Setting modifier 'Wire'
    SetModifier(cmd1, 235, "");
    // Setting modifier 'Background Processing'
    SetModifier(cmd1, 181, "");
    // Setting modifier 'Tailstock'
    SetModifier(cmd1, 190, "");
    // Setting modifier 'SteadyRest'
    SetModifier(cmd1, 197, "");
    gdh1 = InitDigInfo();
    cmdret = ExecCommand(cmd1, gdh1);
    FreeDigInfo(gdh1);
    // Initialising command:- Create Setup
    cmd1 = InitCommand(11, 216);
    ClearMods(cmd1);
    // Setting modifier 'Component'
    SetModifier(cmd1, 276, "Auto|3");
    // Setting modifier 'Stock'
    SetModifier(cmd1, 277, "<None>|1");
    // Setting modifier 'Fixture'
    SetModifier(cmd1, 278, "Auto|3");
    // Setting modifier 'Component Grip Diameter'
    SetModifier(cmd1, 215, "0");
    // Setting modifier 'Part Stick Out'
    SetModifier(cmd1, 207, "0");
    gdh1 = InitDigInfo();
    cmdret = ExecCommand(cmd1, gdh1);
    FreeDigInfo(gdh1);
    // Initialising command:- Operation Preferences
    cmd1 = InitCommand(16, 63);
    ClearMods(cmd1);
    // Setting modifier 'Safe Distance'
    SetModifier(cmd1, 220, "1");
    // Setting modifier 'Roughing'
    SetModifier(cmd1, 162, "0.01");
    // Setting modifier 'Finishing'
    SetModifier(cmd1, 163, "0.01");
    // Setting modifier 'Subroutines'
    SetModifier(cmd1, 136, "<Yes>");
    // Setting modifier 'Stay at Depth'
    SetModifier(cmd1, 58, "<Yes>");
    // Setting modifier 'Cut by Region'
    SetModifier(cmd1, 60, "<Yes>");
    // Setting modifier 'Line/Arc Smooth'
    SetModifier(cmd1, 65, "<Yes>");
    // Setting modifier 'Coolant'
    SetModifier(cmd1, 107, "1");
    // Setting modifier 'Spindle Direction'
    SetModifier(cmd1, 108, "2");
    // Setting modifier 'Profile Material on Left'
    SetModifier(cmd1, 156, "<Yes>");
    // Setting modifier 'Appearances'
    SetModifier(cmd1, 90, "");
    // Setting modifier 'Preparation Colour'
    SetModifier(cmd1, 111, "4");
    // Setting modifier 'Preparation Layer'
    SetModifier(cmd1, 114, "Preparation|0");
    // Setting modifier 'Roughing Colour'
    SetModifier(cmd1, 112, "5");
    // Setting modifier 'Roughing Layer'
    SetModifier(cmd1, 115, "Rough|0");
    // Setting modifier 'Finishing Colour'
    SetModifier(cmd1, 113, "6");
    // Setting modifier 'Finishing Layer'
    SetModifier(cmd1, 116, "Finish|0");
    // Setting modifier 'Tooling'
    SetModifier(cmd1, 91, "");
    // Setting modifier 'First Axis'
    SetModifier(cmd1, 100, "3");
    // Setting modifier 'Lead In/Out'
    SetModifier(cmd1, 135, "");
    // Setting modifier 'Angle'
    SetModifier(cmd1, 130, "5");
    // Setting modifier 'Length Factor'
    SetModifier(cmd1, 131, "2");
    // Setting modifier 'Radius Factor'
    SetModifier(cmd1, 132, "2");
    // Setting modifier 'Pitch Factor'
    SetModifier(cmd1, 133, "0.333333");
    // Setting modifier 'Step Angle'
    SetModifier(cmd1, 134, "30");
    gdh1 = InitDigInfo();
    cmdret = ExecCommand(cmd1, gdh1);
    FreeDigInfo(gdh1);

}

function OutOfRange(ID) {
    /// <summary>
    ///     Esse método verifica se as ventosas foram inseridas dentro da area da peça
    /// </summary>

    

    if (ID == 2) {  // Veridica se a ventosa está fora da peça
        if (mPosX < SolidXmin || mPosX > SolidXmax || mPosY < SolidYmin || mPosY > SolidYmax) {
            alert("Seleção Ventosa fora dos limites da peça");
            return 1;
        }
    }
    else { // Verifica se o batente fora de uma das laterais permitiras de acordo com o rRadioRefBatentes indicado pelo cliente.

        var erro = 0;
       
        switch (rRadioRefBatentes) {
            /* Direção de inserção dos batentes 
            rRadioRefBatentes = 1 Canto Inferior Esquerdo
                                2 Canto Inferior Direito
                                3 Canto Superior Esquerdo
                                4 Canto Superior Direito

            */
            case 1: {

                if (mPosX > SolidXmax || mPosY > SolidYmax) { erro = 1; }

                if (mPosX > SolidXmin && mPosY > SolidYmin) { erro = 1; }
               
                if (mPosX < SolidXmin && mPosY < SolidYmin) { erro = 1; }
                
                break;
            }
            case 2: {

                if (mPosX < SolidXmin || mPosY > SolidYmax) { erro = 1; }

                if (mPosX < SolidXmax && mPosY > SolidYmin) { erro = 1; }

                if (mPosX > SolidXmax && mPosY < SolidYmin) { erro = 1;  }

                break;
            }
            case 3: {

                if (mPosX > SolidXmax || mPosY < SolidYmin) { erro = 1; }

                if (mPosX > SolidXmin && mPosY < SolidYmax) { erro = 1; }

                if (mPosX < SolidXmin && mPosY > SolidYmax) { erro = 1;  }

                break;
            }
            case 4: {

                if (mPosX < SolidXmin || mPosY < SolidYmin) { erro = 1; }

                if (mPosX < SolidXmax && mPosY < SolidYmax) { erro = 1; }

                if (mPosX > SolidXmax && mPosY > SolidYmax) { erro = 1;  }

                break;
            }

        }

              
        if (erro==1) {
            alert("Seleção do Batente fora do permitido");
            return 1;
        }
    }
    return 0;
}

function DefineRotation(ID, Ini, Fim, Rot) {

    // Entidades do Retangulo
    gdh1 = InitDigInfo();
    var Loop;
    for (Loop = Ini; Loop <= Fim; Loop = Loop + 2) {
        // Buffer com as entidades
             
        // Add Entity Selection by number, 3DSnap YES Direction Forward (Topology ID)
        AddEntnoDig(gdh1, Loop, _DIR_FORWARD, _DIG_3DSNAP);
      
    }

    // Botão direito.
    gdh2 = InitDigInfo();
    AddFinishDig(gdh2, _FINISH);

    // Coordenada longe da peça.
    gdh3 = InitDigInfo();
    AddFreeDig(gdh3, "X-10000Y-10000");
    
    // Initialising command:- Rotate
    cmd1 = InitCommand(29, 67);
    ClearMods(cmd1);
    // Setting modifier 'Z Rotation'
    SetModifier(cmd1, 23, Rot);
    SetModifier(cmd1, 3, "<None>");
    cmdret = ExecCommandEx(cmd1, [gdh3, gdh1, gdh2]);

    // Initialising command:- Pointo Central do Retangulo
    cmd1 = InitCommand(2, 36);
    ClearMods(cmd1);
    // Setting modifier 'Colour'
    SetModifier(cmd1, 1, "Green|1");
    // Setting modifier 'Layer'
    SetModifier(cmd1, 3, "Stock");
    // Setting modifier 'Style'
    SetModifier(cmd1, 2, "Solid|0");
    cmdret = ExecCommandEx(cmd1, [gdh3,gdh2]);

    PontoCentral = GetPCINumber("&nextent") - 1;
    
    // Initialising command:- Translate para a nova posição.
    cmd1 = InitCommand(29, 66);
    ClearMods(cmd1);
    SetModifier(cmd1, 131, "<None>");
    SetModifier(cmd1, 132, "<None>");
    SetModifier(cmd1, 133, "<None>");
    // Setting modifier 'Dynamic'
    SetModifier(cmd1, 243, "<Yes>");
    SetModifier(cmd1, 3, "<None>");

    AddEntnoDig(gdh1, PontoCentral, _DIR_FORWARD, _DIG_3DSNAP);
    cmdret = ExecCommandEx(cmd1, [gdh1, gdh2, gdh3]);

    if (cmdret == 241) { cmdret = -3; } //operação finalizada com clique na posição.

    // Libera todos os Buffers.
    FreeDigInfo(gdh1);
    FreeDigInfo(gdh2);
    FreeDigInfo(gdh3);

    nret = Query(PontoCentral, true);
    mPosX = GetPCINumber("&XSTART");
    mPosY = GetPCINumber("&YSTART");

   
    return cmdret;
}

function Removegeometry(retangulo, retanguloEnd, Pcentral) {

    /// <summary>
    ///     Esse método remove o retangulo criado como apoio para inserir as ventosas.
    /// </summary>

    //Display("\\Retangulo = " + retangulo + "Retangulo End" + retanguloEnd);
    // Initialising command:- Entities
    cmd1 = InitCommand(10, 69);
    ClearMods(cmd1);
    gdh1 = InitDigInfo();
    var cont;
    for (cont = retangulo; cont <= retanguloEnd; cont = cont+2) {
        // Add Entity Selection by number, 3DSnap YES Direction Reverse (Topology ID)
        AddEntnoDig(gdh1, cont, _DIR_REVERSE, _DIG_3DSNAP);
    }

    if (Pcentral != 0) {
        // Remove o ponto central
        AddEntnoDig(gdh1, PontoCentral, _DIR_REVERSE, _DIG_3DSNAP);
    }

    // Finish input
    AddFinishDig(gdh1, _FINISH);
    ExecCommand(cmd1, gdh1);
    FreeDigInfo(gdh1);

}

function Clear_GUI_Variables() {

    /// <summary>
    ///     Esse método remove as variaveis selecionadas na interface de usuário.
    /// </summary>



    // VEntosas
    Delete("_checkInsertVentosas");
    Delete("ListVentosas");
    Delete("_intSkaNumVentosas");
    Delete("_checkSkaAutoVentosas");
    
    //Batentes
    Delete("_checkInsertBatentes");
    Delete("ListBatentes");
    Delete("_intSkaNumBatentes");
    Delete("_checkSkaAutoBatentes");
    Delete("_radioSkaBatentesPos");
    Delete("_realSkaRotVentosas");
    
   


}


function Define_Masks() {
    var Images_Path;
    var MasksFolder;
    Define_Images_FilePath();

    function Define_Images_FilePath() {

        // caminho da PCI que esta sendo executada. A pastas de imagens da mascara XML deve estar na mesma pasta que a PCI principal.
        Images_Path = GetPCIVariable("$!textPciName");

        // {My_PCI_PATH} no XML deve ser o mesmo caminho da PCI.
        var MYPCIPATH = Images_Path.lastIndexOf("\\");
        Images_Path = Images_Path.substring(0, MYPCIPATH + 1);    // Caminho das imagens da mascara


        // Captura o caminho das masks para gravar o novo XML la.
        var strItem = GetRegistryString(_STRATEGY_FOLDER_CFG_REC);
        tmp = strItem.lastIndexOf("\\strategy\\");
        MasksFolder = strItem.substring(strItem, tmp + 1);

        // Utiliza o arquivo Imagens\\Customer Name_mask_Default.xml para criar uma copia com os caminhos das imagens alterados na pasta Masks do edgecam atual.
        WriteXML();
    }

    function WriteXML() {



        var MyFile = Images_Path + "Imagens\\mask_Default.xml";
        var Mytext = ReadFile(MyFile);

        Mytext = Replace_Text(Mytext, "{My_PCI_PATH}", Images_Path);
		Mytext = Replace_Text(Mytext, "{CUSTOMERNAME}", CustomerName);
		

        var MyNewFile = MasksFolder + "masks\\"+CustomerName+"_mask.xml";
        WriteFile(MyNewFile, Mytext);


        function ReadFile(MyFile) {

            var ForReading = 1, ForWriting = 2, ForAppending = 8;

            var FileOpener = new ActiveXObject("Microsoft.XMLDOM");
            var FilePointer = FileOpener.load(MyFile);
            var OpenText = FileOpener.xml;   // converte o arquivo em uma String e salva nesta variavel OpenText


            return OpenText;
        }

        function WriteFile(MyNewFile, MyText) {
            var FileOpener = new ActiveXObject("Microsoft.XMLDOM");
            FileOpener.loadXML(MyText);
            FileOpener.save(MyNewFile);

        }

        function Replace_Text(MyText, strFind, ReplaceFor) {

            //strFind = / + strFind + /g; não sei como resolver pra substituir todos os textos.

            var tmp = new RegExp(strFind, 'g');
            //tmp = tmp.trim("""");

            var FileContents = MyText.replace(tmp, ReplaceFor); // Substitui todos os textos "RAPID MOVE" por Farias

            return FileContents;
        }


    }
}