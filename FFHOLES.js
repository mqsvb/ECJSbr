/// <reference path="c:\program files\vero software\edgecam 2017 r2\cam\PCI\pci-vsdoc.js" />
// Inicializar comando:- Plano de Trabalho
cmd1 = InitCommand(16, 61);
ClearMods(cmd1);
// Configurar par�metros 'Nome'
SetModifier(cmd1, 244, "[&TOP]");
gdh1 = InitDigInfo();
cmdret=ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);

// Inicializar comando:- Procurar Caracter�sticas
cmd1 = InitCommand(50, 143);
ClearMods(cmd1);
// Configurar par�metros 'Sele��o do Componente'
SetModifier(cmd1, 193, "Autom�tico|2");
// Configurar par�metros 'Fresa'
SetModifier(cmd1, 113, "");
// Configurar par�metros 'Caracter�sticas no plano mais elevado'
SetModifier(cmd1, 40, "<Yes>");
// Configurar par�metros 'Todos os Furos'
SetModifier(cmd1, 130, "<Yes>");
// Configurar par�metros 'Furos Verticais'
SetModifier(cmd1, 115, "<Yes>");
// Configurar par�metros 'Di�metro m�ximo'
SetModifier(cmd1, 39, "10");
// Configurar par�metros 'Agrupar furos similares'
SetModifier(cmd1, 49, "<Yes>");
SetModifier(cmd1, 157, "<None>");
// Configurar par�metros 'Op��es'
SetModifier(cmd1, 38, "");
SetModifier(cmd1, 251, "<None>");
SetModifier(cmd1, 131, "<None>");
// Configurar par�metros 'Furo'
SetModifier(cmd1, 241, "26|26");
// Configurar par�metros 'Camada'
SetModifier(cmd1, 122, "Hole");
SetModifier(cmd1, 253, "<None>");
SetModifier(cmd1, 133, "<None>");
SetModifier(cmd1, 245, "<None>");
SetModifier(cmd1, 125, "<None>");
SetModifier(cmd1, 250, "<None>");
SetModifier(cmd1, 135, "<None>");
SetModifier(cmd1, 244, "<None>");
SetModifier(cmd1, 124, "<None>");
SetModifier(cmd1, 252, "<None>");
SetModifier(cmd1, 132, "<None>");
SetModifier(cmd1, 254, "<None>");
SetModifier(cmd1, 134, "<None>");
SetModifier(cmd1, 243, "<None>");
SetModifier(cmd1, 123, "<None>");
SetModifier(cmd1, 238, "<None>");
SetModifier(cmd1, 237, "<None>");
SetModifier(cmd1, 239, "<None>");
SetModifier(cmd1, 137, "<None>");
// Configurar par�metros 'Nomes Automaticos'
SetModifier(cmd1, 41, "<Yes>");
gdh1 = InitDigInfo();
cmdret=ExecCommand(cmd1, gdh1);
FreeDigInfo(gdh1);
