/// <reference path="c:\program files\hexagon\edgecam 2022.1\cam\PCI\pci-vsdoc.js" />
// *** PCI Template ***
function main()
{
SetPackage(1);
if (GetPCINumber("&3AXMILL") == 0)
{
	nRet = MessageBox(_MB_ICONERROR, "Invalid environment");
	return 0;
}

// Initialising command:- Milling Cutter
cmd0 = InitCommand(36, 108);
ClearMods(cmd0);
// Setting modifier 'ToolStore^Find...'
SetModifier(cmd0, 180, "BOL9.5");
// Setting modifier 'Mount Description'
SetModifier(cmd0, 269, "Boleado Concavo 9.5mm");
// Setting modifier 'Position'
SetModifier(cmd0, 48, "2");
// Setting modifier 'Comment'
SetModifier(cmd0, 15, "R9.5");
// Setting modifier 'Diameter'
SetModifier(cmd0, 47, "12.5");
// Setting modifier 'Tool Type'
SetModifier(cmd0, 140, "Mill|0");
// Setting modifier 'SubType'
SetModifier(cmd0, 188, "Formed Mill|9");
// Setting modifier 'Units'
SetModifier(cmd0, 116, "Millimetres|1");
// Setting modifier 'Feed Type'
SetModifier(cmd0, 165, "Per Minute|1");
// Setting modifier 'More...'
SetModifier(cmd0, 153, "");
// Setting modifier 'Flute Length'
SetModifier(cmd0, 179, "125");
// Setting modifier 'Number of Teeth'
SetModifier(cmd0, 130, "3");
// Setting modifier 'Reach'
SetModifier(cmd0, 147, "50");
// Setting modifier 'Clearance Type'
SetModifier(cmd0, 195, "None|1");
// Setting modifier 'Colour'
SetModifier(cmd0, 125, "3|3");
// Setting modifier 'Layer'
SetModifier(cmd0, 126, "BOL9.5");
// Setting modifier 'Lower Diameter'
SetModifier(cmd0, 322, "12.5");
// Setting modifier 'Loading'
SetModifier(cmd0, 216, "");
// Setting modifier 'Z Gauge'
SetModifier(cmd0, 61, "0");
// Setting modifier 'Diameter'
SetModifier(cmd0, 186, "12.5");
// Setting modifier 'Visible'
SetModifier(cmd0, 287, "<Yes>");
// Setting modifier 'Library'
SetModifier(cmd0, 200, "");
// Setting modifier 'Source'
SetModifier(cmd0, 215, "Cutting Tools|1");
// Setting modifier 'Toolstore'
SetModifier(cmd0, 158, "");
// Setting modifier 'Tool Graphic^Browse...'
SetModifier(cmd0, 170, "R9.5.meg");
// Setting modifier 'Holder Graphic^Browse...'
SetModifier(cmd0, 171, "Holder-RoverC9.meg");
// Setting modifier 'Holder Z Offset'
SetModifier(cmd0, 174, "30");
// Setting modifier 'Holder Origin'
SetModifier(cmd0, 281, "Tool Tip|1");
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
SetModifier(cmd0, 270, "Provider=SQLNCLI11;Server=LANTEK\\ECSQLEXPRESS;Database=DB_EC2022;DataTypeCompatibility=80;User ID=toolstore_user;Password=y74rvpy2d24atkpbkd_c2sbcu;");
// Setting modifier 'Mount TS PK'
SetModifier(cmd0, 271, "6266");
// Setting modifier 'Time TS Mount'
SetModifier(cmd0, 273, "2021-04-01 16:26:03");
// Setting modifier 'Time TS Tool'
SetModifier(cmd0, 274, "2021-04-01 16:26:03");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- Profiling
cmd0 = InitCommand(22, 110);
ClearMods(cmd0);
// Setting modifier 'Disallow CRC Geometry with Taper'
SetModifier(cmd0, 365, "1");
// Setting modifier 'Model Type'
SetModifier(cmd0, 93, "Solid|3");
// Setting modifier 'Mill Type'
SetModifier(cmd0, 137, "Climb|0");
// Setting modifier 'Prismatic Geometry'
SetModifier(cmd0, 92, "<Yes>");
// Setting modifier 'XY Offset'
SetModifier(cmd0, 35, "0.01");
// Setting modifier 'Tolerance'
SetModifier(cmd0, 62, "0.05");
// Setting modifier 'Start Offset'
SetModifier(cmd0, 176, "0");
// Setting modifier 'Offset Increment'
SetModifier(cmd0, 178, "0");
// Setting modifier 'Feedrate'
SetModifier(cmd0, 5, "5");
// Setting modifier 'Plunge Feed'
SetModifier(cmd0, 6, "5");
// Setting modifier 'Speed'
SetModifier(cmd0, 7, "9500");
// Setting modifier 'Technology'
SetModifier(cmd0, 77, "General|1");
// Setting modifier 'Compensation'
SetModifier(cmd0, 21, "None|1");
// Setting modifier 'Depth'
SetModifier(cmd0, 197, "");
// Setting modifier 'Clearance'
SetModifier(cmd0, 28, "50");
// Setting modifier 'Associative'
SetModifier(cmd0, 55, "<Yes>");
// Setting modifier 'Retract'
SetModifier(cmd0, 29, "2");
// Setting modifier 'Level'
SetModifier(cmd0, 161, "0");
// Setting modifier 'Associative'
SetModifier(cmd0, 56, "<Yes>");
// Setting modifier 'Depth'
SetModifier(cmd0, 9, "-1.4");
// Setting modifier 'Associative'
SetModifier(cmd0, 54, "<Yes>");
// Setting modifier 'Cut Increment'
SetModifier(cmd0, 10, "12");
// Setting modifier 'Finish At'
SetModifier(cmd0, 107, "Clearance|2");
// Setting modifier 'Detect Flat Land'
SetModifier(cmd0, 33, "<Yes>");
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
// Setting modifier 'Type'
SetModifier(cmd0, 187, "Min/Max|1");
// Setting modifier 'Min/Max'
SetModifier(cmd0, 188, "Minimum X|0");
// Setting modifier 'Start'
SetModifier(cmd0, 117, "10");
// Setting modifier 'End'
SetModifier(cmd0, 118, "10");
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
// Setting modifier 'Length'
SetModifier(cmd0, 136, "15");
// Setting modifier 'Perpendicular'
SetModifier(cmd0, 213, "0");
// Setting modifier 'Links'
SetModifier(cmd0, 162, "");
// Setting modifier 'Short Link Distance'
SetModifier(cmd0, 128, "5");
// Setting modifier 'Approach at Clearance'
SetModifier(cmd0, 98, "<Yes>");
// Setting modifier 'Short Link Type'
SetModifier(cmd0, 102, "Straight|0");
// Setting modifier 'Percentage Feed'
SetModifier(cmd0, 129, "100");
// Setting modifier 'Long Link Type'
SetModifier(cmd0, 103, "Clearance|1");
// Setting modifier 'Safe Distance'
SetModifier(cmd0, 220, "5");
// Setting modifier 'Feed When Plunging'
SetModifier(cmd0, 13, "<Yes>");
// Setting modifier 'Rest Profiling'
SetModifier(cmd0, 170, "");
// Setting modifier 'Previous Tool Diameter'
SetModifier(cmd0, 230, "0.0");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- Move to Toolchange
cmd0 = InitCommand(101, 41);
ClearMods(cmd0);
// Setting modifier 'Move relative to'
SetModifier(cmd0, 106, "Machine|1");
// Setting modifier 'First'
SetModifier(cmd0, 100, "Z|3");
nRet = ExecCommand(cmd0, -1);

return 0;
}

main();
