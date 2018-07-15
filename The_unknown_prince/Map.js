var grass=new Image(100,100)
grass.src='tiles/grass.png'

function Map(canvas){
    //style is either 2d or 3d
    this.currentMap=map1
    let context = canvas.getContext('2d');
    this.init=function(style){
        context.clearRect(0,0,2000,2000)
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                this.draw(style,x,y)
                
                
            }
            
        }
    }

this.drawCase=function(x,y){
    context.drawImage(grass,x,y,100,100)
}

    this.draw=function(style,x,y){
        switch(style){
            case '2d':
                this.drawCase(x*100,y*100)
                //context.strokeRect(x * 100, y * 100, 100, 100)
            break;
            case '3d':
              
                context.setTransform(1,0,0,0.5,400,0);
                context.rotate(20*Math.PI/180)
                this.drawCase(x*100, y*100)
                //context.strokeRect(x * 100, y * 100, 100, 100)
                context.rotate(-20 * Math.PI / 180)
                context.setTransform(1,0,0,1,0,0)
                //context.transform(1, 0, 0, 1, 0, 0);

              
            break;

        }
        

    }

}