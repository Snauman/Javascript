function Character(name,xIndex,yIndex,canvas,style){
    let context = canvas.getContext('2d')

    this.name=name
    this.xIndex=xIndex
    this.yIndex=yIndex
    this.attack=0
    this.defense=0
    this.move=1
    this.selected=false
    this.draw=function(){
        
        switch(style){
            case '2d':
                context.fillStyle = 'black'
                context.fillRect(this.xIndex * 100, this.yIndex * 100, 100, 100)
                break;
            case '3d':

                context.setTransform(1, 0, 0, 0.5, 400, 0);
                context.rotate(20 * Math.PI / 180)
                context.fillStyle = 'black'
                context.fillRect(this.xIndex * 100, this.yIndex * 100, 100, 100)
                context.rotate(-20 * Math.PI / 180)
                context.setTransform(1, 0, 0, 1, 0, 0)
                //context.transform(1, 0, 0, 1, 0, 0);


                break;
        }
        
    }

    this.showMove=function(){


        switch (style) {
            case '2d':

                if ((this.xIndex - this.move) * 100 >= 0) {
                    context.fillStyle = 'blue'
                    context.fillRect((this.xIndex - this.move) * 100, this.yIndex * 100, 100, 100)
                }

                if ((this.yIndex - this.move) * 100 >= 0) {
                    context.fillStyle = 'blue'
                    context.fillRect(this.xIndex * 100, (this.yIndex - this.move) * 100, 100, 100)
                }

                if ((this.xIndex + this.move) * 100 < 1000) {
                    context.fillStyle = 'blue'
                    context.fillRect((this.xIndex + this.move) * 100, this.yIndex * 100, 100, 100)
                }


                if ((this.yIndex + this.move) * 100 < 1000) {
                    context.fillStyle = 'blue'
                    context.fillRect(this.xIndex * 100, (this.yIndex + this.move) * 100, 100, 100)
                }
                break;
            case '3d':

                context.setTransform(1, 0, 0, 0.5, 400, 0);
                context.rotate(20 * Math.PI / 180)
                if ((this.xIndex - this.move) * 100 >= 0) {
                    context.fillStyle = 'blue'
                    context.fillRect((this.xIndex - this.move) * 100, this.yIndex * 100, 100, 100)
                }

                if ((this.yIndex - this.move) * 100 >= 0) {
                    context.fillStyle = 'blue'
                    context.fillRect(this.xIndex * 100, (this.yIndex - this.move) * 100, 100, 100)
                }

                if ((this.xIndex + this.move) * 100 < 1000) {
                    context.fillStyle = 'blue'
                    context.fillRect((this.xIndex + this.move) * 100, this.yIndex * 100, 100, 100)
                }


                if ((this.yIndex + this.move) * 100 < 1000) {
                    context.fillStyle = 'blue'
                    context.fillRect(this.xIndex * 100, (this.yIndex + this.move) * 100, 100, 100)
                }
                context.rotate(-20 * Math.PI / 180)
                context.setTransform(1, 0, 0, 1, 0, 0)
                //context.transform(1, 0, 0, 1, 0, 0);


                break;
        }
    }

    this.select=function(){
        this.selected=true
        this.showMove();
    }

    this.unselect = function (map) {
        this.selected = false
        this.removeMove(map);
    }

    this.changeCase=function(nX,nY,map){
        switch (style) {
            case '2d':
                context.fillStyle = 'black'
                //context.clearRect(this.xIndex * 100, this.yIndex * 100, 100, 100)
                map.drawCase(this.xIndex*100,this.yIndex*100)
                break;
            case '3d':

                context.setTransform(1, 0, 0, 0.5, 400, 0);
                context.rotate(20 * Math.PI / 180)
                
                context.fillStyle = 'black'
                //context.clearRect(this.xIndex * 100, this.yIndex * 100, 100, 100)
                map.drawCase(this.xIndex * 100, this.yIndex * 100)
                context.rotate(-20 * Math.PI / 180)
                context.setTransform(1, 0, 0, 1, 0, 0)
                //context.transform(1, 0, 0, 1, 0, 0);


                break;
        }
        this.xIndex=nX
        this.yIndex=nY
        
    }

    this.removeMove=function(map){
        switch (style) {
            case '2d':

                if ((this.xIndex - this.move) * 100 >= 0) {
                    context.clearRect((this.xIndex - this.move) * 100, this.yIndex * 100, 100, 100)
                    map.drawCase((this.xIndex - this.move) * 100,this.yIndex*100)
                    
                }

                if ((this.yIndex - this.move) * 100 >= 0) {
                    context.clearRect(this.xIndex * 100, (this.yIndex - this.move) * 100, 100, 100)
                    map.drawCase(this.xIndex * 100, (this.yIndex - this.move) * 100, 100, 100)
                }

                if ((this.xIndex + this.move) * 100 < 1000) {
                    context.clearRect((this.xIndex + this.move) * 100, this.yIndex * 100, 100, 100)
                    map.drawCase((this.xIndex + this.move) * 100, this.yIndex * 100, 100, 100)
                }


                if ((this.yIndex + this.move) * 100 < 1000) {
                    context.clearRect(this.xIndex * 100, (this.yIndex + this.move) * 100, 100, 100)
                    map.drawCase(this.xIndex * 100, (this.yIndex + this.move) * 100, 100, 100)
                }
                break;
            case '3d':

                context.setTransform(1, 0, 0, 0.5, 400, 0);
                context.rotate(20 * Math.PI / 180)
                if ((this.xIndex - this.move) * 100 >= 0) {
                    context.clearRect((this.xIndex - this.move) * 100, this.yIndex * 100, 100, 100)
                    map.drawCase((this.xIndex - this.move) * 100, this.yIndex * 100, 100, 100)
                }

                if ((this.yIndex - this.move) * 100 >= 0) {
                    context.clearRect(this.xIndex * 100, (this.yIndex - this.move) * 100, 100, 100)
                    map.drawCase(this.xIndex * 100, (this.yIndex - this.move) * 100, 100, 100)
                }

                if ((this.xIndex + this.move) * 100 < 1000) {
                    context.clearRect((this.xIndex + this.move) * 100, this.yIndex * 100, 100, 100)
                    map.drawCase((this.xIndex + this.move) * 100, this.yIndex * 100, 100, 100)
                }


                if ((this.yIndex + this.move) * 100 < 1000) {
                    context.clearRect(this.xIndex * 100, (this.yIndex + this.move) * 100, 100, 100)
                    map.drawCase(this.xIndex * 100, (this.yIndex + this.move) * 100, 100, 100)
                }
                context.rotate(-20 * Math.PI / 180)
                context.setTransform(1, 0, 0, 1, 0, 0)
                //context.transform(1, 0, 0, 1, 0, 0);


                break;
        }
    }

}

function Soldier(name,xIndex,yIndex,canvas,style){
    Character.call(this,name,xIndex,yIndex,canvas,style)
    this.attack=1
    this.defense=1
}

