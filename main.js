let num1 = Math.ceil(Math.random() * 100);
let num2 = Math.ceil(Math.random() * 100);
let num3 = Math.ceil(Math.random() * 100);
let num4 = Math.ceil(Math.random() * 100);
let num5 = Math.ceil(Math.random() * 100);
let wins = localStorage.getItem('wins');
let loses = localStorage.getItem('loses');
let circlesArray = [];
let answer = [];
let randomArray = [num1,num2,num3,num4,num5];
console.log(randomArray)

const circles = document.querySelectorAll('.circle');
const spanChose = document.querySelector('.numsOfChose span');
const iconDelete = document.querySelector('.icon-delete');
const chose_1 = document.querySelector('.rightChose .chose_1');
const chose_2 = document.querySelector('.rightChose .chose_2');
const chose_3 = document.querySelector('.rightChose .chose_3');
const chose_4 = document.querySelector('.rightChose .chose_4');
const chose_5 = document.querySelector('.rightChose .chose_5');

for (let circle of circles) {
    circle.innerHTML = circle.id;
    circle.onclick = () => {
        if (circle.classList.contains('active')){
            circle.classList.remove('active');
            let newarr = circlesArray.filter(item => item != circle.id);
            circlesArray = newarr;
            console.log(circlesArray);
        }else{
            for (let num of randomArray){
                if (circle.id == num){
                    circle.classList.add("chosed");
                    answer.push(circle.id);
                    let newarr2 = circlesArray.filter(id => id != circle.id);
                    circlesArray = newarr2;
                    circle.onclick = () => {
                        return
                    }
                    console.log(circlesArray);
                    console.log(answer);
                }else{
                    circle.classList.add('active');
                }
            }
            if (circlesArray.length == 15){
                    if (answer.length == 0){
                        alert("Вы превысили число попыток, попробуйте снова, страница обновляется...");
                        location.reload();
                    }else if (answer.length == 1){
                        alert("Вы превысили число попыток, но нашли одну цифру, поздравляю, попробуйте ещё! Страница обновляется...");
                        location.reload();
                    }else if (answer.length == 2){
                        alert("Вы превысили число попыток, но нашли две цифры, поздравляю, попробуйте ещё! Страница обновляется...");
                        location.reload();
                    }else if (answer.length == 3){
                        alert("Вы превысили число попыток, но нашли три цифры, поздравляю, попробуйте ещё! Страница обновляется...");
                        location.reload();
                    }else if (answer.length == 4){
                        alert("Вы превысили число попыток, но нашли четыре цифры, было близко, попробуйте ещё! Страница обновляется...");
                        location.reload();
                    }else if (answer.length == 5){
                        
                    }
            }else{
                circlesArray.push(circle.id);
                console.log(circlesArray);
            }

        }
        if(answer.length === 5){
            localStorage.setItem('wins', wins ? Number(wins)+1 : 0)
            alert(`Поздравляю, вы выиграли! Счётчик побед - ${wins} Страница перезагружается...`);
            location.reload();
        }
    }
}



iconDelete.onclick = () => {
    circlesArray = [];
    answer = [];
    for (let circle of circles){
        circle.classList.remove('active');
        circle.classList.remove('chosed');
    }
    console.log(circlesArray);
}

setInterval(() => {
    spanChose.innerHTML = circlesArray.length;
    chose_1.innerHTML = answer[0] ? answer[0] : "**";
    chose_2.innerHTML = answer[1] ? answer[1] : "**";
    chose_3.innerHTML = answer[2] ? answer[2] : "**";
    chose_4.innerHTML = answer[3] ? answer[3] : "**";
    chose_5.innerHTML = answer[4] ? answer[4] : "**";
    if (chose_1 == "**"){
        chose_1.classList.remove('active');
    }else{
        chose_1.classList.add('active');
    }
}, 1);
