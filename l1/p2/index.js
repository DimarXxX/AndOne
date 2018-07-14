let gog = document.getElementById('google').onclick = () => {
    window.open('https://www.google.com');
}

let container = document.getElementById("container")
let nImg = document.getElementById('nImg').addEventListener("click", () => {
    container.innerHTML = "<img src='./img1.jpg'/>"
    // document.write("<img src='./img1.jpg'/>")
})


let Human = document.getElementById("Human").addEventListener("click", () => {
    Dima.createHuman();
})

class Xhuman {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    createHuman () {
        this.gender = "мужской"; 
        this.height = 182;
        this.weight = 74;
        console.log('Имя: ' + this.name,' Возраст: ' + this.age, ' Пол: ' + this.gender, ' Рост ' + this.height,' Вес ' +  this.weight );
        document.write('Имя: ' + this.name, ' Возраст: ' + this.age, ' Пол: ' + this.gender, ' Рост ' + this.height,' Вес ' +  this.weight );
    }
}
const Dima = new Xhuman ('Dima', 27)

