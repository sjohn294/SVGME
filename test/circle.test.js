const Circle = require("../lib/Circle");

describe('Circle Class Tests', () => {
test("should create blue circle", () => {
    const svgString=`<circle cx="150" cy="150" r="80" stroke="black" stroke-width="3" fill="blue"/>`;
    const circle = new Circle ("text", "textcolor", "blue");
    expect(circle.buildShape()).toEqual(svgString);
});

test("should create red circle", () => {
    const svgString = `<circle cx="150" cy="150" r="80" stroke="black" stroke-width="3" fill="red"/>`;
    const circle = new Circle("text", "textcolor", "red");
    expect(circle.buildShape()).toEqual(svgString);
});

test("should render SVG with text", () => {
    const circle = new Circle("Sample Text", "white", "green");
    const renderedSVG = circle.render();
    expect(renderedSVG.includes("Sample Text")).toBeTruthy();
    expect(renderedSVG.includes("fill=\"white\"")).toBeTruthy();
});
});