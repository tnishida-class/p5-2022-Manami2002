// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

  function setup(){
    createCanvas(windowWidth, windowHeight); 
  }
  
  function windowResized(){ 
    resizeCanvas(windowWidth, windowHeight); 
  }
  
  function draw(){
    background(160, 192, 255);
  }
  
  count = 0;
  cycle = 150;


function draw(){
  background(160, 192, 255);
  count= (count+1)%cycle;
console.log(count);
    // BLANK[1]
 let size =count;
  ellipse(width / 2, height / 2, size);
  
  if(keyIsDown(UP_ARROW)){
    count=count+10
    }
 
  
}
