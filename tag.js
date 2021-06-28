/* html 요소 찾기 */

/* id속성으로 찾기 */

/* 1. getElementById() */
const box = document.getElementById('box');
console.log(box);
console.dir(box);

/* 2. getElementsByClassName() */
const list = document.getElementsByClassName('list');
console.log(list);
console.log(list);

// 해당 클래스 값이 여러개 있을경우엔 해당 클래스 값이 일치하는 태그 모두 컬렉션에 담아서 반환한다.
const button = document.getElementsByClassName('button');
console.log(button);
console.log(button.length); // 2

for(let i = 0; i < button.length; i++) {
    console.log(button.item(i)); // button1 태그
    console.log(button[i]); // button2 태그
}

// 클래스 두개 이상의 값을 가지고 있는 태그를 반환하기 위해서는 ' ' 문자열안에 띄어쓰기를 이용하여 할당할수 있다.
const listButton = document.getElementsByClassName('list button'); // 해당 클래스 모두 포함하는 태그가 없기 때문에 빈 값이 반환된다.
console.log(listButton);

const buttonLast = document.getElementsByClassName('button last');
console.log(buttonLast);

/* 3. getElementsByTagName() */
const pTag = document.getElementsByTagName('p'),
    divTag = document.getElementsByTagName('div'),
    btnTag = document.getElementsByTagName('button'),
    liTag = document.getElementsByTagName('li'),
    ulTag = document.getElementsByTagName('ul');

console.log(pTag);
console.log(divTag);
console.log(btnTag);
console.log(liTag);
console.log(ulTag);

/* 4.querySelector() */
const title = document.querySelector('#title'), // id 속성
    btn = document.querySelector('.button'), // class 속성
    ul = document.querySelector('ul'); // 태그 이름

console.log(title);
console.log(btn);
console.log(ul);

const btnAll = document.querySelectorAll('.button'); // button 클래스를 가지고 있는 태그 모두를 nodeList에 담아서 반환한다. 

console.log(btnAll);

