const canvas =document.querySelector("canvas")
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const c=canvas.getContext('2d');

console.log(canvas.width)

let 
	x=Math.random()*innerWidth,
	dx=(Math.random()-0.5)*10,
	y=Math.random()*innerHeight,
	dy=(Math.random()-0.5)*10,
	radius=30
	;

function animation() {
	
	requestAnimationFrame(animation);
	c.clearRect(0,0,innerWidth,innerHeight);
	c.beginPath();
	c.arc(x,y,radius,0,2*Math.PI);
	c.strokeStyle='blue';
	c.stroke();
	if(x+radius>innerWidth || x-radius<0)dx=-dx;	
	if(y+radius>innerHeight || y-radius<0)dy=-dy;	
	x+=dx,y+=dy;
}
animation()
/*
const canvas =document.querySelector("canvas")
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const c=canvas.getContext('2d');



let x=200,y=200,time=0;
function animation() {
	if(time<=200)
		requestAnimationFrame(animation);
	c.clearRect(0,0,innerWidth,innerHeight);
	c.beginPath();
	c.arc(x,50,40,0,2*Math.PI);
	c.strokeStyle='blue';
	c.stroke();
	c.font="30px Arial"
	c.fillText("hacker",x,y)
	//console.log(x,"   ",time)
	x++,y++;
	time++;
}
animation()*/