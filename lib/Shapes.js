class Shape {
    constructor(text, textColor) {
        this.textColor = textColor
        this.text = text
    }

    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="200" width="300">
        
         `
    }
    renderText(){
        return `<text x="50" y="100" fill="${this.textColor}" font-size="24" font-family="Arial" text-anchor="middle">${this.text}</text>`
    }
renderEnd(){
return "</svg>"
}
   
}
module.exports = Shape
