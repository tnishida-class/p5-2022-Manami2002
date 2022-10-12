// チェッカー
function setup() {
  createCanvas(400, 400);
  noStroke();
  
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      
      rect(i*20, j*20,20,20);
      if((i+j)%2==1 ) {
        fill(196);
      }
      else{
        fill(256);
      } }
  }
}

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
