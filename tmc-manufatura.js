/// <reference path="c:\program files\hexagon\edgecam 2023.1\cam\PCI\pci-vsdoc.js" />

// Initialising command:- Workplane
var cmd1 = InitCommand(16, 61);
ClearMods(cmd1);
// Setting modifier 'Name'
SetModifier(cmd1, 244, "[&TOP]");
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);

// Initialising command:- Rectangle
var cmd1 = InitCommand(2, 1002);
ClearMods(cmd1);
// Setting modifier 'Length'
SetModifier(cmd1, 4, "1000");
// Setting modifier 'Width'
SetModifier(cmd1, 5, "450");
// Setting modifier 'Layer'
SetModifier(cmd1, 3, "LimitesMesa");
// Setting modifier 'Colour'
SetModifier(cmd1, 1, "Corn Yellow|22");
// Setting modifier 'Style'
SetModifier(cmd1, 2, "Solid|0");
var gdh1 = InitDigInfo();
BeginDigArray(gdh1, _FREEDIG);
// Typed Coordinates 3D Snap YES, coordinate string
AddDigInfoCoordStr(_DIG_3DSNAP + _DIG_TANGENT + _DIG_2DCHAIN, "X500 Z0");
// Port Selection, Portnumber
AddDigInfoPortNumber(16);
AddDigArray(gdh1);
// Finish input
AddFinishDig(gdh1, _FINISH);
var cmdret = ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);

function translateDynamic() {

    // Initialising command:- Translate Dynamic * * *  digitando coordenadas origem&Destino * * *
    var cmd1 = InitCommand(29, 66);
    ClearMods(cmd1);
    // Setting modifier 'Dynamic'
    SetModifier(cmd1, 243, "<Yes>");
    var gdh1 = InitDigInfo();
    // Add Entity Selection by number, 3DSnap YES Direction Forward (Topology ID)
    AddEntnoDig(gdh1, FindEntityNo(_FINDENTNO_FROM_START, 161, 1, 0), _DIR_FORWARD, _DIG_3DSNAP);
    // Finish input
    AddFinishDig(gdh1, _FINISH);

    // Add Free dig to Selection input data
    ///AddFreeDig(gdh1, "X-200Y400");
    AskDig("Pick Y Specify ORIGIN", "PICKA");
    yCheckA = GetPCIVariable("Y@PICKA")
    AddFreeDig(gdh1, "Y" + yCheckA);

    // Add Free dig to Selection input data
    ///AddFreeDig(gdh1, "X110.050665Y-597.800554");
    AskDig("Pick Y DESTINATION", "PICKB");
    yCheckB = GetPCIVariable("Y@PICKB")
    AddFreeDig(gdh1, "Y" + yCheckB);
    var cmdret = ExecCommand(cmd1, gdh1);
    FreeDigInfo(gdh1);

}

translateDynamic();

