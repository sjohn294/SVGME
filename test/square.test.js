const Square = require("../lib/Square");

describe('Square Class Tests', () => {
test("should create blue square", () => {
    const svgString=`<rect width="120" height="120" fill="blue"/>`;
    const square = new Square ("text", "textcolor", "blue");
    expect(square.buildShape()).toEqual(svgString);
});

test("should create red square", () => {
    const svgString = `<rect width="120" height="120" fill="red"/>`;
    const square = new Square("text", "textcolor", "red");
    expect(square.buildShape()).toEqual(svgString);
});

test("should render SVG with text", () => {
    const square = new Square("Sample Text", "white", "green");
    const renderedSVG = square.render();
    expect(renderedSVG.includes("Sample Text")).toBeTruthy();
    expect(renderedSVG.includes("fill=\"white\"")).toBeTruthy();
});
});
