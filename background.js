const bgChangeBtn = document.getElementById("bg-color-button");

function backgroundBar() {
    let bgConfigClass = document.getElementById(`bg-config`).className;
    if(bgConfigClass.includes(`bg-configs closed`)) {
        document.getElementById(`bg-config`).className = document.getElementById(`bg-config`).className.replace(`closed`, `opened`);
        document.getElementById(`bg-arrow`).className = document.getElementById(`bg-arrow`).className.replace(`closed`, `opened`);
    } else {
        document.getElementById(`bg-config`).className = document.getElementById(`bg-config`).className.replace(`opened`, `closed`);
        document.getElementById(`bg-arrow`).className = document.getElementById(`bg-arrow`).className.replace(`opened`, `closed`);
    }
}

bgChangeBtn.addEventListener("change", () => {
    document.getElementById("calculator-body").style.backgroundColor = document.getElementById("bg-color-button").value;
})