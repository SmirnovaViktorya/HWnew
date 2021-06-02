/***************** TASK 1 ****************/
// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

function foo(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return [a, b, c, d, e].filter(function (el) {
                        return el != undefined;
                    })
                }
            }
        }
    }
}
console.log('TASK 1');
console.log(foo(2)(3)(4)(5)());

/***************** TASK 2 ****************/
//Пусть функция в замыкании хранит число 10. Сделайте так, 
//чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.

function fun() {
    let a = 10;
    return function () {
        return --a;
    }
}

console.log('TASK 2');
let res = fun();
console.log(res());
console.log(res());
console.log(res());
console.log(res());

/***************** TASK 3 ****************/
//Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции 
//выводил на экран сообщение о том, что отсчет окончен.


function newFun() {
    let a = 10;
    return function () {
        if (a > 0) {
            return --a;
        } else return 'Отсчет окончен';
    }
}

console.log('TASK 3');
let newRes = newFun();
for (let i = 0; i <= 10; i++) {
    console.log(newRes());
}

/***************** TASK 4 ****************/
//Дан многомерный объект произвольного уровня вложенности, например, такой:
//{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
//С помощью рекурсии выведите все примитивные элементы этого объекта на экран.

let obj = { a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } };

function getPrimitiveEl(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "object") {
            getPrimitiveEl(obj[key])
        } else console.log(obj[key]);
    }
}

console.log('TASK 4');
getPrimitiveEl(obj);

/***************** TASK 5 ****************/
//Дан многомерный объект произвольного уровня вложенности, например, такой:
//{a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}
//С помощью рекурсии найдите сумму элементов этого объекта.


function getSumPrimitiveEl(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] == "object") {
            sum += getSumPrimitiveEl(obj[key])
        } else sum += obj[key];
    }
    return sum;
}

console.log('TASK 5');
console.log(getSumPrimitiveEl(obj));

/***************** TASK 6 ****************/
//Дан многомерный массив произвольного уровня вложенности, содержащий внутри себя строки, например, такой:
//['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]]
//С помощью рекурсии слейте элементы этого массива в одну строку: 'abcdefgjk'


let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

function getStr(arr) {
    let str = '';
    for (let el of arr) {
        if (typeof el == "object") {
            str += getStr(el);
        } else str += el;
    }
    return str;
}

console.log('TASK 6');
console.log(getStr(arr));


/***************** TASK 7 ****************/
//Написать функцию, которая будет возвращать количество вызовов этой функции в квадрате. (Использовать замыкание)

function numCall() {
    let a = 0;
    return function () {
        return a++ ** 2;
    }
}

console.log('TASK 7');
let num = numCall();
console.log(num());
console.log(num());
console.log(num());
console.log(num());

/***************** TASK 8 ****************/
//Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает
//- внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true,
//- если введенная строка совпадает с паролем и false – если не совпадает.

function makePassword(str) {
    let pass = str;
    return function (s) {
        if (s === str) {
            return true
        } else return false;
    }
}

console.log('TASK 8');
let checkPassword = makePassword("qweasd");
console.log(checkPassword("password"));
console.log(checkPassword("qweasd"));

/***************** TASK 9 ****************/
//Напишите функцию на JavaScript, чтобы получить целые числа в диапазоне (x, y). 

const range = (x, y) => x < y - 1 ? [x + 1].concat(range(x + 1, y)) : [];

console.log('TASK 9');
console.log(range(2, 9))




