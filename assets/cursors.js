(function () {
    // A standardized arrow path used across multiple cursors for consistency
    const ARROW_PATH = "M3.5 2.5L9 17l2.5-5.5L17 9 3.5 2.5z";

    const CURSORS = [
        // General
        {
            id: "default",
            value: "default",
            label: "Default",
            description: "The platform-dependent default cursor",
            category: "General",
            svgPath: ARROW_PATH,
        },
        {
            id: "none",
            value: "none",
            label: "None",
            description: "No cursor is rendered",
            category: "General",
            svgPath:
                "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z",
        },
        {
            id: "context-menu",
            value: "context-menu",
            label: "Context Menu",
            description: "Context menu is available",
            category: "General",
            svgPath: `${ARROW_PATH} M15 13h6v2h-6z M15 16.5h6v2h-6z M15 20h4v2h-4z`,
        },
        {
            id: "help",
            value: "help",
            label: "Help",
            description: "Help is available",
            category: "General",
            svgPath: `${ARROW_PATH} M19.5 13c1.38 0 2.5 1.12 2.5 2.5 0 2-2.5 1.5-2.5 3.5h-2c0-2.5 2.5-2.5 2.5-3.5 0-.55-.45-1-1-1s-1 .45-1 1h-2c0-1.66 1.34-3 3-3z M19.5 21h-2v2h2v-2z`,
        },
        {
            id: "pointer",
            value: "pointer",
            label: "Pointer",
            description: "Link pointer",
            category: "General",
            viewBox: "-13.27 -15.36 132.71 153.6", // Scaled viewBox by 1.25 to shrink content by 20%
            svgPath:
                "M29.96,67.49c-0.16-0.09-0.32-0.19-0.47-0.31c-1.95-1.56-4.08-3.29-5.94-4.81c-2.69-2.2-5.8-4.76-7.97-6.55 c-1.49-1.23-3.17-2.07-4.75-2.39c-1.02-0.2-1.95-0.18-2.67,0.12c-0.59,0.24-1.1,0.72-1.45,1.48c-0.45,0.99-0.66,2.41-0.54,4.32 c0.11,1.69,0.7,3.55,1.48,5.33c1.16,2.63,2.73,5.04,3.89,6.59c0.07,0.09,0.13,0.19,0.19,0.29l23.32,33.31 c0.3,0.43,0.47,0.91,0.53,1.4l0.01,0c0.46,3.85,1.28,6.73,2.49,8.54c0.88,1.31,2.01,1.98,3.42,1.94l0.07,0v-0.01h36.38 c0.09,0,0.17,0,0.26,0.01c2.28-0.03,4.36-0.71,6.25-2.02c2.09-1.44,3.99-3.68,5.72-6.7c0.03-0.05,0.06-0.11,0.1-0.16 c0.67-1.15,1.55-2.6,2.41-4.02c3.72-6.13,6.96-11.45,7.35-19.04L99.8,74.34c-0.02-0.15-0.03-0.3-0.03-0.45 c0-0.14,0.02-1.13,0.03-2.46c0.09-6.92,0.19-15.48-6.14-16.56h-4.05l-0.04,0c-0.02,1.95-0.15,3.93-0.27,5.86 c-0.11,1.71-0.21,3.37-0.21,4.95c0,1.7-1.38,3.08-3.08,3.08c-1.7,0-3.08-1.38-3.08-3.08c0-1.58,0.12-3.42,0.24-5.33 c0.41-6.51,0.89-13.99-4.33-14.93H74.8c-0.23,0-0.45-0.02-0.66-0.07c0.04,2.36-0.12,4.81-0.27,7.16c-0.11,1.71-0.21,3.37-0.21,4.95 c0,1.7-1.38,3.08-3.08,3.08c-1.7,0-3.08-1.38-3.08-3.08c0-1.58,0.12-3.42,0.24-5.33c0.41-6.51,0.89-13.99-4.33-14.93h-4.05 c-0.28,0-0.55-0.04-0.8-0.11V49c0,1.7-1.38,3.08-3.08,3.08c-1.7,0-3.08-1.38-3.08-3.08V17.05c0-5.35-2.18-8.73-4.97-10.14 c-1.02-0.52-2.12-0.78-3.21-0.78c-1.08,0-2.18,0.26-3.19,0.77c-2.76,1.4-4.92,4.79-4.92,10.28v56c0,1.7-1.38,3.08-3.08,3.08 c-1.7,0-3.08-1.38-3.08-3.08V67.49L29.96,67.49z M58.57,31.15c0.26-0.07,0.53-0.11,0.8-0.11h4.24c0.24,0,0.47,0.03,0.69,0.08 c5.65,0.88,8.17,4.18,9.2,8.43c0.39-0.18,0.83-0.29,1.3-0.29h4.24c0.24,0,0.47,0.03,0.69,0.08c6.08,0.94,8.53,4.69,9.41,9.41 c0.15-0.02,0.31-0.04,0.47-0.04h4.24c0.24,0,0.47,0.03,0.69,0.08c11.64,1.8,11.5,13.37,11.38,22.71c0,0.33-0.01,0.68-0.01,2.35 l0,0.07l0.24,10.77c0.01,0.11,0.01,0.23,0,0.34c-0.45,9.16-4.07,15.12-8.24,21.98c-0.7,1.14-1.41,2.32-2.34,3.93 c-0.02,0.04-0.04,0.08-0.07,0.13c-2.18,3.8-4.7,6.71-7.57,8.69c-2.92,2.02-6.16,3.06-9.71,3.1c-0.09,0.01-0.19,0.01-0.28,0.01 H41.58v-0.01c-3.66,0.07-6.5-1.53-8.59-4.66c-1.68-2.51-2.79-6.03-3.4-10.47L6.73,75.07c-0.03-0.04-0.07-0.08-0.1-0.12 c-1.36-1.82-3.21-4.65-4.59-7.79C1,64.8,0.21,62.24,0.05,59.74c-0.2-2.97,0.22-5.36,1.06-7.23c1.05-2.32,2.72-3.83,4.74-4.66 c1.89-0.77,4.01-0.88,6.16-0.45c2.57,0.51,5.22,1.81,7.49,3.68c1.86,1.54,4.95,4.07,7.95,6.52l2.52,2.06V17.18 c0-8.14,3.63-13.39,8.28-15.76C40.12,0.47,42.17,0,44.23,0c2.05,0,4.1,0.48,5.98,1.43c4.69,2.37,8.36,7.62,8.36,15.62V31.15 L58.57,31.15z",
        },
        {
            id: "progress",
            value: "progress",
            label: "Progress",
            description: "Program is busy, but user can still interact",
            category: "General",
            svgPath: `${ARROW_PATH} M17.5 12c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 7c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z`,
        },
        {
            id: "wait",
            value: "wait",
            label: "Wait",
            description: "Program is busy, user cannot interact",
            category: "General",
            svgPath:
                "M6 2l.01 6L10 12l-3.99 4L6 22h12v-6l-4-4 4-3.99V2H6zM16 16.5V20H8v-3.5l4-4 4 4z",
        },

        // Links & Status
        {
            id: "alias",
            value: "alias",
            label: "Alias",
            description: "An alias or shortcut is to be created",
            category: "Links & Status",
            svgPath: `${ARROW_PATH} M21 16 L16 12 V14.5 C13 14.5 11 16.5 10 20 C11.5 17 13.5 16.5 16 16.5 V19 Z`,
        },
        {
            id: "copy",
            value: "copy",
            label: "Copy",
            description: "Something is to be copied",
            category: "Links & Status",
            svgPath: `${ARROW_PATH} M19 13h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z`,
        },
        {
            id: "no-drop",
            value: "no-drop",
            label: "No Drop",
            description: "Item cannot be dropped here",
            category: "Links & Status",
            svgPath:
                "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z",
        },
        {
            id: "not-allowed",
            value: "not-allowed",
            label: "Not Allowed",
            description: "Action is not allowed",
            category: "Links & Status",
            svgPath:
                "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-1.85.63-3.55 1.69-4.9L16.9 18.31C15.55 19.37 13.85 20 12 20zm6.31-3.1L7.1 5.69C8.45 4.63 10.15 4 12 4c4.42 0 8 3.58 8 8 0 1.85-.63 3.55-1.69 4.9z",
        },

        // Selection
        {
            id: "cell",
            value: "cell",
            label: "Cell",
            description: "Table cell selection",
            category: "Selection",
            svgPath:
                "M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H4V5h16v14z M11 7h2v10h-2z M7 11h10v2H7z",
        },
        {
            id: "crosshair",
            value: "crosshair",
            label: "Crosshair",
            description: "Precise selection",
            category: "Selection",
            svgPath: "M13 2v9h9v2h-9v9h-2v-9H2v-2h9V2h2z",
        },
        {
            id: "text",
            value: "text",
            label: "Text",
            description: "Text selection",
            category: "Selection",
            svgPath: "M8 4v2h3v12H8v2h8v-2h-3V6h3V4z",
        },
        {
            id: "vertical-text",
            value: "vertical-text",
            label: "Vertical Text",
            description: "Vertical text selection",
            category: "Selection",
            svgPath: "M4 8h2v3h12V8h2v8h-2v-3H6v3H4z",
        },

        // Drag & Drop
        {
            id: "grab",
            value: "grab",
            label: "Grab",
            description: "Something can be grabbed",
            category: "Drag & Drop",
            viewBox: "0 0 36 36",
            svgPath:
                "M31.46,8.57A3.11,3.11,0,0,0,27,5.75a3.19,3.19,0,0,0-4.66-2.64,3.29,3.29,0,0,0-6.42-.76,3.23,3.23,0,0,0-1.66-.46A3.27,3.27,0,0,0,11,5.18V17.84c-1.28-1.6-2.53-3.18-2.72-3.45A3.19,3.19,0,0,0,5.56,12.9a3.37,3.37,0,0,0-3.47,3.48C2.18,18.18,5.66,24.54,8,28c3.54,5.24,6.92,6,7.07,6l.18,0H25.59a.92.92,0,0,0,.55-.19,13.13,13.13,0,0,0,3.75-6.13c1-3.09,1.53-7.53,1.58-13.56ZM28.18,27.12a12.46,12.46,0,0,1-2.94,5.08H15.33c-.47-.14-3.07-1.1-5.87-5.25S3.94,17.27,3.89,16.29a1.5,1.5,0,0,1,.45-1.13,1.52,1.52,0,0,1,1.14-.46,1.43,1.43,0,0,1,1.32.71c.29.43,2.36,3,3.57,4.53L12.8,18.3V5.18a1.48,1.48,0,1,1,2.95,0V16.32h1.8v-13a1.51,1.51,0,0,1,3,0V16.45h1.8V6a1.43,1.43,0,1,1,2.85,0V17.44H27V8.54a1.33,1.33,0,0,1,2.65,0v5.55C29.62,20,29.14,24.21,28.18,27.12Z",
        },
        {
            id: "grabbing",
            value: "grabbing",
            label: "Grabbing",
            description: "Something is being grabbed",
            category: "Drag & Drop",
            viewBox: "0 0 36 36",
            svgPath:
                "M28.09,9.74a4,4,0,0,0-1.16.19c-.19-1.24-1.55-2.18-3.27-2.18A4,4,0,0,0,22.13,8,3.37,3.37,0,0,0,19,6.3a3.45,3.45,0,0,0-2.87,1.32,3.65,3.65,0,0,0-1.89-.51A3.05,3.05,0,0,0,11,9.89v.91c-1.06.4-4.11,1.8-4.91,4.84s.34,8,2.69,11.78a25.21,25.21,0,0,0,5.9,6.41.9.9,0,0,0,.53.17H25.55a.92.92,0,0,0,.55-.19,13.13,13.13,0,0,0,3.75-6.13A25.8,25.8,0,0,0,31.41,18v-5.5A3.08,3.08,0,0,0,28.09,9.74ZM29.61,18a24,24,0,0,1-1.47,9.15A12.46,12.46,0,0,1,25.2,32.2H15.47a23.75,23.75,0,0,1-5.2-5.72c-2.37-3.86-3-8.23-2.48-10.39A5.7,5.7,0,0,1,11,12.76v7.65a.9.9,0,0,0,1.8,0V9.89c0-.47.59-1,1.46-1s1.49.52,1.49,1v5.72h1.8V8.81c0-.28.58-.71,1.46-.71s1.53.48,1.53.75v6.89h1.8V10l.17-.12a2.1,2.1,0,0,1,1.18-.32c.93,0,1.5.44,1.5.68l0,6.5H27V11.87a1.91,1.91,0,0,1,1.12-.33c.86,0,1.5.51,1.52.94Z",
        },
        {
            id: "move",
            value: "move",
            label: "Move",
            description: "Something is to be moved",
            category: "Drag & Drop",
            svgPath:
                "M18 11h-5V6h3l-4-4-4 4h3v5H6V8l-4 4 4 4v-3h5v5H8l4 4 4-4h-3v-5h5v3l4-4-4-4v3z",
        },
        {
            id: "all-scroll",
            value: "all-scroll",
            label: "All Scroll",
            description: "Something can be scrolled in any direction",
            category: "Drag & Drop",
            svgPath:
                "M18 11h-5V6h3l-4-4-4 4h3v5H6V8l-4 4 4 4v-3h5v5H8l4 4 4-4h-3v-5h5v3l4-4-4-4v3z",
        },

        // Resize
        {
            id: "col-resize",
            value: "col-resize",
            label: "Col Resize",
            description: "Column resizing",
            category: "Resize",
            svgPath:
                "M11 4 H13 V20 H11 Z M2 12 L6 8 V11 H9 V13 H6 V16 Z M22 12 L18 8 V11 H15 V13 H18 V16 Z",
        },
        {
            id: "row-resize",
            value: "row-resize",
            label: "Row Resize",
            description: "Row resizing",
            category: "Resize",
            svgPath:
                "M4 11 H20 V13 H4 Z M12 2 L8 6 H11 V9 H13 V6 H16 Z M12 22 L8 18 H11 V15 H13 V18 H16 Z",
        },
        {
            id: "n-resize",
            value: "n-resize",
            label: "N Resize",
            description: "North edge resize",
            category: "Resize",
            svgPath: "M12 4 L8 8 H11 V18 H13 V8 H16 Z",
        },
        {
            id: "e-resize",
            value: "e-resize",
            label: "E Resize",
            description: "East edge resize",
            category: "Resize",
            svgPath: "M20 12 L16 8 V11 H6 V13 H16 V16 Z",
        },
        {
            id: "s-resize",
            value: "s-resize",
            label: "S Resize",
            description: "South edge resize",
            category: "Resize",
            svgPath: "M12 20 L8 16 H11 V6 H13 V16 H16 Z",
        },
        {
            id: "w-resize",
            value: "w-resize",
            label: "W Resize",
            description: "West edge resize",
            category: "Resize",
            svgPath: "M4 12 L8 8 V11 H18 V13 H8 V16 Z",
        },
        {
            id: "ne-resize",
            value: "ne-resize",
            label: "NE Resize",
            description: "North-East corner resize",
            category: "Resize",
            svgPath:
                "M16.5 3.5L11 9l1.5 1.5 5.5-5.5V9h2V2h-7v2h3.5z",
        },
        {
            id: "nw-resize",
            value: "nw-resize",
            label: "NW Resize",
            description: "North-West corner resize",
            category: "Resize",
            svgPath: "M3.5 3.5L9 9 7.5 10.5 2 5v4H0V2h7v2H3.5z",
        },
        {
            id: "se-resize",
            value: "se-resize",
            label: "SE Resize",
            description: "South-East corner resize",
            category: "Resize",
            svgPath:
                "M20.5 20.5L15 15l1.5-1.5 5.5 5.5V15h2v7h-7v-2h3.5z",
        },
        {
            id: "sw-resize",
            value: "sw-resize",
            label: "SW Resize",
            description: "South-West corner resize",
            category: "Resize",
            svgPath:
                "M7.5 20.5L13 15l-1.5-1.5-5.5 5.5V15H4v7h7v-2H7.5z",
        },

        // Bidirectional
        {
            id: "ew-resize",
            value: "ew-resize",
            label: "EW Resize",
            description: "East-West bidirectional resize",
            category: "Resize",
            svgPath:
                "M2 12 L6 8 V11 H10 V13 H6 V16 Z M22 12 L18 8 V11 H14 V13 H18 V16 Z",
        },
        {
            id: "ns-resize",
            value: "ns-resize",
            label: "NS Resize",
            description: "North-South bidirectional resize",
            category: "Resize",
            svgPath:
                "M12 2 L8 6 H11 V10 H13 V6 H16 Z M12 22 L8 18 H11 V14 H13 V18 H16 Z",
        },
        {
            id: "nesw-resize",
            value: "nesw-resize",
            label: "NESW Resize",
            description: "North-East to South-West resize",
            category: "Resize",
            svgPath:
                "M16.5 3.5L11 9l1.5 1.5 5.5-5.5V9h2V2h-7v2h3.5z M7.5 20.5L13 15l-1.5-1.5-5.5 5.5V15H4v7h7v-2H7.5z",
        },
        {
            id: "nwse-resize",
            value: "nwse-resize",
            label: "NWSE Resize",
            description: "North-West to South-East resize",
            category: "Resize",
            svgPath:
                "M7.5 3.5L13 9l-1.5 1.5-5.5-5.5V9h-2V2h7v2h-3.5z M16.5 20.5L11 15l1.5-1.5 5.5 5.5V15H20v7h-7v-2H16.5z",
        },

        // Zoom
        {
            id: "zoom-in",
            value: "zoom-in",
            label: "Zoom In",
            description: "Zoom in capability",
            category: "Zoom",
            svgPath:
                "M10 2a8 8 0 0 1 6.3 12.9l5 5-1.4 1.4-5-5A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z M9 6h2v3h3v2h-3v3H9v-3H6V9h3V6z",
        },
        {
            id: "zoom-out",
            value: "zoom-out",
            label: "Zoom Out",
            description: "Zoom out capability",
            category: "Zoom",
            svgPath:
                "M10 2a8 8 0 0 1 6.3 12.9l5 5-1.4 1.4-5-5A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z M6 9h8v2H6V9z",
        },
    ];

    const CATEGORIES = [
        "General",
        "Links & Status",
        "Selection",
        "Drag & Drop",
        "Resize",
        "Zoom",
    ];

    window.CursorData = {
        CURSORS,
        CATEGORIES,
    };
})();
