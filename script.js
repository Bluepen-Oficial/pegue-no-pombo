let img_pombo = document.getElementById('pombo');
let img_palhaco = document.getElementById('palhaco');
let pegadas = 0;

function troca_img() {
    img_pombo = img_palhaco;
}

img_pombo.addEventListener('click', () => {  

    console.log("Largura tela: ", window.innerWidth, window.innerHeight)
    console.log("Largura imagem: ", img_pombo.clientWidth, img_pombo.clientHeight);

    let max_largura = window.innerWidth - img_pombo.width;
    let max_altura = window.innerHeight - img_pombo.height - 150;

    console.log("Max: ", max_largura, max_altura)

    let eixo_x = Math.floor(Math.random()*(max_largura)); // Lefth
    let eixo_y = Math.floor(Math.random()*(max_altura)); // Top

    console.log("Posição pombo: ", eixo_x, eixo_y);

    pombo.style.left = (eixo_x + "px");
    pombo.style.top = (eixo_y + "px");

    pegadas++;

    document.getElementById('contador').innerText = pegadas;
    console.log("Pegadas: ", pegadas);

    pegadas >= 50 ? contador.style.color = "#ff0000" : null;

    if (pegadas >= 5) {
        troca_img();
    }

    console.log("+--------------------------------------------------------+");
});