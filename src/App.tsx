import React from 'react';
import './App.css';
import TestComponent from './TestComponent';

let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';
let doudle: string = "hello";
let back: string = `hello`;

const person = {
  name: 'jack',
  age: 21
}
console.log(person)

const fruits: string[] = ['Apple', 'Banana', 'Grape']

const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeSize  {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeSize.TALL
}
coffee.size = CoffeSize.SHORT;


let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, 'hello']

const apple: 'apple' = 'apple';
let clothSize: 'small' | 'medium' | 'large' = 'small';
type ClothSize = 'small' | 'medium' | 'large'
const ClothSize: 'apple' = 'apple';


function add(num1: number, num2: number): number {
  return num1 + num2
}
add(3,2)

function sayHello(): void {
  console.log('Hello');
}

console.log(sayHello)

const anotherAdd: (n1: number, n2: number) => number = add;
const doubleNumber = (number: number): number => number * 2;

function doubleAndHandle(num: number, cb: (num: number) => number) {
  const doubleNum = cb(num * 2)
  console.log(num * 2);
}
doubleAndHandle(21, doubleNum => {
  return doubleNum
});

let unknownInput: unknown;
let anyInput: any;
let text: string
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
if(typeof unknownInput === 'string'){
  unknownInput;
}

function error(message: string): never{
  throw new Error(message);
}
console.log(error('this is an error'))


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="hello from App"/>
      </header>
    </div>
  );
}

export default App;
