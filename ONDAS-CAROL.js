/// <reference path="c:\program files\hexagon\edgecam 2022.0\cam\PCI\pci-vsdoc.js" />
// *** PCI Template ***
function main()
{
SetPackage(1);
if (GetPCINumber("&3AXMILL") == 0)
{
	nRet = MessageBox(_MB_ICONERROR, "Invalid environment");
	return 0;
}

do
{

// Initialising command:- Profiling
cmd0 = InitCommand(22, 110);
ClearMods(cmd0);
// Setting modifier 'Disallow CRC Geometry with Taper'
SetModifier(cmd0, 365, "1");
// Setting modifier 'Model Type'
SetModifier(cmd0, 93, "Wireframe|1");
// Setting modifier 'Mill Type'
SetModifier(cmd0, 137, "Climb|0");
// Setting modifier 'XY Offset'
SetModifier(cmd0, 35, "-3.8");
// Setting modifier 'Tolerance'
SetModifier(cmd0, 62, "0.05");
// Setting modifier 'Feedrate'
SetModifier(cmd0, 5, "8");
// Setting modifier 'Plunge Feed'
SetModifier(cmd0, 6, "8");
// Setting modifier 'Speed'
SetModifier(cmd0, 7, "14000");
// Setting modifier 'Compensation'
SetModifier(cmd0, 21, "None|1");
// Setting modifier 'Depth'
SetModifier(cmd0, 197, "");
//*********************************************** VARIABLES
// Setting modifier 'Clearance'
SetModifier(cmd0, 28, "<PICK>");

// Setting modifier 'Retract'
SetModifier(cmd0, 29, "2");
// Setting modifier 'Level'
SetModifier(cmd0, 161, "<PICK>");

// Setting modifier 'Depth'
SetModifier(cmd0, 9, "-1");
// Setting modifier 'Cut Increment'
SetModifier(cmd0, 10, "200");
// Setting modifier 'Finish At'
SetModifier(cmd0, 107, "Depth|0");
// Setting modifier 'Control'
SetModifier(cmd0, 131, "");
// Setting modifier 'NC Output Smoothing'
SetModifier(cmd0, 101, "Line Arc|1");
// Setting modifier 'Cut by Region'
SetModifier(cmd0, 60, "<Yes>");
// Setting modifier 'Optimise Path'
SetModifier(cmd0, 114, "Closest Next|2");
// Setting modifier 'Strategy'
SetModifier(cmd0, 208, "Round|1");
// Setting modifier 'Tool Control'
SetModifier(cmd0, 254, "Centre|0");
// Setting modifier 'Start/End'
SetModifier(cmd0, 209, "");
// Setting modifier 'Plunge Point'
SetModifier(cmd0, 210, "Automatic|0");
// Setting modifier 'Retract Point'
SetModifier(cmd0, 212, "Automatic|0");
// Setting modifier 'Default Side'
SetModifier(cmd0, 140, "Outside|2");
// Setting modifier 'Type'
SetModifier(cmd0, 187, "Sharp Corner|3");
// Setting modifier 'Start'
SetModifier(cmd0, 117, "50");
// Setting modifier 'End'
SetModifier(cmd0, 118, "0");
// Setting modifier 'Overlap'
SetModifier(cmd0, 119, "0");
// Setting modifier 'Lead'
SetModifier(cmd0, 135, "");
// Setting modifier 'Type'
SetModifier(cmd0, 189, "Horizontal|1");
// Setting modifier 'Percentage Feed'
SetModifier(cmd0, 134, "100");
// Setting modifier 'Equal Lead Moves'
SetModifier(cmd0, 11, "<Yes>");
// Setting modifier 'Angle'
SetModifier(cmd0, 24, "90");
// Setting modifier 'Lead Radius'
SetModifier(cmd0, 25, "50");
// Setting modifier 'Perpendicular'
SetModifier(cmd0, 213, "0");
// Setting modifier 'Links'
SetModifier(cmd0, 162, "");
// Setting modifier 'Short Link Distance'
SetModifier(cmd0, 128, "5");
// Setting modifier 'Short Link Type'
SetModifier(cmd0, 102, "Straight|0");
// Setting modifier 'Percentage Feed'
SetModifier(cmd0, 129, "100");
// Setting modifier 'Long Link Type'
SetModifier(cmd0, 103, "Clearance|1");
// Setting modifier 'Safe Distance'
SetModifier(cmd0, 220, "5");
// Setting modifier 'Rest Profiling'
SetModifier(cmd0, 170, "");
// Setting modifier 'Previous Tool Diameter'
SetModifier(cmd0, 230, "0.0");
nRet = AskMods(cmd0);
if (nRet != _FINISH)
{
	return 0;
}
nRet = ExecCommand(cmd0, -1);

} while(nRet == _ESCAPE);

return 0;
}

main();
