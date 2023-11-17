const fs = require('fs');
// const readline = require('readline');
const Square = require('./lib/Square');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const inquirer = require('inquirer')
const prompt = inquirer.createPromptModule()
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
function askUser() {
    prompt([
        {
            type: "list",
            name: "shape",
            message: "Choose a shape (circle, triangle, square):",
            choices: ["square", "triangle", "circle"]
        },
        {
            type: "input",
            name: "text",
            message: 'Enter text (up to three characters): '
        },
        {
            type: "input",
            name: "textColor",
            message: 'Enter text color (color keyword or hexadecimal): '
        },
        {
            type: "input",
            name: "shapeColor",
            message: 'Enter shape color (color keyword or hexadecimal): '
        }
    ]).then(answers => {
        switch (answers.shape) {
            case "square":
                const square = new Square(answers.text, answers.textColor, answers.shapeColor)
                var svgShape = square.buildShape()
                var svgString = square.render() + svgShape + square.renderText() + square.renderEnd()
                break;
            case "triangle":
                const triangle = new Triangle(answers.text, answers.textColor, answers.shapeColor)
                var svgShape = triangle.buildShape()
                var svgString = triangle.render() + svgShape + triangle.renderText() + triangle.renderEnd()
                break;
            case "circle":
                const circle = new Circle(answers.text, answers.textColor, answers.shapeColor)
                var svgShape = circle.buildShape()
                var svgString = circle.render() + svgShape + circle.renderText() + circle.renderEnd()
                break;

            default:
                break;
        }
        fs.writeFileSync('logo.svg', svgString);
        console.log('Generated logo.svg');
    })
}
askUser();

// rl.question('Enter text (up to three characters): ', (text) => {
//     logoText = text.substring(0, 3);  // Ensuring text is up to 3 characters

//     rl.question('Enter text color (color keyword or hexadecimal): ', (color) => {
//         textColor = color;

//         rl.question('Choose a shape (circle, triangle, square): ', (chosenShape) => {
//             switch (chosenShape.toLowerCase()) {
//                 case 'circle':
//                     shape = Circle;
//                     break;
//                 case 'triangle':
//                     shape = Triangle;
//                     break;
//                 case 'square':
//                     shape = Square;
//                     break;
//                 default:
//                     console.log('Invalid shape choice. Exiting.');
//                     rl.close();
//                     return;
//             }

//             rl.question('Enter shape color (color keyword or hexadecimal): ', (color) => {
//                 shapeColor = color;

//                 const logo = new shape(logoText, textColor, shapeColor);
//                 const svgContent = logo.render();

//                 fs.writeFileSync('logo.svg', svgContent);
//                 console.log('Generated logo.svg');
//                 rl.close();
//             });
//         });
//     });
// });
