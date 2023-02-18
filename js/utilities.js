document.getElementById('nav-button').addEventListener('click', function () {
    window.location.href = 'question.html'
})


// get element from html
function getElement(eleName,eleWeight, eleHeight){
    const elementName = document.getElementById(eleName).innerText;
    const elementWeight = document.getElementById(eleWeight).value;
    const elementHeight = document.getElementById(eleHeight).value;

    const element = {
        elementName : elementName,
        elementWeight : elementWeight,
        elementHeight : elementHeight,

    }
    return element
}

// display the list
function displayList(elementName, totalArea) {
    const container = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${elementName}</td>
    <td>${totalArea}</td>
    <td>cm<sup>2</sup></td>
    
   
    <td>
    <button class="btn btn-primary btn-sm ">Covert to m<sup>2</sup></button>
    </td>
    
  `;
    container.appendChild(tr);
  
}


// for empty text box

function forEmptyBox(id){
    document.getElementById(id).value = '';
}

function colorCardSection(id){
    const colorCard = document.getElementById(id);
    let symbols = '0123456789ABCDEF' //16 symbols

    // to generate color with combination

    let color = '#';

    for(let i =0 ; i<6; i++){
        color = color + symbols[Math.floor(Math.random()*16)];
    }
    colorCard.style.background = color;
}


