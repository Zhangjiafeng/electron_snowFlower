const electron=require('electron');
const area=electron.remote.screen.getPrimaryDisplay().workAreaSize;
class SnowFlower{
    constructor(){
        this._img=document.createElement("img");
        this._img.src="./assets/snowflower.png";
        this.moveBindThis=this.move.bind(this)
        this.moveBindThis();
        this._img.width=Math.random()*13+3;
        this.x=Math.random()*area.width;
        this.y=-20;
        this.rotation=0;
        this.speedRotation=(Math.random()+1)*(Math.random()>0.5?-1:1);
        this.speedX=(Math.random()*2.5)*(Math.random()>0.5?-1:1);
        this.speedY=Math.random()*2+1;
    }

    get img(){
        return this._img
    }

    move(){
        this.x+=this.speedX;
        this.y+=this.speedY;
        this.rotation+=this.speedRotation;
        this._img.style.transform= `translate(${this.x}px,${this.y}px) rotate(${this.rotation}deg)`;
        if(this.x>area.width||this.x<0||this.y>area.height){
            this._img.parentNode.removeChild(this._img)
        }else{
            requestAnimationFrame(this.moveBindThis);
        }
    }
}
module.exports = SnowFlower;
