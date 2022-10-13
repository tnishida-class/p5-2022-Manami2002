// チェッカー
function setup() {
  createCanvas(400, 400);
  let size = width/8;
  noStroke();
  
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
    
      if((i+j)%2==0) {
        fill(255);
      }
      else{
        fill(160);
      } 
      rect(i*size,j*size,size*(i+1),size*(j+1));

     if(j<3&&(i+j)%2==1){
      fill(255,0,0);
      ellipse(size*(i+0.5),size*(j+0.5),46);
    }
      if(j>4&&(i+j)%2==1){
        fill(9,10,23);
        ellipse(size*(i+0.5),size*(j+0.5),46);
      }
    }
      
  }
}

      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
