function* createIterator() {
    yield 1;
    yield 2;
    yield 3;
}


let iterator = createIterator();

let str = 'HELLO';
let arr = ['a', ' b', 'c'];
let obj = {
    name: 'ilya',
    lastName: 'batarin'
}


//------------------------------------------------------------
// Функция определяет является ли обьект итерируемым

function isIterableObject(object) {
    return typeof object[Symbol.iterator] === 'function';
}
//------------------------------------------------------------

console.log(`${str} ---- ${isIterableObject(str)}`);
console.log(`${arr} ---- ${isIterableObject(arr)}`);
console.log(`${obj} ---- ${isIterableObject(obj)}`);

//------------------------------------------------------------
//                Create Iterable Object
//------------------------------------------------------------

let myObj = {
    data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    *[Symbol.iterator]() {
        for (let item of this.data.entries()) {
            yield item;
        }
    }
};


for (let item of myObj) {
    console.log(item);
}
//-------------------------------------------------------------
console.log(...myObj);

//------------------------------------------------------------
//                Destructuring FOR OF loop
//------------------------------------------------------------

let data = new Map();

data.set('name', 'ilya');
data.set('lastName', 'Batarin');

for (let [index, value] of data) {
    console.log(index + ' ' + value);
}
//-------------------------------------------------------------

function test() {
    console.log(1);
    test = function () {
        console.log(2);
    }
}
test();
test();
test();
test();
console.log(test);

let brr = {
    init(cloud, temp) {
        this.cloud = cloud;
        this.temp = temp;
    }
};
console.log(brr);
brr.init(3, 4);
console.log(brr);