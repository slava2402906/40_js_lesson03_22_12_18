// var userStr = prompt(`Enter word:`);

// var testStr = `word`;
// var userString = `WoRd`;
// var isStatus = true;
//
// for (var i = 0; i < testStr.length; i++) {
//     if (testStr[i].toLowerCase() !== userString[i].toLowerCase()) {
//         console.log(`------`, userString[i]);
//         isStatus = false;
//         break;
//     }
// }
//
// if (isStatus) {
//     alert(`Строки равны`);
// }

// var myArr = [3, 5, 7, 9, 11];
// var tmpArr = [];
//
// for (var i = 1; i < myArr.length; i++) {
//     tmpArr.push(myArr[i]);
// }
// myArr = tmpArr;
// console.log(myArr);

// var arrFirst = [3, 5, 7, 9, 11];
// var arrSecond = [2, 4, 6, 10, 12];
// var arrTmp = [];
//
// for (var i = 0; i < arrFirst.length; i++) {
//     arrTmp.push(arrFirst[i]);
// }
//
// for (var i = 0; i < arrSecond.length; i++) {
//     arrTmp.push(arrSecond[i]);
// }
//
// console.log(arrTmp);

var str = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda at cumque ducimus labore, possimus quae
    quia quos repudiandae temporibus! Assumenda cupiditate fuga, harum magni maxime minima odit perspiciatis possimus.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda at cumque ducimus labore, possimus quae
    quia quos repudiandae temporibus! Assumenda cupiditate fuga, harum magni maxime minima odit perspiciatis possimus.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda at cumque ducimus labore, possimus quae
    quia quos repudiandae temporibus! Assumenda cupiditate fuga, harum magni maxime minima odit perspiciatis possimus.`;

// var testStr = str.substr(0, 200);
// var tmpArr = [];
//
// for (var i = 0; i < testStr.length; i++) {
//     tmpArr.push(str[i]);
// }
//
// var tmpStr = ``;
// for (var i = 0; i < tmpArr.length; i++) {
//     tmpStr += tmpArr[i];
// }
//
// console.log(tmpStr);

var subStr = str.split(` `).splice(0, 10).join(` `) + `...`;
console.log(subStr);

