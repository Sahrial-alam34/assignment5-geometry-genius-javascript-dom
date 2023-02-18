let serial = 0;
// first card section

document.getElementById('first-card-butt').addEventListener('click',function(){
    const element = getElement('name-triangle', 'weight-triangle', 'height-triangle');
    const validation = validationCheck(element.elementHeight, element.elementWeight);
    forEmptyBox('weight-triangle');
    forEmptyBox('height-triangle');
    
    if(validation === true){
        return alert('Please Input Valid Number Value');
    }
    serial++;
    const totalArea = (0.5*(parseFloat(element.elementHeight)) * (parseFloat(element.elementWeight))).toFixed(2);
    //console.log(typeof totalArea);
    displayList(element.elementName, totalArea);
})
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
    
    if(validation === true){
        return alert('Please Input Valid Number Value');
    }
    serial++;
    const totalArea = (parseFloat(element.elementHeight) * parseFloat(element.elementWeight)).toFixed(2);
    //console.log(totalArea);
    displayList(element.elementName, totalArea);
    
})

// third card section

document.getElementById('third-card-butt').addEventListener('click',function(){
    const element = getElement('name-parallelogram', 'weight-parallelogram', 'height-parallelogram');
    const validation = validationCheck(element.elementHeight, element.elementWeight);
    forEmptyBox('weight-parallelogram');
    forEmptyBox('height-parallelogram');
    
    if(validation === true){
        return alert('Please Input Valid Number Value');
    }
    serial++;
    const totalArea = ((parseFloat(element.elementHeight)) * (parseFloat(element.elementWeight))).toFixed(2);
    //console.log(typeof totalArea);
    displayList(element.elementName, totalArea);
})

// fourth card section

document.getElementById('fourth-card-butt').addEventListener('click',function(){
    const element = getElement('name-rhombus', 'd1-rhombus', 'd2-rhombus');
    const validation = validationCheck(element.elementHeight, element.elementWeight);
    forEmptyBox('d1-rhombus');
    forEmptyBox('d2-rhombus');
    
    if(validation === true){
        return alert('Please Input Valid Number Value');
    }
    serial++;
    const totalArea = (0.5* (parseFloat(element.elementHeight)) * (parseFloat(element.elementWeight))).toFixed(2);
    //console.log(typeof totalArea);
    displayList(element.elementName, totalArea);
})

// fifth card section

document.getElementById('fifth-card-butt').addEventListener('click',function(){
    const element = getElement('name-pentagon', 'p-pentagon', 'b-pentagon');
    const validation = validationCheck(element.elementHeight, element.elementWeight);
    forEmptyBox('p-pentagon');
    forEmptyBox('b-pentagon');
    
    if(validation === true){
        return alert('Please Input Valid Number Value');
    }
    serial++;
    const totalArea = (0.5* (parseFloat(element.elementHeight)) * (parseFloat(element.elementWeight))).toFixed(2);
    //console.log(typeof totalArea);
    displayList(element.elementName, totalArea);
})

// sixth card section

document.getElementById('sixth-card-butt').addEventListener('click',function(){
    const element = getElement('name-ellipse', 'a-ellipse', 'b-ellipse');
    const validation = validationCheck(element.elementHeight, element.elementWeight);
    forEmptyBox('a-ellipse');
    forEmptyBox('b-ellipse');
    
    if(validation === true){
        return alert('Please Input Valid Number Value');
    }
    serial++;
    const totalArea = (3.14* (parseFloat(element.elementHeight)) * (parseFloat(element.elementWeight))).toFixed(2);
    //console.log(typeof totalArea);
    displayList(element.elementName, totalArea);
})



