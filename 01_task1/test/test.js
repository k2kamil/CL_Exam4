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
let concatArray = app.__get__('concatArray');


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


    let test1 = new SingleTestResult(
        "Poprawne łączenie tablic",
        "",
        2);
    subTests.push(test1);
    it(test1.testName, async () => {
        let arr1 =[1,3];
        let arr2 = [3,5];
        let resultArray = [1,3,3,5];

        let result = concatArray(arr1,arr2);
        assert(result instanceof Array);
        test1.points = 1;

        assert.deepEqual(resultArray, result);
        test1.points += 1;
    })

});
