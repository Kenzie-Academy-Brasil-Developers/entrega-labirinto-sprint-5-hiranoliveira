let capturaMain = document.querySelector('main')
let capturaModal = document.querySelector('.modal')
let capturaBotao = document.querySelector('button')



const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const createMaze = () => {
    
    for (let i = 0; i < map.length; i++) {
        let div = document.createElement('div')
        div.className = "divMae"
        
        
        for (let j = 0; j < map[i].length; j++){
            if (map[i][j] === "W"){
                let cell = document.createElement('div')
                div.appendChild(cell)
                cell.className = "parede"
                cell.dataset.index = j
                
            } else if (map[i][j] === "S"){
                let start = document.createElement('div')
                start.className = 'start'
                // start.id = 'start'
                start.appendChild(jogador)
                div.appendChild(start)
                start.dataset.index = j
            } else {
                let cell2 = document.createElement('div')
                div.appendChild(cell2)
                cell2.className = "passagem"
                cell2.dataset.index = j
                
            }
        }
        capturaMain.appendChild(div)
    }
}


let jogador = document.createElement('div')
jogador.id = 'jogador'



function movement(keyName) {
    
    let start = document.getElementById("jogador")
    
    let destino = start.parentElement.dataset.index;
    // let nomeClasse = 
    // element = el.nextElementSibling;
    // let x = document.getElementById("").parentElement
    
    // let position = ''
    let up = start.parentElement.parentElement.previousElementSibling.childNodes[destino]
    
    let down = start.parentElement.parentElement.nextElementSibling.childNodes[destino]
    
    let left = start.parentElement.previousElementSibling
    
    let right = start.parentElement.nextElementSibling
    // fazer append na célula de destino
    // (subir pro parent e pegar a célula desejada, se for .passagem)
    
    
    
    if (keyName === "ArrowDown"){
        if(down.className !== 'parede'){
            
            down.appendChild(start)
        }
    }
    else if (keyName === "ArrowUp"){
        if(up.className !== 'parede'){
            up.appendChild(start)
        }
    }
    else if (keyName === "ArrowLeft"){
        if (destino !== 0 && left.className !== 'parede'){
            left.appendChild(start)
        }
        
    }
    else if (keyName === "ArrowRight"){
        if (destino === "20" ) {
            capturaModal.classList.remove('hide')
        }
        else if(right.className !== 'parede'){
            right.appendChild(start)
        }        
    }
    // condicional proxima casa pela classe passagem
    // div.classList.remove("foo");
    // div.classList.add("anotherclass")
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    movement(keyName)
    
});


createMaze()
// função reset
const resetButton = () => {
    capturaModal.classList.add('hide')

    // capturaMain.innerHTML = ''
    // createMaze()
    // movement(keyName)
}
capturaBotao.addEventListener('click', resetButton)