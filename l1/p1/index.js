
let getUserName = () => {
let ch;
    let input = prompt ("User Name", "");
    let arr = input.split('');
    console.log(arr);
    arr.forEach((item, i, arr) => {
        if (isNaN(item)){
            ch = true;
        } else {
           ch = false;
        }
    });
    if (ch === true) {
        document.write(arr.reverse())
    } else {
        document.write(arr + '   sd')
    }
}
getUserName();