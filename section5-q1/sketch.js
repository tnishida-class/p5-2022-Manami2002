// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 70, 70, 128,0,128);
}


 
function balloon(t, x, y,cr,cg,cb){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 5;
  fill(cr,cg,cb);
  rect(x, y, w + p * 3, h + p * 3);
  
  fill(255);
  text(t+5, x+p, h + y+p);
  
  fill(cr,cg,cb);
  triangle(x,y,x+w/7,y-25,x+w/3,y);
  
}

