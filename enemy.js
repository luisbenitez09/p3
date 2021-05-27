class Enemy{
	constructor(x,y,image1, image2, points){
		this.x = x
		this.y = y
		this.h = 50
		this.w = 50
		this.life = true
		this.image1 = image1
		this.image2 = image2
		this.changeimg = 0
		this.points = points
		this.collition = 20
		this.stepX = 16
		this.shootInterval = int(random(4.0,12.0))
		this.counter = 0
	}

	display(){
		if(this.life){
			if(this.changeimg === 0){
				image(this.image1,this.x,this.y,this.w,this.h)
			}
			if(this.changeimg === 1){
				image(this.image2,this.x,this.y,this.w,this.h)
			}
		}

		let ms = millis()
		if(ms >= this.shootInterval*1000) {
			this.attack()
			this.shootInterval+=this.shootInterval
		}

	}

	move(){
		this.x = this.x + this.stepX

		if(this.changeimg === 0){
			this.changeimg = 1
		}else if(this.changeimg === 1){
			this.changeimg = 0
		}
	}

	down(){
		this.stepX = -this.stepX
		this.y = this.y + this.h
	}

	reachedBottom() {
		if (this.y + this.h/2 >= height - 10) {
			return true
		} else {
			return false
		}
	}

	attack() {
		let shoot = new EnemyShoot(this.x + (this.w/2), this.y)
		attacks.push(shoot)
	}

}
