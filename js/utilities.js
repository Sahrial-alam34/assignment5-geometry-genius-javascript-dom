document.getElementById('nav-button').addEventListener('click', function () {
    window.location.href = 'question.html'
})

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


