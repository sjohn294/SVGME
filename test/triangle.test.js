const Triangle = require("../lib/Triangle");

describe('Triangle Class Tests', () => {
test("should create blue triangle", () => {
    const svgString=`<polygon points="150,18 244,182 56,182" fill="blue"/>`;
    const triangle = new Triangle ("text", "textcolor", "blue");
    expect(triangle.buildShape()).toEqual(svgString);
});

test("should create red triangle", () => {
    const svgString = `<polygon points="150,18 244,182 56,182" fill="red"/>`;
    const triangle = new Triangle("text", "textcolor", "red");
    expect(triangle.buildShape()).toEqual(svgString);
});

test("should render SVG with text", () => {
    const triangle = new Triangle("Sample Text", "white", "green");
    const renderedSVG = triangle.render();
    expect(renderedSVG.includes("Sample Text")).toBeTruthy();
    expect(renderedSVG.includes("fill=\"white\"")).toBeTruthy();
});
});