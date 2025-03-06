/// <reference path="c:\program files\vero software\edgecam 2019 r1\cam\PCI\pci-vsdoc.js" />
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
SetModifier(cmd0, 180, "R16");
// Setting modifier 'Position'
SetModifier(cmd0, 48, "2");
// Setting modifier 'Comment'
SetModifier(cmd0, 15, "16mm ESF **Rover C9/B**");
// Setting modifier 'Diameter'
SetModifier(cmd0, 47, "16");
// Setting modifier 'Tool Type'
SetModifier(cmd0, 140, "Mill|0");
// Setting modifier 'SubType'
SetModifier(cmd0, 188, "Ballnose|2");
// Setting modifier 'Units'
SetModifier(cmd0, 116, "Millimetres|1");
// Setting modifier 'Feed Type'
SetModifier(cmd0, 165, "Per Minute|1");
// Setting modifier 'More...'
SetModifier(cmd0, 153, "");
// Setting modifier 'Flute Length'
SetModifier(cmd0, 179, "10");
// Setting modifier 'Number of Teeth'
SetModifier(cmd0, 130, "4");
// Setting modifier 'Reach'
SetModifier(cmd0, 147, "50");
// Setting modifier 'Clearance Type'
SetModifier(cmd0, 195, "None|1");
// Setting modifier 'Colour'
SetModifier(cmd0, 125, "11|11");
// Setting modifier 'Layer'
SetModifier(cmd0, 126, "R16");
// Setting modifier 'Loading'
SetModifier(cmd0, 216, "");
// Setting modifier 'Z Gauge'
SetModifier(cmd0, 61, "168");
// Setting modifier 'Length'
SetModifier(cmd0, 185, "100");
// Setting modifier 'Diameter'
SetModifier(cmd0, 186, "15.5");
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
SetModifier(cmd0, 174, "90");
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
SetModifier(cmd0, 270, "Provider=SQLNCLI11;Server=ENG-SIDINEI\\ECSQLEXPRESS;Database=Rover2019R1;DataTypeCompatibility=80;User ID=toolstore_user;Password=y74rvpy2d24atkpbkd_c2sbcu;");
// Setting modifier 'Mount TS PK'
SetModifier(cmd0, 271, "5255");
// Setting modifier 'Time TS Mount'
SetModifier(cmd0, 273, "2021-04-01 16:12:12");
// Setting modifier 'Time TS Tool'
SetModifier(cmd0, 274, "2021-04-01 16:12:12");
nRet = ExecCommand(cmd0, -1);

return 0;
}

main();
