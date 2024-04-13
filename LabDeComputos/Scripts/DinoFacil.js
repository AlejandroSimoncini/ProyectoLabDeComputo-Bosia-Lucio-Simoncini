//board
let board;
let boardWidth=750;
let boardHeight=250;
let context; //variable usada para dibujar sobre el canvas

//dino
let dinoWidth=80;
let dinoHeight=90;
let dinoX=50;
let dinoY=boardHeight-dinoHeight; //altura del tablero - altura del dinosaurio
let dinoImg;

let dino={
    x : dinoX,
    y : dinoY,
    width : dinoWidth,
    height : dinoHeight,
}

//cactus
let cactusArray=[];
let cactus1Width=34;
let cactus2Width=60;
let catusHeight=70;
let cactusX=700;
let cactusY=boardHeight-catusHeight;
let cactus1Img;
let cactus2Img;

//fisicas
let velocidadX= -8;


window.onload = function() //
{
    board = document.getElementById("board");
    board.height=boardHeight;
    board.width=boardWidth;

    context = board.getContext("2d"); //se usa para dibujar en el board

    dinoImg= new Image();
    dinoImg.src = "../Imagenes/Dino.gif";
    dinoImg.onload = function(){
        context.drawImage(dinoImg, dino.x, dino.y, dino.width , dino.height);
    }

    cactus1Img = new Image();
    cactus1Img.src = "../Imagenes/Cactus.gif";

    cactus2Img = new Image();
    cactus2Img.src = "../Imagenes/TresCactus.gif";
    
    requestAnimationFrame(actualizar);
    setInterval(crearCactus, 1000); //llama a la funcion crear cactus cada 1000 milisegundos = 1 segundo
}

function actualizar()  //funcion que dibuja cada frame
{
    requestAnimationFrame(actualizar);

    context.clearRect(0,0,boardWidth,boardHeight); //elimina los movimientos anteriores de cada elemento
    
    context.drawImage(dinoImg, dino.x, dino.y, dino.width , dino.height);

    for (let i=0 ;i <cactusArray.length; i++)
    {
        let cactus=cactusArray[i];
        context.drawImage(cactus.img , cactus.x , cactus.y , cactus.width , cactus.height);
        cactus.x+=velocidadX;
    }
}

function crearCactus()
{
    let cactus={
        img : null,
        x : cactusX,
        y : cactusY,
        width : null,
        height : catusHeight
    }
    //asignamos el valor null a img y width ya que dependen de cada tipo de cactus

    let crearCactusRand = Math.random(); //devuelve funciones entre 0 y 1
    
    if (crearCactusRand>0.80) 
    {
        cactus.img=cactus2Img;
        cactus.width=cactus2Width;
        cactusArray.push(cactus);
    }
    else if (crearCactusRand>0.50) 
    {
        cactus.img=cactus1Img;
        cactus.width=cactus1Width;
        cactusArray.push(cactus);
    }
}