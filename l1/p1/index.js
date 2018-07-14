
let getUserName = () => {
let ch;
    let input = prompt ("User Name", "");
    let arr = input.split('');
    console.log(arr);

    // Проверка массива на наличие чисел 
    
    let check = arr.every((item, i, arr) => {
        if (isNaN(item)) {
            return true;
        } else {
            return false;
        }
    });
    //alert(check)


    if (check === true) {
        document.write(arr.reverse().join(''))
    } else {
        // Создаем новую строку и меняем ей регистр в зависимости от индекса
        let newStr = '';
        for (let i = 0; i < input.length; i++) {
            if (i %2 === 0) {
              newStr += input[i].toUpperCase();
            }
            else {
              newStr += input[i].toLowerCase();
            }
        }      
             return document.write(newStr);
        }
        }
getUserName();

