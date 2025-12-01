import type {RouteConfig} from "jopijs";

export default function(ctx: RouteConfig) {
    // Allows adding a menu entry for this page.

    ctx.menu_addToLeftMenu(["learning", "routes"], {
        // Optionally, allows setting the priority and force
        // the order of the menu entries between the other
        // entries of the same parent.
        //
        // 0 is the default priority.
        //
        priority: 0,

        // Optional, allows setting the title.
        // Here ["Learning", "Routes"] is the menu entry path.
        // - "Learning" is the key identifying the first menu level.
        // - "Routes" is the key identifying the second menu level.
        //
        // When no title is set, the key is used instead
        // (with the first letter capitalized)
        //
        title: "About Routes",

        // Here we are server-side.
        // It's why we can't directly use set a React component.
        // Instead, we use a simple string, which will be resolved.
        // See: uiInit.tsx --> myModule.resolveIcon("SquareTerminal", SquareTerminal);
        //
        // Note: in this sample, only the first menu level can have an icon.
        // It's why here nothing will be visible.
        //
        icon: "SquareTerminal"
    });
}