canvas= new fabric.Canvas("mycanvas");
x= 100;
y= 100;
width= 30;
height= 30;
Player = "";
Blockimage= "";
addplayer();

function addplayer(){
    fabric.Image.fromURL("player (1).png", function(image){
        Player= image;
        Player.scaleToWidth(50);
        Player.scaleToHeight(100);
       Player.set({
           top : y, left: x
           
       })
       canvas.add(Player); }) 
}

function addBlocks(Blocks){
    fabric.Image.fromURL(Blocks, function(images){
        Blockimage= images;
           Blockimage.scaleToWidth(width);
           Blockimage.scaleToHeight(height);
           Blockimage.set({
               top : y, left: x

           })
           canvas.add(Blockimage);})
  
}

