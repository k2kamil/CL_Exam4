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
        await page.addScriptTag({url: './app.js'});

    });

    after(async () => {
        await browser.close();
        subTests.forEach(t => testResult.addTest(t));
        testResult.send();
    });


    let test1 = new SingleTestResult(
        "Znalezione elementy dla pkt. 1 i zwrócone prawidłowe dane z metody",
        "",
        2);
    subTests.push(test1);
    it(test1.testName, async () => {

        const tagExpectedEl = ['DIV', 'LI', 'P', 'DIV', 'LI', 'LI', 'ARTICLE', 'H1', 'DIV', 'P'];
        const resultFnEl = await page.evaluate(() => getTag(task1El));
        assert.deepEqual(tagExpectedEl, resultFnEl);
        test1.points = 2;
    })

    let test2 = new SingleTestResult(
        "Znalezione elementy dla pkt. 2 i zwrócone prawidłowe dane z metody",
        "",
        2);
    subTests.push(test2);
    it(test2.testName, async () => {

        const tagExpectedEl = ['sample_class', 'sample_class_3'];
        const resultFnEl = await page.evaluate(() => getClass(task2El));
        assert.deepEqual(tagExpectedEl, resultFnEl);
        test2.points = 2;
    })

    let test3 = new SingleTestResult(
        "Znalezione elementy dla pkt. 3 i zwrócone prawidłowe dane z metody",
        "",
        2);
    subTests.push(test3);
    it(test3.testName, async () => {

        const tagExpectedEl = ['Test 1\nTest 2\nTest 3\nTest 4\nTest 5', 'Test 1\nTest 2\nTest 3\nTest 4\nTest 5'];
        const resultFnEl = await page.evaluate(() => getInnerText(task3El));
        assert.deepEqual(tagExpectedEl, resultFnEl);
        test3.points = 2;
    })

    let test4 = new SingleTestResult(
        "Znalezione elementy dla pkt. 4 i zwrócone prawidłowe dane z metody",
        "",
        2);
    subTests.push(test4);
    it(test4.testName, async () => {

        const tagExpectedEl = [ 'www.google.com', 'www.yahoo.com', 'www.onet.com' ];
        const resultFnEl = await page.evaluate(() => getAddress(task4El));
        assert.deepEqual(tagExpectedEl, resultFnEl);
        test4.points = 2;
    })

    let test5 = new SingleTestResult(
        "Znalezione elementy dla pkt. 5 i zwrócone prawidłowe dane z metody",
        "",
        2);
    subTests.push(test5);
    it(test5.testName, async () => {

        const tagExpectedEl = [ 'A', 'DIV', 'DIV', 'UL', 'ARTICLE', 'DIV' ];
        const resultFnEl = await page.evaluate(() => getTag(task5El));
        assert.deepEqual(tagExpectedEl, resultFnEl);
        test5.points = 2;
    })

});
