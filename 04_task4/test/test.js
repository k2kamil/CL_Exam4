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

// let app = rewire("../app.js");
// let bigestSumOfTwoElements = app.__get__('bigestSumOfTwoElements');


describe("", () => {

    before(async () => {
        browser = await puppeteer.launch({
            args: ["--no-sandbox", "--disable-setuid-sandbox"]
        });
        //
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
        "Zdarzenie przypięte do przycisków i zmieniany tekst w elemencie o id container",
        "",
        2);
    subTests.push(test1);
    it(test1.testName, async () => {
        test1.points = 0;
        // let container = await page.evaluate(() => document.getElementById("container"));
        for (let i = 1; i <= 20 ; i++) {
            await page.click(`button[data-text="Tekst do guzika ${i}"]`);
            let containerText = await page.evaluate(() => document.querySelector("#container").innerText);
            assert.equal(containerText, `Tekst do guzika ${i}`);
            test1.points += 0.1;
        }
        test1.points = Math.round(test1.points);
    })



});
