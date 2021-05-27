class EnemyShoot{

	constructor(x,y){
		this.x = x
		this.y = y
		this.r = 5
		this.d = this.r*2
		this.removeE = false
	}

	display(){
		noStroke()
		fill(255,255,0)
		ellipse(this.x,this.y,this.d,this.d)
	}

	move(){
		this.y = this.y + 10
	}

	collitionHits(player){
		let d = dist(this.x, this.y, player.x, player.y)
		if(d < this.r + player.collition) {
			console.log(d)
			return true
		}else{
			return false
		}
	}

	remove(){
		this.removeE = true
	}
}
