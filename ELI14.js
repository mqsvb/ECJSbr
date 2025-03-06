 // Initialising command: Milling Cutter
        cmd1 = InitCommand(36, 108);
        
		// Clear the command modifiers
        ClearMods(cmd1);
        
		// Load required tool from ToolStore
        LoadTool(cmd1, "ELI14");
        	
        	gdh1 = InitDigInfo();
        	cmdret = ExecCommand(cmd1, gdh1);
        	FreeDigInfo(gdh1);