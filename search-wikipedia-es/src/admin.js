import people from './people.js';
const root = document.querySelector('body');
for(let i=0;i< people.length;i++) {
  console.log(`Hi the persons name is ${people[i].name}`);
}
console.log(root.appendChild('<div id="root">I am on my own now!</div>'));
//root.innerHTML(`<pre>This is the place i wanted to be</pre>`);