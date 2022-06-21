let fruitsArray = ['Banana', 'Orange', 'Apple', 'Mango', 'Grapes'];

let createElements = () => {
  let container = document.createElement("div");
  container.className = 'container';
  document.body.appendChild(container);

  let header = document.createElement('h2');
  header.className = 'header'
  header.innerHTML = 'FRUITS'
  container.appendChild(header);

  let holder = document.createElement('ul')
  holder.className = 'holder';
  container.appendChild(holder);

  for (let i=0; i < fruitsArray.length; i++){
    let li = document.createElement('li');
    li.className = 'li'

    holder.appendChild(li);
    let index = fruitsArray.indexOf(fruitsArray[i]) + 1;
    li.innerHTML=li.innerHTML + index + '. '  + fruitsArray[i];
  }
}
createElements();
