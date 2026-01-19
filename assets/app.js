(function () {
    const { CURSORS, CATEGORIES } = window.CursorData || { CURSORS: [], CATEGORIES: [] };

    CURSORS.forEach((cursor) => {
        cursor.searchText = `${cursor.label} ${cursor.value} ${cursor.description}`.toLowerCase();
    });

    let toastTimer = null;
    const elements = {};
    const templates = {};

    function showToast(message) {
        renderToast(message);

        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(renderToast, 2000);
    }

    function renderToast(message) {
        const container = elements.toastContainer;
        if (!container) return;

        if (!message) {
            container.replaceChildren();
            return;
        }

        const template = templates.toast;
        if (!template?.content) return;

        const node = template.content.firstElementChild.cloneNode(true);
        const messageEl = node.querySelector(".toast-message");
        if (messageEl) messageEl.textContent = message;

        container.replaceChildren(node);
    }

    function createCursorCard(cursor) {
        const template = templates.card;
        if (!template?.content) return null;

        const node = template.content.firstElementChild.cloneNode(true);
        const { value, label, description: cursorDescription, svgPath, viewBox } = cursor;
        node.onclick = (e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(`cursor: ${value};`);
            showToast(`Copied "cursor: ${value};"`);
        };

        const preview = node.querySelector(".cursor-card-preview");
        if (preview) {
            preview.style.cursor = value;
            preview.title = `Hover to test: ${value}`;
        }

        const icon = node.querySelector(".cursor-card-icon");
        if (icon) {
            icon.setAttribute("viewBox", viewBox || "0 0 24 24");
            const path = icon.querySelector("path");
            if (path) path.setAttribute("d", svgPath);
        }

        const title = node.querySelector(".cursor-card-title");
        if (title) title.textContent = label;

        const code = node.querySelector(".cursor-card-code");
        if (code) code.textContent = `cursor: ${value};`;

        const descriptionEl = node.querySelector(".cursor-card-description");
        if (descriptionEl) descriptionEl.textContent = cursorDescription;

        return node;
    }

    function buildCategorySection(category, categoryCursors) {
        const template = templates.category;
        if (!template?.content) return null;

        const section = template.content.firstElementChild.cloneNode(true);
        const label = section.querySelector(".category-label");
        if (label) label.textContent = category;

        const count = section.querySelector(".category-count");
        if (count) count.textContent = String(categoryCursors.length);

        const grid = section.querySelector(".category-grid");
        if (grid) {
            categoryCursors.forEach((cursor) => {
                const card = createCursorCard(cursor);
                if (card) grid.appendChild(card);
            });
        }

        return section;
    }

    function renderAll() {
        const categoriesContainer = elements.categoriesContainer;
        if (!categoriesContainer) return;

        const query = elements.searchInput?.value?.trim().toLowerCase() || "";
        const grouped = new Map();

        CURSORS.forEach((cursor) => {
            if (query && !cursor.searchText.includes(query)) return;
            const list = grouped.get(cursor.category);
            if (list) list.push(cursor);
            else grouped.set(cursor.category, [cursor]);
        });

        const fragment = document.createDocumentFragment();
        let hasResults = false;

        CATEGORIES.forEach((category) => {
            const categoryCursors = grouped.get(category);
            if (!categoryCursors?.length) return;

            const section = buildCategorySection(category, categoryCursors);
            if (section) {
                fragment.appendChild(section);
                hasResults = true;
            }
        });

        categoriesContainer.replaceChildren(fragment);

        const emptyState = elements.emptyState;
        if (emptyState) emptyState.classList.toggle("hidden", hasResults);
    }

    function init() {
        elements.toastContainer = document.getElementById("toast-container");
        elements.categoriesContainer = document.getElementById("categories-container");
        elements.emptyState = document.getElementById("empty-state");
        elements.searchInput = document.getElementById("search-input");

        templates.toast = document.getElementById("toast-template");
        templates.card = document.getElementById("cursor-card-template");
        templates.category = document.getElementById("category-section-template");

        elements.searchInput?.addEventListener("input", renderAll);

        renderAll();
    }

    document.addEventListener("DOMContentLoaded", init);
})();
