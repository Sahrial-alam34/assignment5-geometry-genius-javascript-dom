let serial = 0;
// first card section
document.getElementById('first-card-color').addEventListener('mouseover', function () {
   

    // for change color
    colorCardSection('first-card-color');


})

//  second card section

document.getElementById('second-card-butt').addEventListener('click', function () {
    
    const element = getElement('name-rectangle', 'weight-rectangle', 'length-rectangle');
    const validation = validationCheck(element.elementHeight, element.elementWeight);
    forEmptyBox('weight-rectangle');
    forEmptyBox('length-rectangle');
    console.log(validation);
    if(validation === true){
        return alert('Please Input Valid Number Value');
    }
    serial++;
    const totalArea = (parseFloat(element.elementHeight) * parseFloat(element.elementWeight)).toFixed(2);
    //console.log(totalArea);
    displayList(element.elementName, totalArea);
    


})


