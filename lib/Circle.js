const Shape = require("./Shapes")


class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text,textColor)
        this.shapeColor=shapeColor
    }
    buildShape(){
        return `<circle cx="150" cy="150" r="80" stroke="black" stroke-width="3" fill="${this.shapeColor}"/>`
    }
}
module.exports = Circle