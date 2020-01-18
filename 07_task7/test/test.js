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

let app = rewire("../app.js");


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
        "Stworzenie klasy Product, która posiada odpowiednie atrybuty i metody",
        "",
        3
    )
    subTests.push(test1);
    it(test1.testName, async () => {
        let Product;
        try {
            Product = app.__get__('Product');
        } catch (e) {
            throw new SimpleError("Brak klasy Product")
        }
        test1.points = 1;
        let testProduct = new Product("test title", "test author");
        assert.deepEqual(testProduct.title, "test title");
        assert.deepEqual(testProduct.author, "test author");
        test1.points += 1;

        if( testProduct.order === undefined){
            test1.points += 0.5;
        }else{
            throw new SimpleError("Metoda order nie powinna być w tej klasie")
        }

        if( testProduct.download === undefined){
            test1.points += 0.5;
        }else{
            throw new SimpleError("Metoda download nie powinna być w tej klasie")
        }

    })


    let test2 = new SingleTestResult(
        "Stworzenie klasy Book, która posiada odpowiednie atrybuty i metody",
        "",
        3
    )
    subTests.push(test2);
    it(test2.testName, async () => {
        let Product, Book;
        try {
            Product = app.__get__('Product');
            Book = app.__get__('Book');
        } catch (e) {
            throw new SimpleError("Brak której z klas: Product lub Book")
        }
        test2.points = 1;

        let testProduct = new Book("Najdłuższa noc", "Maciej Dancewicz");
        assert.deepEqual(testProduct.title, "Najdłuższa noc");
        assert.deepEqual(testProduct.author, "Maciej Dancewicz");
        test1.points += 1;

        if(typeof testProduct.order === 'function'){
            test1.points += 0.5;
        }else{
            throw new SimpleError("Brakuje metody order")
        }

        assert.deepEqual(testProduct.order(), "Podaj adres dostawy!");
        test1.points += 0.5;



    })


    let test3 = new SingleTestResult(
        "Stworzenie klasy Ebook, która posiada odpowiednie atrybuty i metody",
        "",
        3
    )
    subTests.push(test3);
    it(test3.testName, async () => {
        let Product, Ebook;
        try {
            Product = app.__get__('Product');
            Ebook = app.__get__('Ebook');
        } catch (e) {
            throw new SimpleError("Brak którejś z klas: Product lub Ebook")
        }
        test3.points = 1;

        let testProduct = new Ebook("Ciemniejsze niebo", " Ruben Eliassen");
        assert.deepEqual(testProduct.title, "Ciemniejsze niebo");
        assert.deepEqual(testProduct.author, " Ruben Eliassen");
        test3.points += 1;

        if(typeof testProduct.download === 'function'){
            test1.points += 0.5;
        }else{
            throw new SimpleError("Brakuje metody download")
        }

        assert.deepEqual(testProduct.download(), "Ściąganie... Ciemniejsze niebo");
        test1.points += 0.5;


    })


});
