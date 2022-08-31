const x = 3;
const y = 3;
let score = 0;
let viewScore = document.querySelector(".score");
const main = document.getElementById("main");
const modal = document.getElementById("modal");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    modal.setAttribute("class", "hidden2");
    main.setAttribute("class", "main");
    init();
});

function init() {
    const table = document.querySelector("table");
    let id = 0;
    for (let i = 0; i < y; i++) {
        let tr = document.createElement("tr");
        for (let j = 0; j < x; j++) {
            let td = document.createElement("td");
            td.classList.add("hidden");
            td.id = id;
            id++;
            td.addEventListener("click", () => {
                if (td.className === "visible") {
                    td.setAttribute("class", "hidden");
                    score += 10;
                    viewScore.textContent = `SCORE: ${score}`;
                    return;
                }
                if (td.className === "visible2") {
                    td.setAttribute("class", "hidden");
                    score += 2;
                    viewScore.textContent = `SCORE: ${score}`;
                    return;
                }
                if (td.className === "visible3") {
                    td.setAttribute("class", "hidden");
                    score --;
                    viewScore.textContent = `SCORE: ${score}`;
                    return;
                }
            });
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    mainLoop();
}
    
function mainLoop() {
    let time = document.querySelector("h2");
    let cnt = 10;
    let timer = setInterval(() => {
        time.textContent = `TIME: ${cnt}`;
        cnt--;
        if (cnt < 0) {
            document.querySelector("table").style.pointerEvents = "none";
            clearInterval(timer);
            clearInterval(showPanel);
            time.textContent = "RETRY";
            time.style =
                "background: rgba(0, 0, 0, 0.3); color:black; width: 200px; border-radius: 8px;";
            time.addEventListener("click", () => {
                document.location.reload();
            });
        }
    }, 1000);
    let showPanel = setInterval(() => {
        const n = Math.random();
        let id = Math.floor(Math.random() * (x * y));
        let panel = document.getElementById(id);
        if (panel.className === "hidden") {
            if (n < 0.05) {
                panel.setAttribute("class", "visible");
                setTimeout(() => {
                    panel.setAttribute("class", "hidden");
                }, 800);
            }
            else if (n < 0.5) {
                panel.setAttribute("class", "visible2");
                setTimeout(() => {
                    panel.setAttribute("class", "hidden");
                }, 1000);
            }
            else{
                panel.setAttribute("class", "visible3");
                setTimeout(() => {
                panel.setAttribute("class", "hidden");
                }, 1000);
            }
        }
        panel.onclick=function(){
                panel.setAttribute("class", "flashing");
            setTimeout(() => {
                panel.setAttribute("class", "hidden");
                }, 250);
        }
    }, 500);
}