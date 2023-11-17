const Shape = require("./Shapes")

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text,textColor)
        this.shapeColor = shapeColor
    }
    buildShape(){
        return `<polygon points="150,18 244,182 56,182" fill="${this.shapeColor}"/>`
    }
}
module.exports = Triangle