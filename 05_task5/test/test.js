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
        "Po kliknięciu pierwszego przycisku, do listy został dopisany nowy produkt - chleb",
        "",
        1);
    subTests.push(test1);
    it(test1.testName, async () => {
        await page.click(`button#button-1`);
        let newElem = await page.evaluate(() => document.querySelector("#shopping-list :last-child").innerText.toLowerCase());
        assert.equal(newElem, `chleb`);
        test1.points = 1;

    });

    let test2 = new SingleTestResult(
        "Po kliknięciu drugiego przycisku, z listy jest usuwany ostatni element",
        "",
        1);
    subTests.push(test2);
    it(test2.testName, async () => {
        let elemsCountBefore = await page.evaluate(() => document.querySelector("#shopping-list").children.length);
        await page.click(`button#button-2`);
        let elemsCountAfter = await page.evaluate(() => document.querySelector("#shopping-list").children.length);
        assert.equal(elemsCountAfter, elemsCountBefore-1);
        test2.points = 1;

    });

    let test3 = new SingleTestResult(
        "Po kliknięciu trzeciego przycisku na końcu listy jest dodawany nowy produkt, który jest klonem drugiego produktu",
        "",
        1);
    subTests.push(test3);
    it(test3.testName, async () => {
        await page.click(`button#button-3`);
        let newElem = await page.evaluate(() => document.querySelector("#shopping-list :last-child").innerText.toLowerCase());
        assert.equal('mąka', newElem);
        test3.points = 1;

    });


});
