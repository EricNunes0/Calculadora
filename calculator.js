document.addEventListener("keydown", (e) => {
    let name = e.key.toLowerCase();
    switch(name) {
        case "%":
            addOperator("÷ 100 ×");
            break;
        case "escape":
            cleanAll();
            break;
        case "p":
            addOperator("^");
            break;
        case "delete":
            cleanResult();
            break;
        case "backspace":
            removeNumberDigit();
            break;
        case "r":
            fractionNumerator();
            break;
        case "0":
            addNumberDigit(0);
            break;
        case "1":
            addNumberDigit(1);
            break;
        case "2":
            addNumberDigit(2);
            break;
        case "3":
            addNumberDigit(3);
            break;
        case "4":
            addNumberDigit(4);
            break;
        case "5":
            addNumberDigit(5);
            break;
        case "6":
            addNumberDigit(6);
            break;
        case "7":
            addNumberDigit(7);
            break;
        case "8":
            addNumberDigit(8);
            break;
        case "9":
            addNumberDigit(9);
            break;
        case "f9":
            invertSign();
            break;
        case ".": case ",":
            addNumberDigit('.');
            break;
        case "+":
            addOperator("+");
            break;
        case "-":
            addOperator("-");
            break;
        case "*":
            addOperator("×");
            break;
        case "/":
            addOperator("÷");
            break;
        case "enter":
            calculate();
            break;
        default:
            break;
    }
});

/* Adicionar dígitos */
function addNumberDigit(n) {
    let resultadoTxt = document.getElementById("resultado").textContent;
    if(resultadoTxt == 0) {
        document.getElementById("resultado").innerText = n;
    } else {
        if(n == "." || n == ",") {
            if(resultadoTxt.includes(".") || resultadoTxt.includes(",")) {
                return;
            }
        }
        document.getElementById("resultado").innerText = document.getElementById("resultado").textContent + n;
    };
};

/* Adicionar operador */
function addOperator(sign) {
    let contaTxt = document.getElementById("conta").textContent;
    if(contaTxt) {
        if(endsWithNumber(contaTxt)) {
            document.getElementById("conta").innerText = document.getElementById("conta").textContent.slice(0, -1) + sign + document.getElementById("resultado").textContent;
        } else {
            let resultTxt = document.getElementById("resultado").textContent;
            if(parseInt(resultTxt) == 0) {
                document.getElementById("conta").innerText = document.getElementById("conta").textContent.slice(0, -1) + sign;
            } else if (parseInt(resultTxt) != 0) {
                calculate();
                document.getElementById("conta").innerText = document.getElementById("conta").textContent + document.getElementById("resultado").textContent + sign;
            };
        }
    } else {
        document.getElementById("conta").innerText = document.getElementById("resultado").textContent + sign;
    }
    document.getElementById("resultado").innerText = 0;
}

/* Inverter sinal */
function invertSign() {
    let resultadoTxt = document.getElementById("resultado").textContent;
    if(resultadoTxt != 0) {
        document.getElementById("resultado").innerText = parseInt(resultadoTxt) * -1;
    }
}

/* Fração: 1/x */
function fractionNumerator() {
    let resultadoTxt = document.getElementById("resultado").textContent;
    document.getElementById("resultado").innerText = "";
    if(resultadoTxt != 0) {
        document.getElementById("conta").innerText = document.getElementById("conta").textContent + `1/(${resultadoTxt})`;
    }
    calculate();
}

/* Calcular raiz quadrada */
function raiz() {
    let resultadoTxt = document.getElementById("resultado").textContent;
    document.getElementById("resultado").innerText = "";
    if(resultadoTxt != 0) {
        document.getElementById("conta").innerText = document.getElementById("conta").textContent + `${resultadoTxt} ** 0.5`;
    }
    calculate();
}

/* Principal função de calcular */
function calculate() {
    let contaTxt = document.getElementById("conta").textContent;
    let resultadoTxt = document.getElementById("resultado").textContent;
    let totalConta = contaTxt + resultadoTxt;
    let replacedConta = totalConta.replace(`×`, `*`).replace(`÷`, `/`).replace(`^`, `**`);
    let total = eval(replacedConta);
    if(isNaN(total) || total == Infinity) {
        totalInner = 0;
    } else {
        totalInner = total;
    }
    if(contaTxt) {
        historyAdd(totalConta, totalInner);
        showAlert();
    }
    document.getElementById("conta").innerText = "";
    document.getElementById("resultado").innerText = totalInner;
}

/* Função para verificar se um número termina com um número */
function endsWithNumber(str) {
    return /[0-9]+$/.test(str);
  }

/* Limpar contas e resultados */
function cleanAll() {
    document.getElementById("conta").innerText = "";
    document.getElementById("resultado").innerText = 0;
}

/* Limpar apenas o resultado */
function cleanResult() {
    document.getElementById("resultado").innerText = 0;
}

/* Remover dígitos */
function removeNumberDigit() {
    if(document.getElementById("resultado").textContent.length <= 1) {
        document.getElementById("resultado").innerText = 0;
    } else {
        document.getElementById("resultado").innerText = document.getElementById("resultado").textContent.slice(0, -1);
    };
};

function showAlert() {
    let contClass = document.getElementById("alert-saved-account").className;
    if(contClass == `calculator-alert-containers closed`) {
        document.getElementById("alert-saved-account").className = `calculator-alert-containers`;
    }
    setTimeout(() => {
        document.getElementById("alert-saved-account").className = `calculator-alert-containers closed`;
    }, 3000);
}

function historyAdd(conta, resultado) {
    let contaTxt = conta.trim().split("");
    let contaConverted = "";
    for(let letter of contaTxt) {
        if(isNaN(letter)) {
            letter = ` ${letter} `;
        }
        contaConverted += `${letter}`;
    }
    let theme = document.getElementById(`theme`).className;
    let th;
    if(theme == `themes light`) {
        th = `light`;
    } else if(theme == `themes dark`) {
        th = `dark`;
    }
    document.getElementById("operations").innerHTML += `
        <div class = "history-bar-texts">
            <button class = "history-bar-buttons ${th}" onclick = "historyRestoreConta('${conta}', ${resultado})">
                <div class = "bar-contas-div">
                    <p class = "bar-contas ${th}">${contaConverted} = </p>
                </div>
                <p class = "bar-resultados ${th}">${resultado}</p>
            </button>
        </div>
    `;
}

function historyRestoreConta(conta, resultado) {
    document.getElementById("conta").innerText = `${conta}`;
    document.getElementById("resultado").innerText = `${resultado}`;
}