/// <reference path="c:\program files\vero software\edgecam 2018 r1\cam\PCI\pci-vsdoc.js" />
SetPackage(1);
// Initialising command:- Machining Sequence
cmd1 = InitCommandMasked(2, 90, 0, "M");
ClearMods(cmd1);
// Setting modifier 'Discipline'
SetModifier(cmd1, 101, "TOP"); 
SetModifier(cmd1, 105, "Mill|0");
// Setting modifier 'Apply Speed Capping'
SetModifier(cmd1, 145, "<Yes>");
// Setting modifier 'Machine Tool'
SetModifier(cmd1, 102, "rover_321r.mcp");
SetModifier(cmd1, 200, "<None>");
SetModifier(cmd1, 201, "<None>");
// Setting modifier 'Initial Datum'
SetModifier(cmd1, 244, "[&TOP]");
// Setting modifier 'Datum Type'
SetModifier(cmd1, 212, "Absolute|1");
// Setting modifier 'Output Tolerance'
SetModifier(cmd1, 62, "0.001");
// Setting modifier 'Inherit Fixture'
SetModifier(cmd1, 278, "1");
// Setting modifier 'Wire'
SetModifier(cmd1, 235, "");
gdh1 = InitDigInfo();
cmdret=ExecCommand(cmd1, gdh1);
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
cmdret=ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);
// Initialising command:- Update Fixtures
cmd1 = InitCommand(11, 213);
ClearMods(cmd1);
// Setting modifier 'Collision Check Fixtures'
SetModifier(cmd1, 343, "<Yes>");
// Setting modifier 'Collision Check Stock'
SetModifier(cmd1, 344, "<Yes>");
// Setting modifier 'Include Holder'
SetModifier(cmd1, 345, "<Yes>");
// Setting modifier 'Fixture Offset'
SetModifier(cmd1, 239, "5");
// Setting modifier 'Collision Check Index Moves'
SetModifier(cmd1, 350, "<Yes>");
// Setting modifier 'Fixture Offset'
SetModifier(cmd1, 358, "5");
gdh1 = InitDigInfo();
// Finish input
AddFinishDig(gdh1 ,_FINISH);
// Finish input
AddFinishDig(gdh1 ,_FINISH);
cmdret=ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);
