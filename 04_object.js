/* 
 * 객체 생성
    1. 객체 리터럴
        - 객체 생성 방식이 직관적이고 간편하다
        - 객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다
    2. Object 생성자 함수
        - 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 사용

 * 생성자 함수
    - 생성자 함수란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다
    - 생성자 함수에 의해 생성된 객체를 인스턴스라고 한다
    - 일반적으로 첫 문자를 대문자로 기술하는 파스칼 케이스로 명명하여 일반 함수와 구별한다
    - 자바스크립트 빌트인 생성자 함수 종류: Object, String, Number, Boolean, Function, Array, Date, RegExp, Promise 등
    - 일반 함수와 동일한 방법으로 생성자 함수를 정의하고 new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다
    - new 연산자와 함께 생성자 함수를 호출하지 않으면 생성자 함수가 아니라 일반 함수로 동작한다

 * this
    - 객체 자신의 프로퍼티나 메서드를 참조하기 위한 자기 참조 변수다
    - this가 가리키는 값, 즉 this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.

 * 바인딩
    - 바인딩이란 식별자와 값을 연결하는 과정을 의미한다
    - this 바인딩은 this(식별자 역할을 한다)와 this가 가리킬 객체를 바인딩하는 것이다

 * constructor와 non-constructor
    - 함수 정의 방식에 따라 구분한다
    - constructor: 함수 선언문, 함수 표현식, 클래스
    - non-constructor: 메서드(ES6 메서드 축약 표현), 화살표 함수
*/

// 객체 리터럴
const person = {}

// Object 생성자 함수
const user = new Object();
const user2 = Object();

// 생성자 함수
function People(name){
    this.name = name;
    this.printName = function () {
        console.log(this.name);
    }
}

// 인스턴스 생성
const person1 = new People('Ryu');
const person2 = new People('Kim');

person1.printName();
person2.printName();

// new 연산자와 함께 호출하지 않으면 일반 함수로 호출한다
const person3 = People('Lee');
console.log(person3); // undefined
console.log(person2); // People { name: 'Kim', printName: [Function (anonymous)] }

// new.target 메타 프로퍼티: new 연산자와 함께 생성자 함수로서 호출되었는지 확인 가능 (IE에서는 지원 안함)
// new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다
// new 연산자 없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined다
function Circle(radius) {
    if (!new.target) {
        return new Circle(radius);
    }

    this.radius = radius;
    this.getDiameter = () => 2 * this.radius;
}

const circle = Circle(5);
console.log(circle.getDiameter());

// 대부분의 빌트인 생성자 함수는 new 연산자 없이 호출해도 생성자 함수로 동작한다
// String, Number, Boolean 생성자 함수는 new 연산자 없이 호출하면 문자열, 숫자, 불리언 값을 반환한다, 이를 통해 데이터 타입 변환에 사용한다
const str = String(123);
console.log(str, typeof str);
const strObject = new String(123);
console.log(strObject, typeof strObject);

const num = new Number(123);
console.log(num, typeof num);

const isTrue = new Boolean(true);
console.log(isTrue, typeof isTrue)

console.log(Object.getOwnPropertyDescriptors(strObject))
console.log(Object.getOwnPropertyDescriptors(num))
console.log(Object.getOwnPropertyDescriptors(isTrue))
console.log(Object.getOwnPropertyDescriptors(String))
console.log(Object.getOwnPropertyDescriptors(Number))
console.log(Object.getOwnPropertyDescriptors(Boolean))
console.log(Object.getOwnPropertyDescriptors(Circle))
console.log(Object.getOwnPropertyDescriptors(People))