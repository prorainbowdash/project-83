var mouse_position="empty";
var last_x,last_y ;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
colour="#80c9f2";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(_e){
    mouse_position="mouseDown";
}



canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
  var currentX=e.clientX-canvas.offsetLeft;
  var currentY=e.clientY-canvas.offsetTop;

  if (mouse_position=="mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle=colour;
      ctx.lineWidth=1;
      console.log("last_x="+last_x+" last_y"+last_y);
      ctx.moveTo(last_x,last_y);
      console.log("currentX="+currentX+" currentY"+currentY);
        ctx.lineTo(currentX,currentY);
      ctx.stroke();
  }
last_x=currentX;
last_y=currentY;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(_e){
    mouse_position="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(_e){
    mouse_position="mouseleave";
}

function clear_space(){
  ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}