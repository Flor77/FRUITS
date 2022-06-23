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

  fruitsArray.map((fruit, i)=>{
    let li = document.createElement('li');
    li.className = 'li'

    holder.appendChild(li);
    li.innerHTML= `${i+1}. ${fruitsArray[i]}`;
  })
}
createElements();
