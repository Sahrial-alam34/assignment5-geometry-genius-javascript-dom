let serial = 0;
// first card section
document.getElementById('first-card-color').addEventListener('mouseover', function () {


    // for change color
    colorCardSection('first-card-color');


})

//  second card section

document.getElementById('second-card-butt').addEventListener('click', function () {
    serial++;
    const element = getElement('name-rectangle','weight-rectangle' , 'length-rectangle' );
   

    const totalArea = (parseFloat(element.elementHeight) * parseFloat(element.elementWeight)).toFixed(2);
    //console.log(totalArea);
    displayList(element.elementName, totalArea);
    forEmptyBox('weight-rectangle');
    forEmptyBox('length-rectangle');


})


