function displayList(){
    const fruitsElement = document.querySelector('#fruits');

    const pElement =fruitsElement.children ;
    const parray = Array.from(pElement);
    const fruitsname = parray.map(p => p.textContent);
    const ul = document.createElement('ul');

    fruitsname.forEach(name =>{
        const li =document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);
    })
    fruitsElement.innerHTML = '';
    fruitsElement.appendChild(ul);
}