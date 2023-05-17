function configOpen() {
    let configClass = document.getElementById("config-bar").className;
    let contClass = document.getElementById("history-bar").className;
    if(configClass == `calculator-config-bar closed`) {
        document.getElementById("calc-base").className = `calculator-base`;
        document.getElementById("config-bar").className = `calculator-config-bar`;
    } else {
        if(contClass == `calculator-history-bar closed`) {
            document.getElementById("calc-base").className = `calculator-base absolute`;
        }
        document.getElementById("config-bar").className = `calculator-config-bar closed`;
    };
}