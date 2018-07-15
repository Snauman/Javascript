var renderingStyle='2d'

let canvas=document.getElementById('canvas');
var map=new Map(canvas);
map.init(renderingStyle);

let soldier = new Soldier('Bob', 3, 6, canvas, renderingStyle)
soldier.draw()
let soldier2 = new Soldier('Robert', 8, 3, canvas, renderingStyle)
soldier2.draw()
//soldier.showMove()
//soldier.removeMove()

document.addEventListener('click',function(e){
    let caseX=Math.floor(getCoords(canvas,e).x/100)
    let caseY = Math.floor(getCoords(canvas, e).y / 100)
    console.log("x: "+caseX+" y: "+caseY);
    
   checkUnit(soldier,caseX,caseY)
    checkUnit(soldier2, caseX, caseY)
  
    console.log("X: "+caseX+" y: "+caseY);
    
})


function checkUnit(unit,cx,cy){
    if (unit.selected) {
        unit.unselect(map)
        if (cx == unit.xIndex - unit.move) {
            unit.changeCase(unit.xIndex - unit.move, unit.yIndex, map)
        }
        if (cx == unit.xIndex + unit.move) {
            unit.changeCase(unit.xIndex + unit.move, unit.yIndex, map)
        }
        if (cy == unit.yIndex - unit.move) {
            unit.changeCase(unit.xIndex, unit.yIndex - unit.move, map)
        }
        if (cy == unit.yIndex + unit.move) {
            unit.changeCase(unit.xIndex, unit.yIndex + unit.move, map)
        }

        unit.draw()
        return
    }

    if (cx == unit.xIndex && cy == unit.yIndex) {
        unit.select()
    } else {
        unit.unselect(map)
    }
}

function getCoords(el, event) {

    switch(renderingStyle){
        case '2d':
            var ox = el.scrollLeft - el.offsetLeft,
                oy = el.scrollTop - el.offsetTop
            while (el = el.offsetParent) {
                ox += el.scrollLeft - el.offsetLeft
                oy += el.scrollTop - el.offsetTop

            }
            return { x: event.clientX + ox, y: event.clientY + oy }
        break

        case '3d':
            var ox = el.scrollLeft - el.offsetLeft,
                oy = el.scrollTop - el.offsetTop
            while (el = el.offsetParent) {
                ox += el.scrollLeft - el.offsetLeft
                oy += el.scrollTop - el.offsetTop

            }
            return { x: event.clientX + ox+400, y: (event.clientY + oy)/2 }
        break
    }
   
}