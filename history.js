function historyOpen() {
    let configClass = document.getElementById("config-bar").className;
    let contClass = document.getElementById("history-bar").className;
    if(contClass == `calculator-history-bar closed`) {
        document.getElementById("calc-base").className = `calculator-base`;
        document.getElementById("history-bar").className = `calculator-history-bar`;
    } else {
        if(configClass == `calculator-config-bar closed`) {
            document.getElementById("calc-base").className = `calculator-base absolute`;
        }
        document.getElementById("history-bar").className = `calculator-history-bar closed`;
    };
}