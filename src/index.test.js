import fs from "fs";

import { expect } from "chai";
import jsdom from "jsdom";

describe("Our first test", () => {
  it("Should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say Development Server Running.", () => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    const {JSDOM} = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Development Server Running.");
    //clean up
    dom.window.close();
  })
})
