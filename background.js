let colors = {
    accentcolor: "#31363b",
    textcolor: "#ffffff",

    toolbar: "#40454a",
    tab_line: "#2478c8",

    toolbar_field: "#31363b",
    toolbar_field_text: "#ffffff",

    popup: "#31363b",
    popup_text: "#ffffff"
};
    
    
(async () => {
    let base = await browser.theme.getCurrent();
    Object.assign(base.colors, colors);
    browser.theme.update(base);
});
