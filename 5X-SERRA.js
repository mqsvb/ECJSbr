/// <reference path="c:\program files\hexagon\edgecam 2023.1\cam\PCI\pci-vsdoc.js" />
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
SetModifier(cmd0, 180, "SERRA300");
// Setting modifier 'Position'
SetModifier(cmd0, 48, "1");
// Setting modifier 'Code ID'
SetModifier(cmd0, 17, "ROVER B");
// Setting modifier 'Comment'
SetModifier(cmd0, 15, "SERRA300 **Rover B**");
// Setting modifier 'Diameter'
SetModifier(cmd0, 47, "300");
// Setting modifier 'Tool Type'
SetModifier(cmd0, 140, "Mill|0");
// Setting modifier 'SubType'
SetModifier(cmd0, 188, "T-Slot|6");
// Setting modifier 'Units'
SetModifier(cmd0, 116, "Millimetres|1");
// Setting modifier 'Feed Type'
SetModifier(cmd0, 165, "Per Minute|1");
// Setting modifier 'More...'
SetModifier(cmd0, 153, "");
// Setting modifier 'Flute Length'
SetModifier(cmd0, 179, "3.2");
// Setting modifier 'Number of Teeth'
SetModifier(cmd0, 130, "2");
// Setting modifier 'Reach'
SetModifier(cmd0, 147, "50");
// Setting modifier 'Undercut Distance'
SetModifier(cmd0, 149, "95");
// Setting modifier 'Clearance Type'
SetModifier(cmd0, 195, "None|1");
// Setting modifier 'Colour'
SetModifier(cmd0, 125, "2|2");
// Setting modifier 'Layer'
SetModifier(cmd0, 126, "SERRA300|8");
// Setting modifier 'Loading'
SetModifier(cmd0, 216, "");
// Setting modifier 'Gauge Point'
SetModifier(cmd0, 214, "Primary|1");
// Setting modifier 'Length'
SetModifier(cmd0, 185, "100");
// Setting modifier 'Diameter'
SetModifier(cmd0, 186, "49");
// Setting modifier 'Visible'
SetModifier(cmd0, 287, "<Yes>");
// Setting modifier 'Library'
SetModifier(cmd0, 200, "");
// Setting modifier 'Source'
SetModifier(cmd0, 215, "Cutting Tools|1");
// Setting modifier 'Toolstore'
SetModifier(cmd0, 158, "");
// Setting modifier 'Holder Graphic^Browse...'
SetModifier(cmd0, 171, "Holder-SERRA.meg");
// Setting modifier 'Holder Z Offset'
SetModifier(cmd0, 174, "-7.2");
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
// Setting modifier 'Flags'
SetModifier(cmd0, 261, "0");
// Setting modifier 'Source TS DB'
SetModifier(cmd0, 270, "Provider=SQLNCLI11;Server=LANTEK5\\ECSQLEXPRESS;Database=DB_EC2023;DataTypeCompatibility=80;User ID=toolstore_user;Password=y74rvpy2d24atkpbkd_c2sbcu;");
// Setting modifier 'Mount TS PK'
SetModifier(cmd0, 271, "6280");
// Setting modifier 'Time TS Mount'
SetModifier(cmd0, 273, "2023-01-26 16:35:44");
// Setting modifier 'Time TS Tool'
SetModifier(cmd0, 274, "2023-01-26 16:35:44");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- 5 Eixos
cmd0 = InitCommand(7, 128);
ClearMods(cmd0);
// Setting modifier 'Mode'
SetModifier(cmd0, 108, "ATIVAR|1");
nRet = ExecCommand(cmd0, -1);

do
{

// Initialising command:- Index
cmd0 = InitCommand(23, 43);
ClearMods(cmd0);
// Setting modifier 'Direction'
SetModifier(cmd0, 208, "Shortest|0");
// Setting modifier 'Datum Type'
SetModifier(cmd0, 212, "Absolute|1");
// Setting modifier 'Position To'
SetModifier(cmd0, 190, "");
// Setting modifier 'Name'
SetModifier(cmd0, 244, "L2");
// Setting modifier 'Work Datum Override'
SetModifier(cmd0, 246, "");
// Setting modifier 'Angle'
SetModifier(cmd0, 57, "");
// Setting modifier 'Define Datum Name'
SetModifier(cmd0, 247, "");
// Setting modifier 'Safety Zone'
SetModifier(cmd0, 196, "");
// Setting modifier 'Clearance Type'
SetModifier(cmd0, 195, "Level|2");
// Setting modifier 'Distance'
SetModifier(cmd0, 198, "150");
// Setting modifier 'Output Relative To'
SetModifier(cmd0, 191, "");
// Setting modifier 'Datum'
SetModifier(cmd0, 100, "<Yes>");
// Setting modifier 'Name'
SetModifier(cmd0, 245, "[&TOP]");
nRet = AskMods(cmd0);
if (nRet != _FINISH)
{
	return 0;
}
nRet = ExecCommand(cmd0, -1);

} while(nRet == _ESCAPE);


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
SetModifier(cmd0, 35, "-4");
// Setting modifier 'Tolerance'
SetModifier(cmd0, 62, "0.05");
// Setting modifier 'Feedrate'
SetModifier(cmd0, 5, "4");
// Setting modifier 'Plunge Feed'
SetModifier(cmd0, 6, "4");
// Setting modifier 'Speed'
SetModifier(cmd0, 7, "4000");
// Setting modifier 'Technology'
SetModifier(cmd0, 77, "General|1");
// Setting modifier 'Compensation'
SetModifier(cmd0, 21, "None|1");
// Setting modifier 'Depth'
SetModifier(cmd0, 197, "");
// Setting modifier 'Clearance'
SetModifier(cmd0, 28, "30");
// Setting modifier 'Associative'
SetModifier(cmd0, 55, "<Yes>");
// Setting modifier 'Level'
SetModifier(cmd0, 161, "0");
// Setting modifier 'Associative'
SetModifier(cmd0, 56, "<Yes>");
// Setting modifier 'Depth'
SetModifier(cmd0, 9, "0");
// Setting modifier 'Associative'
SetModifier(cmd0, 54, "<Yes>");
// Setting modifier 'Cut Increment'
SetModifier(cmd0, 10, "50");
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
SetModifier(cmd0, 188, "Maximum Y|3");
// Setting modifier 'Start'
SetModifier(cmd0, 117, "200");
// Setting modifier 'End'
SetModifier(cmd0, 118, "200");
// Setting modifier 'Overlap'
SetModifier(cmd0, 119, "0");
// Setting modifier 'Lead'
SetModifier(cmd0, 135, "");
// Setting modifier 'Type'
SetModifier(cmd0, 189, "None|0");
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
