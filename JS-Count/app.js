(function() {
    const buttons = document.querySelectorALL('.counterBtn')
    let count = 0
    
    buttons.forEach( function(button) {
        button.addEventListener('click', function() {
            if(button.classList.contains('lowbtn')) {
                count--
            } else if(button.classList.contains('highbtn')) {
                count++
            }
            const counter = document.querySelector('#counter')
            counter.textContent = count;
            if (count < 0) {
                counter.style.colour = 'red'
            } else if (count > 0) {
                counter.style.colour = 'green'
            } else {
                counter.style.colour = '#333333'
            }
        })
    });
}) ()