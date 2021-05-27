class Player{
	constructor(){
		this.x = width/2;
		this.y = height - 10;
		this.width = 60;
		this.height = 10;
		this.stepX = 0;
		this.collition = 30
	}

	display(){
		fill(0,255,0);
		noStroke();
		rect(this.x,this.y,this.width,this.height)
		rect(this.x +20,this.y-20,20,20)

	}

	move(){
		this.x += this.stepX * 10
	}

	setDir(dir){
		this.stepX = dir
	}



}
