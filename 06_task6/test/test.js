const TestResult = require("coderslab_fertestlibs/lib/TestResult");
const SingleTestResult = require("coderslab_fertestlibs/lib/SingleTestResult");
const SimpleError = require("coderslab_fertestlibs/lib/SimpleError");
const EsprimaHelper = require("coderslab_fertestlibs/lib/EsprimaHelper");
const Helper = require("coderslab_fertestlibs/lib/Helper");

const puppeteer = require("puppeteer");
const path = require("path");
const assert = require('assert');
const rewire = require('rewire');
const sinon = require("sinon");
const spy = sinon.spy(console, "log");

//PREPARE
let testName = Helper.createTestName("fero", 2, __dirname);
console.log("===========");
console.log(testName);
console.log("===========");
let testResult = new TestResult(testName);
let browser, page;
let subTests = [];

describe("", () => {

    before(async () => {
        browser = await puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });
        const context = await browser.createIncognitoBrowserContext();
        page = await context.newPage();
        let filePath = path.join(__dirname, "../index.html");
        await page.goto(`file://${filePath}`);

    });

    after(async () => {
        await browser.close();
        subTests.forEach(t => testResult.addTest(t));
        testResult.send();
    });


    let test1 = new SingleTestResult(
        "Poprawne pobranie i wstawieni informacji o filmach do odpowiednich elementów",
        "",
        4);
    subTests.push(test1);
    it(test1.testName, async () => {

        await page.waitForSelector("#movies li");

        let points = await page.evaluate(() => {

            let expectedValues = [
                {"title": "Leon Zawodowiec", "year": 1994},
                {"title": "Dwunastu gniewnych ludzi", "year": 1957},
                {"title": "Siedem", "year": 1995},
                {"title": "Psychoza", "year": 1960}
            ];

            let points = 0;
            document.querySelectorAll("#movies li").forEach((el, index) => {
                if (el.querySelector("h2").innerText === expectedValues[index].title) {
                    points += 0.5;
                }
                if (el.querySelector("h3").innerText == expectedValues[index].year) {
                    points += 0.5;
                }
            });
            return points;
        });

        test1.points = points;
        assert.equal(test1.points, 4);

    });


});
