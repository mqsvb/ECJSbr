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
SetModifier(cmd0, 180, "DES-260");
// Setting modifier 'Mount Description'
SetModifier(cmd0, 269, "06mm LISA");
// Setting modifier 'Position'
SetModifier(cmd0, 48, "7");
// Setting modifier 'Code ID'
SetModifier(cmd0, 17, "41157 - FRESA TOPO 6MM 6X27X70-D 3 CORTES LISA HELI HM INTEGRAL");
// Setting modifier 'Comment'
SetModifier(cmd0, 15, "DES-260");
// Setting modifier 'Diameter'
SetModifier(cmd0, 47, "6");
// Setting modifier 'Tool Type'
SetModifier(cmd0, 140, "Mill|0");
// Setting modifier 'SubType'
SetModifier(cmd0, 188, "Endmill|0");
// Setting modifier 'Units'
SetModifier(cmd0, 116, "Millimetres|1");
// Setting modifier 'Feed Type'
SetModifier(cmd0, 165, "Per Minute|1");
// Setting modifier 'More...'
SetModifier(cmd0, 153, "");
// Setting modifier 'Flute Length'
SetModifier(cmd0, 179, "44");
// Setting modifier 'Number of Teeth'
SetModifier(cmd0, 130, "1");
// Setting modifier 'Roughing'
SetModifier(cmd0, 176, "<Yes>");
// Setting modifier 'Finishing'
SetModifier(cmd0, 177, "<Yes>");
// Setting modifier 'Clearance Type'
SetModifier(cmd0, 195, "None|1");
// Setting modifier 'Layer'
SetModifier(cmd0, 126, "DES-260|3");
// Setting modifier 'Loading'
SetModifier(cmd0, 216, "");
// Setting modifier 'Z Gauge'
SetModifier(cmd0, 61, "150");
// Setting modifier 'Length'
SetModifier(cmd0, 185, "10");
// Setting modifier 'Diameter'
SetModifier(cmd0, 186, "6");
// Setting modifier 'Visible'
SetModifier(cmd0, 287, "<Yes>");
// Setting modifier 'Library'
SetModifier(cmd0, 200, "");
// Setting modifier 'Source'
SetModifier(cmd0, 215, "Cutting Tools|1");
// Setting modifier 'Toolstore'
SetModifier(cmd0, 158, "");
// Setting modifier 'Tool Graphic^Browse...'
SetModifier(cmd0, 170, "");
// Setting modifier 'Holder Graphic^Browse...'
SetModifier(cmd0, 171, "Holder-RoverC9.meg");
// Setting modifier 'Holder Z Offset'
SetModifier(cmd0, 174, "5");
// Setting modifier 'Holder Origin'
SetModifier(cmd0, 281, "Flute Height|0");
// Setting modifier 'User Numeric 1'
SetModifier(cmd0, 166, "");
// Setting modifier 'User Numeric 2'
SetModifier(cmd0, 167, "");
// Setting modifier 'User String 1'
SetModifier(cmd0, 169, "EM");
// Setting modifier 'User String 2'
SetModifier(cmd0, 175, "");
// Setting modifier 'Spindle'
SetModifier(cmd0, 252, "");
// Setting modifier 'Direction'
SetModifier(cmd0, 161, "Forward|2");
// Setting modifier 'Gear'
SetModifier(cmd0, 162, "Auto|0");
// Setting modifier 'Max RPM'
SetModifier(cmd0, 163, "12000");
// Setting modifier 'Coolant'
SetModifier(cmd0, 243, "Off|0");
// Setting modifier 'Through Coolant'
SetModifier(cmd0, 146, "Off|0");
// Setting modifier 'Angled Head'
SetModifier(cmd0, 142, "");
// Setting modifier 'Flags'
SetModifier(cmd0, 261, "0");
// Setting modifier 'Source TS DB'
SetModifier(cmd0, 270, "Provider=SQLNCLI11;Password=y74rvpy2d24atkpbkd_c2sbcu;User ID=toolstore_user;DataTypeCompatibility=80;server=LANTEK5\\ECSQLEXPRESS;database=DB_EC2023");
// Setting modifier 'Mount TS PK'
SetModifier(cmd0, 271, "5169");
// Setting modifier 'Time TS Mount'
SetModifier(cmd0, 273, "2023-05-03 08:13:40");
// Setting modifier 'Time TS Tool'
SetModifier(cmd0, 274, "2023-05-03 08:13:40");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- Roughing
cmd0 = InitCommand(48, 114);
ClearMods(cmd0);
// Setting modifier 'Model Type'
SetModifier(cmd0, 93, "Solid|3");
// Setting modifier 'Rest Rough'
SetModifier(cmd0, 57, "<Yes>");
// Setting modifier 'Strategy'
SetModifier(cmd0, 100, "Spiral|3");
// Setting modifier 'Mill Type'
SetModifier(cmd0, 137, "Optimised|2");
// Setting modifier '% Stepover'
SetModifier(cmd0, 16, "60");
// Setting modifier 'Clean Up % Stepover'
SetModifier(cmd0, 66, "50");
// Setting modifier 'Feedrate'
SetModifier(cmd0, 5, "4500");
// Setting modifier 'Plunge Feedrate'
SetModifier(cmd0, 6, "2500");
// Setting modifier 'Speed'
SetModifier(cmd0, 7, "8500");
// Setting modifier 'Technology'
SetModifier(cmd0, 77, "None|0");
// Setting modifier 'Depth'
SetModifier(cmd0, 162, "");
// Setting modifier 'Clearance'
SetModifier(cmd0, 28, "12");
// Setting modifier 'Associative'
SetModifier(cmd0, 55, "<Yes>");
// Setting modifier 'Level'
SetModifier(cmd0, 161, "-1");
// Setting modifier 'Associative'
SetModifier(cmd0, 56, "<Yes>");
// Setting modifier 'Depth'
SetModifier(cmd0, 9, "0");
// Setting modifier 'Associative'
SetModifier(cmd0, 54, "<Yes>");
// Setting modifier 'Cut Increment'
SetModifier(cmd0, 10, "2");
// Setting modifier 'Technology'
SetModifier(cmd0, 74, "None|0");
// Setting modifier 'Finish At'
SetModifier(cmd0, 107, "Clearance|2");
// Setting modifier 'Detect Flat Land'
SetModifier(cmd0, 33, "<Yes>");
// Setting modifier 'Control'
SetModifier(cmd0, 44, "");
// Setting modifier 'NC Output Smoothing'
SetModifier(cmd0, 101, "None|0");
// Setting modifier 'High Speed Cornering'
SetModifier(cmd0, 59, "<Yes>");
// Setting modifier 'Cut by Region'
SetModifier(cmd0, 60, "<Yes>");
// Setting modifier 'Optimise Path'
SetModifier(cmd0, 114, "Closest Next|2");
// Setting modifier 'Tool Control'
SetModifier(cmd0, 254, "Centre|0");
// Setting modifier 'Contouring'
SetModifier(cmd0, 180, "");
// Setting modifier 'Approach'
SetModifier(cmd0, 135, "");
// Setting modifier 'Approach Type'
SetModifier(cmd0, 50, "Ramp|3");
// Setting modifier 'Maximum Plunge Depth'
SetModifier(cmd0, 52, "1");
// Setting modifier 'Ramp Angle'
SetModifier(cmd0, 26, "10");
// Setting modifier 'Avoid Rollover'
SetModifier(cmd0, 229, "<Yes>");
// Setting modifier 'Approach at Clearance'
SetModifier(cmd0, 98, "<Yes>");
// Setting modifier 'Percentage Feed'
SetModifier(cmd0, 134, "100");
// Setting modifier 'Percentage Speed'
SetModifier(cmd0, 136, "100");
// Setting modifier 'Percentage Plunge Feed'
SetModifier(cmd0, 138, "100");
// Setting modifier 'Link Method'
SetModifier(cmd0, 58, "Always Ramp|0");
// Setting modifier 'Type'
SetModifier(cmd0, 103, "Clearance|1");
// Setting modifier 'Safe Distance'
SetModifier(cmd0, 220, "5");
// Setting modifier 'Feed When Plunging'
SetModifier(cmd0, 13, "<Yes>");
// Setting modifier 'XY StandOff'
SetModifier(cmd0, 78, "1");
// Setting modifier 'Adaptive'
SetModifier(cmd0, 222, "<Yes>");
// Setting modifier 'Minimum(%)'
SetModifier(cmd0, 236, "20");
// Setting modifier 'Maximum(%)'
SetModifier(cmd0, 226, "150");
// Setting modifier 'Increment(%)'
SetModifier(cmd0, 227, "30");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- Move to Toolchange
cmd0 = InitCommand(101, 41);
ClearMods(cmd0);
// Setting modifier 'First'
SetModifier(cmd0, 100, "Z|3");
// Setting modifier 'Stop Type'
SetModifier(cmd0, 402, "None|1");
nRet = ExecCommand(cmd0, -1);

return 0;
}

main();
