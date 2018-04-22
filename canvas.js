const canvas =document.querySelector("canvas")
canvas.width=window.innerWidth-5;
canvas.height=window.innerHeight-6;
const c=canvas.getContext('2d');
class circle{
	constructor(x=0,y=0,radius=0,dx=0,dy=0){
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.dx=dx;
		this.dy=dy;
	}
	draw(){
			c.beginPath();
			c.arc(this.x,this.y,this.radius,0,2*Math.PI,false);
			c.strokeStyle='blue';
			c.stroke();
			c.fillStyle='blue';
			c.fill()
	}
	update(){
				if(this.x+this.radius>innerWidth || this.x-this.radius<0)this.dx=-this.dx;	
				if(this.y+this.radius>innerHeight || this.y-this.radius<0)this.dy=-this.dy;	
				this.x+=this.dx,this.y+=this.dy;
				this.draw();
			}
}

let circleArray=[];
for (let i = 0; i< 100; i++) {
	let 
		radius=30,
		x=Math.random()*(innerWidth-radius*2)+radius,
		dx=(Math.random()-0.5)*10,
		y=Math.random()*(innerHeight-radius*2)+radius,
		dy=(Math.random()-0.5)*10;
	circleArray.push(new circle(x,y,radius,dx,dy))
}
function animation() {
	
	requestAnimationFrame(animation);
	c.clearRect(0,0,innerWidth,innerHeight);
	for(let i=0;i<circleArray.length;i++){
		circleArray[i].update();
			}
}
animation()
