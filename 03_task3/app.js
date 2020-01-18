// // 1
const task1EL = document.querySelectorAll('.sample_class');

console.log(task1EL);

function getTag(elements) {
    task1El.forEach(el => {
        let arr1 = [];
        let tag = el.getTags();

        arr1.push(tag);
    });

    return arr1;
};


//2
const task2EL = document.getElementById('sample_id');

console.log(task2EL);

function getClass(element) {
    let claName = task2EL.className;
    console.log(claName);

    let newArr = [];
    newArr.push(claName);

    return newArr;
}


//3
const task3EL = document.querySelectorAll('.sample_class_2 > li');
console.log(task3EL);

function getInnerText(elements){
    task3EL.forEach(li => {
       let liInner = li.innerText;
        console.log(liInner);

        let arr = [];
        arr.push(liInner);

        return arr;
    });
}


//4
let task4EL = document.querySelectorAll('a');
console.log(task4EL);
function getAddress(elements){
    task4EL.forEach(a => {
       let myArr = [];
       let aHref = a.href;

       myArr.push(aHref);

       return myArr;
    });
}

//5
let task5EL = document.querySelector('.sample_class_3').children;
console.log(task5EL);

function getTags5(elements) {
    task5EL.forEach(tag => {
       let everyTag = tag.getTags();
    });
}
