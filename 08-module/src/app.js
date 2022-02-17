import Header from './components/Header';
import $ from 'jquery';

import './style.css';

const div = document.createElement('div');

div.classList.add('box');

document.body.appendChild(div);

console.log(Header());

console.log($);

// work
const worker = new Worker(new URL('./work.js', import.meta.url));

worker.postMessage({
  question: 'what is this?',
});

worker.onmessage = (message) => {
  console.log(message);
};
