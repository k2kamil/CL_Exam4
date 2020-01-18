document.addEventListener('DOMContentLoaded', function () {
    let btns = document.querySelectorAll('button');

    let div = document.getElementById('container');

    console.log(btns);

    btns.forEach(btn => {
        btn.addEventListener('click', function(){
            let dataText = btn.dataset.text;

            console.log(dataText);

            div.innerText = dataText;
        })
    })


});