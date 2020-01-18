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
let browser;
let subTests = [];

let app = rewire("../app.js");
let bigestSumOfTwoElements = app.__get__('bigestSumOfTwoElements');


describe("", () => {

    before(async () => {
        // browser = await puppeteer.launch({
        //     args: ["--no-sandbox", "--disable-setuid-sandbox"]
        // });
        //
        // const context = await browser.createIncognitoBrowserContext();
        // let page = await context.newPage();
        // let filePath = path.join(__dirname, "../zadanie01.html");
        // await page.goto(`file://${filePath}`);
    });

    after(async () => {
        // await browser.close();
        subTests.forEach(t => testResult.addTest(t));
        testResult.send();
    });


    // TEST1
    let arr2 = [];
    let result2 = false;

    let test1 = new SingleTestResult(
        "Poprawne obliczenie dla tablicy [" + arr2 + "]",
        "",
        1);
    subTests.push(test1);
    it(test1.testName, async () => {
        let result = bigestSumOfTwoElements(arr2);
        assert.equal(result2, result);
        test1.points = 1;
    });

    // TEST2
    let arr3 = [76];
    let result3 = 76;

    let test2 = new SingleTestResult(
        "Poprawne obliczenie dla tablicy [" + arr3 + "]",
        "",
        1);
    subTests.push(test2);
    it(test2.testName, async () => {
        let result = bigestSumOfTwoElements(arr3);
        assert.equal(result3, result);
        test2.points = 1;
    });

    // TEST3
    let arr4 = [23, 45, 17, 12];
    let result4 = 68;

    let test3 = new SingleTestResult(
        "Poprawne obliczenie dla tablicy [" + arr4 + "]",
        "",
        1);
    subTests.push(test3);
    it(test3.testName, async () => {
        let result = bigestSumOfTwoElements(arr4);
        assert.equal(result4, result);
        test3.points = 1;
    })

});
