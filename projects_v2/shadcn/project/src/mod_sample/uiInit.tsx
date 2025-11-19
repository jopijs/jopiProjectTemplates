import {UiKitModule, MenuName} from "jopi-rewrite/uikit";
import {AudioWaveform, Command, Frame, GalleryVerticalEnd, SquareTerminal} from "lucide-react";

export default function(myModule: UiKitModule) {
    const menuManager = myModule.getMenuManager();

    menuManager.addMenuBuilder("favorites", (projectsMenu) => {
        projectsMenu.append({key: "Home", url: "/", icon: Frame});
    });

    menuManager.addMenuBuilder("teams", (teamsMenu) => {
        teamsMenu.append({key: "Acme 1", url: "#", icon: GalleryVerticalEnd, plan: "Plan 1"});
        teamsMenu.append({key: "Acme 2", url: "#", icon: AudioWaveform, plan: "Plan 2"});
        teamsMenu.append({key: "Acme 3", url: "#", icon: Command, plan: "Plan 3"});
    });

    menuManager.addMenuBuilder(MenuName.LEFT_MENU, (leftMenu) => {
        leftMenu.append({
            key: "Features",
            icon: SquareTerminal,
            items: [
                {key: "Forms", url: "/forms"},
                {key: "Tests", url: "/tests"}
            ]
        });
    });
}