function mainManufaturing() {
    /* if you want to set manually by a dialog 
        function Dialog() {
    
            var pickMode = InitOperation("Set Manufacturing Mode", "", 1);
            var printOption
            var optionPicked
    
            AddUserModToOperation(pickMode, "_radioMode", "^CENTRE^DOWN", "Select Presset Simulation^Stock Table Position", 0, "");
    
            // Display the Dialog
            cmdRet = DoOperationMods(pickMode);
    
            if (cmdRet != -3) { //// se clicou em CANCEL =-2 se clicou em OK =-3
    
                Display("\n* * * * * Operação Cancelada * * * * * \n");
                //Display("valor= " + cmdRet + "\n");
                return 0;
            }
    
            nPickToolMode = GetPCIVariable("_radioMode");
    
            if (nPickToolMode == 1) {
                printOption = "CENTRE|1"
                optionPicked = "CENTRE PICKED"
            }
            else if (nPickToolMode == 2) {
                printOption = "DOWN|2"
                optionPicked = "DOWN PICKED"
            }
    */
    function centreOrDown() {
        // Initialising command:- Machining Sequence
        var cmd1 = InitCommandMasked(2, 90, 0, "Mill");
        ClearMods(cmd1);
        // Setting modifier 'InvariantDiscipline'
        SetModifier(cmd1, 358, "1");
        // Setting modifier 'Sequence Name'
        SetModifier(cmd1, 101, "TMC 01");
        // Setting modifier 'Discipline'
        SetModifier(cmd1, 105, "1");
        // Setting modifier 'Apply Speed Capping'
        SetModifier(cmd1, 145, "<Yes>");
        // Setting modifier 'Machine Tool'
        SetModifier(cmd1, 102, "intorex_tmc3000-st.mcp");
        // Setting modifier 'Mating Offset'
        SetModifier(cmd1, 202, "<Yes>");
        // Setting modifier 'Initial Datum'
        SetModifier(cmd1, 244, "[&TOP]");
        // Setting modifier 'Machine Datum'
        SetModifier(cmd1, 245, "0");
        // Setting modifier 'Datum Type'
        SetModifier(cmd1, 212, "1");
        // Setting modifier 'Output Tolerance'
        SetModifier(cmd1, 62, "0.001");
        // Setting modifier 'Inherit Fixture'
        SetModifier(cmd1, 278, "<None>|1");
        // Setting modifier 'Upper Guide'
        SetModifier(cmd1, 242, "100");
        // Setting modifier 'Lower Guide'
        SetModifier(cmd1, 243, "-10");
        // Setting modifier 'Use Background Processing'
        SetModifier(cmd1, 259, "0");
        // Setting modifier 'Pick Safe Start Interactively'
        SetModifier(cmd1, 182, "0");
        var gdh1 = InitDigInfo();
        // Add Free dig to Selection input data
        AddFreeDig(gdh1, "Z0Y0X0");
        var cmdret = ExecCommand(cmd1, gdh1);
        FreeDigInfo(gdh1);
        // Initialising command:- Preset Position
        var cmd1 = InitCommand(7, 125);
        ClearMods(cmd1);
        // Setting modifier 'Mode' ********************** Seleciona M-function CENTRE/DOWN
        if (yCheckB == 0) {
            printOption = "CENTRE|1"
            optionPicked = "CENTRE PICKED"

        } else if (yCheckB != 0) {
            printOption = "DOWN|2"
            optionPicked = "DOWN PICKED"
        }
        SetModifier(cmd1, 108, printOption); // * * * * * * * * * * * * * *
        var gdh1 = InitDigInfo();
        var cmdret = ExecCommand(cmd1, gdh1);
        FreeDigInfo(gdh1);


        // Initialising command:- Machine Parameters
        var cmd1 = InitCommand(16, 62);
        ClearMods(cmd1);
        // Setting modifier 'Sequence Name' * * * * * * * * * * * * * * * * *
        SetModifier(cmd1, 117, "TMC - " + printOption);
        // Setting modifier 'Machine Tool'
        SetModifier(cmd1, 129, "intorex_tmc3000-st.mcp");
        // Setting modifier 'Mating Datum'
        SetModifier(cmd1, 201, "[&TOP]");
        // Setting modifier 'X Mating Offset'
        SetModifier(cmd1, 203, "0");
        // Setting modifier 'Y Mating Offset'
        SetModifier(cmd1, 204, "0");
        // Setting modifier 'Z Mating Offset'
        SetModifier(cmd1, 205, "0");
        // Setting modifier 'Initial Plane'
        SetModifier(cmd1, 115, "300");
        // Setting modifier 'Output Tolerance'
        SetModifier(cmd1, 62, "0.001");
        // Setting modifier 'Units'
        SetModifier(cmd1, 116, "Millimetres|1");
        // Setting modifier 'Max High Feed'
        SetModifier(cmd1, 118, "30000");
        // Setting modifier 'Show Feature Accessibility'
        SetModifier(cmd1, 234, "<Yes>");
        // Setting modifier 'X Change'
        SetModifier(cmd1, 112, "0");
        // Setting modifier 'Y Change'
        SetModifier(cmd1, 113, "0");
        // Setting modifier 'Z Change'
        SetModifier(cmd1, 114, "511");
        var gdh1 = InitDigInfo();
        var cmdret = ExecCommand(cmd1, gdh1);
        FreeDigInfo(gdh1);
    }

    centreOrDown()

    Display("Mode " + optionPicked + "\n");
    //Display("escolheu\\" + "--->" + cmdRet);

    //return nPickToolMode;

}

/*
Dialog();

}
*/

mainManufaturing();
