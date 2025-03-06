/// <reference path="c:\program files\hexagon\edgecam 2023.1\cam\PCI\pci-vsdoc.js" />

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

// Initialising command:- Create Setup
var cmd1 = InitCommand(11, 216); 
ClearMods(cmd1); 
// Setting modifier 'Component'
SetModifier(cmd1, 276, "Auto|3"); 
// Setting modifier 'Stock'
SetModifier(cmd1, 277, "Auto|3"); 
// Setting modifier 'Fixture'
SetModifier(cmd1, 278, "<None>|1"); 
// Setting modifier 'Component Grip Diameter'
SetModifier(cmd1, 215, "0"); 
// Setting modifier 'Part Stick Out'
SetModifier(cmd1, 207, "0"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- Preset Position
var cmd1 = InitCommand(7, 125); 
ClearMods(cmd1); 
// Setting modifier 'Mode'
SetModifier(cmd1, 108, "CENTRE|1"); 
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- Operation Preferences
var cmd1 = InitCommand(16, 63); 
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
// Setting modifier 'Optimise Link Moves'
SetModifier(cmd1, 64, "0"); 
// Setting modifier 'Line/Arc Smooth'
SetModifier(cmd1, 65, "<Yes>"); 
// Setting modifier 'Disable M-Functions'
SetModifier(cmd1, 155, "0"); 
// Setting modifier 'Coolant'
SetModifier(cmd1, 107, "1"); 
// Setting modifier 'Spindle Direction'
SetModifier(cmd1, 108, "2"); 
// Setting modifier 'Profile Material on Left'
SetModifier(cmd1, 156, "<Yes>"); 
// Setting modifier 'Modal Modifiers'
SetModifier(cmd1, 157, "0"); 
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
// Setting modifier 'X Fixed'
SetModifier(cmd1, 101, "0"); 
// Setting modifier 'Y Fixed'
SetModifier(cmd1, 102, "0"); 
// Setting modifier 'Z Fixed'
SetModifier(cmd1, 103, "0"); 
// Setting modifier 'First Axis'
SetModifier(cmd1, 100, "3"); 
// Setting modifier 'Spindle Stop'
SetModifier(cmd1, 121, "0"); 
// Setting modifier 'Coolant Off'
SetModifier(cmd1, 122, "0"); 
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
var gdh1 = InitDigInfo();
var cmdret = ExecCommand(cmd1, gdh1); 
FreeDigInfo(gdh1); 

// Initialising command:- Machine Parameters
var cmd1 = InitCommand(16, 62); 
ClearMods(cmd1); 
// Setting modifier 'Sequence Name'
SetModifier(cmd1, 117, "TMC 01"); 
// Setting modifier 'Machine Tool'
SetModifier(cmd1, 129, "intorex_tmc3000-st.mcp"); 
// Setting modifier 'Mating Datum'
SetModifier(cmd1, 201, "[&TOP]"); 
// Setting modifier 'X Mating Offset'
SetModifier(cmd1, 203, "0"); 
// Setting modifier 'Y Mating Offset'***********************************************
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

