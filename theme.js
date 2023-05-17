function themeBar() {
    let themeConfigClass = document.getElementById(`theme-config`).className;
    if(themeConfigClass.includes(`theme-configs closed`)) {
        document.getElementById(`theme-config`).className = document.getElementById(`theme-config`).className.replace(`closed`, `opened`);
        document.getElementById(`theme-arrow`).className = document.getElementById(`theme-arrow`).className.replace(`closed`, `opened`);
    } else {
        document.getElementById(`theme-config`).className = document.getElementById(`theme-config`).className.replace(`opened`, `closed`);
        document.getElementById(`theme-arrow`).className = document.getElementById(`theme-arrow`).className.replace(`opened`, `closed`);
    }
}

function themeSelect(theme) {
    document.getElementById(`theme`).className = `themes ${theme}`;
    document.getElementById(`calculator-base-theme`).className = `calculator-base-theme ${theme}`;
    document.getElementById(`conta`).className = `contas ${theme}`;
    document.getElementById(`resultado`).className = `resultados ${theme}`;
    /* Barra de configurações */
    document.getElementById(`config-bar-theme`).className = `config-bar-theme ${theme}`;
    document.getElementById(`config-bar-title`).className = `config-bar-titles ${theme}`;
    document.getElementById(`close-image-config`).className = `close-button-images ${theme}`;
    document.getElementById(`close-image-history`).className = `close-button-images ${theme}`;
    document.getElementById(`theme-button`).className = `theme-buttons ${theme}`;
    document.getElementById(`theme-image`).className = `theme-images ${theme}`;
    document.getElementById(`theme-title`).className = `theme-titles ${theme}`;
    document.getElementById(`bg-button`).className = `bg-buttons ${theme}`;
    document.getElementById(`bg-image`).className = `bg-images ${theme}`;
    document.getElementById(`bg-title`).className = `bg-titles ${theme}`;
    let calcButtons = document.getElementsByClassName(`calc-buttons`);
    for(let i = 0; i <= calcButtons.length - 1; i++) {
        if(calcButtons[i].className.includes(`btn-gray-1`)) {
            calcButtons[i].className = `calc-buttons btn-gray-1 ${theme}`;
        } else {
            calcButtons[i].className = `calc-buttons ${theme}`;
        }
    };
    let configButtonImages = document.getElementsByClassName(`config-button-images`);
    for(let i = 0; i <= configButtonImages.length - 1; i++) {
        configButtonImages[i].className = `config-button-images ${theme}`;
    }

    /* Seta do botão de trocar tema */
    let themeArrowClass = document.getElementById(`theme-arrow`).className;
    if(themeArrowClass.includes(`light`)) {
        document.getElementById(`theme-arrow`).className = document.getElementById(`theme-arrow`).className.replace(`light`, `${theme}`);
    } else if(themeArrowClass.includes(`dark`)) {
        document.getElementById(`theme-arrow`).className = document.getElementById(`theme-arrow`).className.replace(`dark`, `${theme}`);
    }

    /* Seta do botão de trocar tema */
    let bgArrowClass = document.getElementById(`bg-arrow`).className;
    if(bgArrowClass.includes(`light`)) {
        document.getElementById(`bg-arrow`).className = document.getElementById(`bg-arrow`).className.replace(`light`, `${theme}`);
    } else if(bgArrowClass.includes(`dark`)) {
        document.getElementById(`bg-arrow`).className = document.getElementById(`bg-arrow`).className.replace(`dark`, `${theme}`);
    }
    let themeChangeButtons = document.getElementsByClassName(`theme-change-buttons`);
    for(let i = 0; i <= themeChangeButtons.length - 1; i++) {
        themeChangeButtons[i].className = `theme-change-buttons ${theme}`;
    }
    /* Barra de histórico */
    document.getElementById(`history-theme-bar`).className = `calculator-history-theme-bar ${theme}`;

    let historyBarButtons = document.getElementsByClassName(`history-bar-buttons`);
    for(let i = 0; i <= historyBarButtons.length - 1; i++) {
        historyBarButtons[i].className = `history-bar-buttons ${theme}`;
    }

    let barContas = document.getElementsByClassName(`bar-contas`);
    for(let i = 0; i <= barContas.length - 1; i++) {
        barContas[i].className = `bar-contas ${theme}`;
    }

    let barResultados = document.getElementsByClassName(`bar-resultados`);
    for(let i = 0; i <= barResultados.length - 1; i++) {
        barResultados[i].className = `bar-resultados ${theme}`;
    }
}