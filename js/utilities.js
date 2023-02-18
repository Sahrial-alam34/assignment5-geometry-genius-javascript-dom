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
    <td id="total-area">
    ${totalArea}<small>cm<sup>2</sup></small>
     </td>
    <td>
    <button id="cm-to-m" class="btn btn-sm btn-primary normal-case">Covert to m<sup>2</sup></button>
    </td>
    
    
  `;
    container.appendChild(tr);
   

    // Convert centimeter to meter
    document.getElementById('cm-to-m').addEventListener('click',function(){
        const convertCmToM = (totalArea * 0.0001).toFixed(4);
        //conCmToM(serial, elementName, convertCmToM);
        //document.getElementById('total-area').innerText = convertCmToM;
       tr.innerHTML = `
       
        <td>${serial}</td>
        <td>${elementName}</td>
        <td id="total-area">
        ${convertCmToM }<small>m<sup>2</sup></small>
        
         </td>
         <td>
        </td>
       
        
      `;
        container.appendChild(tr);
       
        
    })
    // function conCmToM(serial, elementName,convertCmToM){
    //     tr.innerHTML = `
       
    
    //     <td>${serial}</td>
    //     <td>${elementName}</td>
    //     <td id="total-area"><div class="grid grid-cols-2">
    //     ${convertCmToM }<h3 class="cMeter">m<sup>2</sup></h3>
    //     </div>
    //      </td>
    //      <td>
        
    //     </td>
       
        
    //   `;
    //     container.appendChild(tr); 
    // }
    
    
}





// validation check 

function validationCheck(elementWeight, elementHeight){
    if(elementWeight =='' ||elementHeight== '' || elementWeight <=0 || elementHeight <=0){
        return true;
        
      }
      if(isNaN(elementWeight) || isNaN(elementHeight)){
        return true;
      }
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


