let panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        panelActiveRemove();
        panel.classList.add("active");
    });
});

function panelActiveRemove() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
}
