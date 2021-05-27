class Shoot{

	constructor(x,y){
		this.x = x
		this.y = y
		this.r = 5
		this.d = this.r*2
		this.removeE = false
	}

	display(){
		noStroke()
		fill(255,0,255)
		ellipse(this.x,this.y,this.d,this.d)
	}

	move(){
		this.y = this.y - 40
	}

	collitionHits(enemy){
		let d = dist(this.x, this.y, enemy.x, enemy.y)
		if(d < this.r + enemy.collition) {
			return true
		}else{
			return false
		}
	}

	remove(){
		this.removeE = true
	}
}
