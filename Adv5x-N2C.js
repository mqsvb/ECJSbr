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

// Initialising command:- Milling Cutter
cmd0 = InitCommand(36, 108);
ClearMods(cmd0);
// Setting modifier 'ToolStore^Find...'
SetModifier(cmd0, 180, "99");
// Setting modifier 'Mount Description'
SetModifier(cmd0, 269, "20mm LISA");
// Setting modifier 'Position'
SetModifier(cmd0, 48, "1");
// Setting modifier 'Group Code'
SetModifier(cmd0, 16, "22");
// Setting modifier 'Code ID'
SetModifier(cmd0, 17, "99.1");
// Setting modifier 'Comment'
SetModifier(cmd0, 15, "99");
// Setting modifier 'Diameter'
SetModifier(cmd0, 47, "20");
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
SetModifier(cmd0, 179, "47");
// Setting modifier 'Number of Teeth'
SetModifier(cmd0, 130, "1");
// Setting modifier 'Reach'
SetModifier(cmd0, 147, "50");
// Setting modifier 'Roughing'
SetModifier(cmd0, 176, "<Yes>");
// Setting modifier 'Finishing'
SetModifier(cmd0, 177, "<Yes>");
// Setting modifier 'Clearance Type'
SetModifier(cmd0, 195, "None|1");
// Setting modifier 'Layer'
SetModifier(cmd0, 126, "99");
// Setting modifier 'Lower Diameter'
SetModifier(cmd0, 322, "20");
// Setting modifier 'Loading'
SetModifier(cmd0, 216, "");
// Setting modifier 'Z Gauge'
SetModifier(cmd0, 61, "150");
// Setting modifier 'Length'
SetModifier(cmd0, 185, "74");
// Setting modifier 'Diameter'
SetModifier(cmd0, 186, "20");
// Setting modifier 'Visible'
SetModifier(cmd0, 287, "<Yes>");
// Setting modifier 'Source'
SetModifier(cmd0, 215, "Cutting Tools|1");
// Setting modifier 'Toolstore'
SetModifier(cmd0, 158, "");
// Setting modifier 'Tool Graphic^Browse...'
SetModifier(cmd0, 170, "99.csv");
// Setting modifier 'Holder Graphic^Browse...'
SetModifier(cmd0, 171, "Holder-RoverC9.meg");
// Setting modifier 'Holder Z Offset'
SetModifier(cmd0, 174, "25");
// Setting modifier 'Holder Origin'
SetModifier(cmd0, 281, "Flute Height|0");
// Setting modifier 'User Numeric 1'
SetModifier(cmd0, 166, "1");
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
// Setting modifier 'Coolant'
SetModifier(cmd0, 243, "Off|0");
// Setting modifier 'Through Coolant'
SetModifier(cmd0, 146, "Off|0");
// Setting modifier 'Angled Head'
SetModifier(cmd0, 142, "");
// Setting modifier 'Source TS DB'
SetModifier(cmd0, 270, "Provider=SQLNCLI11;Server=LANTEK\\ECSQLEXPRESS;Database=DB_EC2022;DataTypeCompatibility=80;User ID=toolstore_user;Password=y74rvpy2d24atkpbkd_c2sbcu;");
// Setting modifier 'Mount TS PK'
SetModifier(cmd0, 271, "452");
// Setting modifier 'Time TS Mount'
SetModifier(cmd0, 273, "2022-03-24 08:34:04");
// Setting modifier 'Time TS Tool'
SetModifier(cmd0, 274, "2022-03-24 08:34:04");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- Advanced Five Axis
cmd0 = InitCommand(22, 149);
ClearMods(cmd0);
// Setting modifier 'Comment'
SetModifier(cmd0, 295, "");
// Setting modifier 'Speed'
SetModifier(cmd0, 7, "14000");
// Setting modifier 'Preferred Rotary Solution'
SetModifier(cmd0, 27, "Automatic|1");
// Setting modifier 'Angle Change Limit'
SetModifier(cmd0, 246, "150");
// Setting modifier 'Retract Distance'
SetModifier(cmd0, 254, "100");
// Setting modifier 'Return Distance'
SetModifier(cmd0, 243, "");
// Setting modifier 'Pole Angle Tolerance'
SetModifier(cmd0, 112, "0.01");
// Setting modifier 'Interpolate'
SetModifier(cmd0, 255, "<Yes>");
// Setting modifier 'Interpolation Distance'
SetModifier(cmd0, 111, "1");
// Setting modifier 'Interpolation Angle Step'
SetModifier(cmd0, 110, "3");
// Setting modifier 'Strategy'
SetModifier(cmd0, 32, "0");
// Setting modifier 'Level'
SetModifier(cmd0, 161, "0");
// Setting modifier 'Interpolation Type'
SetModifier(cmd0, 280, "By vector|1");
// Setting modifier 'Feed InterpolateAngle'
SetModifier(cmd0, 273, "<Yes>");
// Setting modifier 'Rapid Interpolation Distance'
SetModifier(cmd0, 272, "1");
// Setting modifier 'Rapid Interpolation Angle Step'
SetModifier(cmd0, 270, "3");
// Setting modifier 'Pole Handling'
SetModifier(cmd0, 276, "Freeze angle around pole|1");
// Setting modifier 'Ignore Linear Limits'
SetModifier(cmd0, 78, "<Yes>");
// Setting modifier 'Ignore Angular Limits'
SetModifier(cmd0, 82, "<Yes>");
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
