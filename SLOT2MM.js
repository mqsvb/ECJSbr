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
SetModifier(cmd0, 180, "DES-160");
// Setting modifier 'Mount Description'
SetModifier(cmd0, 269, "Dmin=1mm Chanfro 45°");
// Setting modifier 'Position'
SetModifier(cmd0, 48, "2");
// Setting modifier 'Code ID'
SetModifier(cmd0, 17, "64309 - PASTILHA RECAMBIAVEL HM 25X15X2 COD 09428004");
// Setting modifier 'Comment'
SetModifier(cmd0, 15, "DES-160");
// Setting modifier 'Diameter'
SetModifier(cmd0, 47, "30");
// Setting modifier 'Tool Type'
SetModifier(cmd0, 140, "Mill|0");
// Setting modifier 'SubType'
SetModifier(cmd0, 188, "Taper|4");
// Setting modifier 'Angle'
SetModifier(cmd0, 24, "90");
// Setting modifier 'Units'
SetModifier(cmd0, 116, "Millimetres|1");
// Setting modifier 'Feed Type'
SetModifier(cmd0, 165, "Per Minute|1");
// Setting modifier 'More...'
SetModifier(cmd0, 153, "");
// Setting modifier 'Flute Length'
SetModifier(cmd0, 179, "15");
// Setting modifier 'Number of Teeth'
SetModifier(cmd0, 130, "2");
// Setting modifier 'Reach'
SetModifier(cmd0, 147, "50");
// Setting modifier 'Roughing'
SetModifier(cmd0, 176, "<Yes>");
// Setting modifier 'Finishing'
SetModifier(cmd0, 177, "<Yes>");
// Setting modifier 'Clearance Type'
SetModifier(cmd0, 195, "None|1");
// Setting modifier 'Colour'
SetModifier(cmd0, 125, "30|30");
// Setting modifier 'Layer'
SetModifier(cmd0, 126, "DES-160");
// Setting modifier 'Upper Diameter'
SetModifier(cmd0, 320, "0.001");
// Setting modifier 'Lower Diameter'
SetModifier(cmd0, 322, "30");
// Setting modifier 'Loading'
SetModifier(cmd0, 216, "");
// Setting modifier 'Z Gauge'
SetModifier(cmd0, 61, "115");
// Setting modifier 'Length'
SetModifier(cmd0, 185, "50");
// Setting modifier 'Diameter'
SetModifier(cmd0, 186, "30");
// Setting modifier 'Visible'
SetModifier(cmd0, 287, "<Yes>");
// Setting modifier 'Library'
SetModifier(cmd0, 200, "");
// Setting modifier 'Source'
SetModifier(cmd0, 215, "Cutting Tools|1");
// Setting modifier 'Toolstore'
SetModifier(cmd0, 158, "");
// Setting modifier 'Holder Graphic^Browse...'
SetModifier(cmd0, 171, "Holder-RoverC9.meg");
// Setting modifier 'Holder Z Offset'
SetModifier(cmd0, 174, "25");
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
// Setting modifier 'Source TS DB'
SetModifier(cmd0, 270, "Provider=SQLNCLI11;Server=LANTEK\\ECSQLEXPRESS;Database=DB_EC2022;DataTypeCompatibility=80;User ID=toolstore_user;Password=y74rvpy2d24atkpbkd_c2sbcu;");
// Setting modifier 'Mount TS PK'
SetModifier(cmd0, 271, "4712");
// Setting modifier 'Time TS Mount'
SetModifier(cmd0, 273, "2023-06-14 11:25:58");
// Setting modifier 'Time TS Tool'
SetModifier(cmd0, 274, "2023-06-14 11:25:58");
nRet = ExecCommand(cmd0, -1);


// Initialising command:- Slot Milling
cmd0 = InitCommand(36, 109);
ClearMods(cmd0);
// Setting modifier 'Strategy'
SetModifier(cmd0, 100, "2D|1");
// Setting modifier 'Feedrate'
SetModifier(cmd0, 5, "5");
// Setting modifier 'Plunge Feed'
SetModifier(cmd0, 6, "5");
// Setting modifier 'Speed'
SetModifier(cmd0, 7, "9500");
// Setting modifier 'Technology'
SetModifier(cmd0, 77, "General|1");
// Setting modifier 'Depth'
SetModifier(cmd0, 162, "");
// Setting modifier 'Clearance'
SetModifier(cmd0, 28, "68");
// Setting modifier 'Level'
SetModifier(cmd0, 161, "9");
// Setting modifier 'Depth'
SetModifier(cmd0, 9, "-2");
// Setting modifier 'Finish At'
SetModifier(cmd0, 107, "Clearance|2");
// Setting modifier 'Lead'
SetModifier(cmd0, 135, "");
// Setting modifier 'Start'
SetModifier(cmd0, 185, "1");
// Setting modifier 'End'
SetModifier(cmd0, 186, "1");
// Setting modifier 'Links'
SetModifier(cmd0, 97, "");
// Setting modifier 'Approach at Clearance'
SetModifier(cmd0, 98, "<Yes>");
// Setting modifier 'Advanced'
SetModifier(cmd0, 235, "");
// Setting modifier 'Tolerance'
SetModifier(cmd0, 62, "0.05");
// Setting modifier 'Mid Point Snapping'
SetModifier(cmd0, 193, "<Yes>");
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
