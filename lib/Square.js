const Shape = require("./Shapes")
class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text,textColor)
        this.shapeColor=shapeColor
    }
    buildShape(){
        return `<rect width="120" height="120" fill="${this.shapeColor}"/>`
    }
}
module.exports = Square