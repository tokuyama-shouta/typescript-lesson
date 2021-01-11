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
