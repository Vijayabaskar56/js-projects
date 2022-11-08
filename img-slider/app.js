
(function() {
    const Pictures = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7"
    ]


    const buttons = document.querySelectorAll('.btn')
    const imgDiv = document.querySelector('.img-container')

    let counter = 0;
    buttons.forEach(function (button) {
        button.addEventlistener("click", function () {
            if (button.classList.contains('btn-left')) {
                counter--
                if (counter < 0) {
                    counter = Pictures.length - 1
                }
                imgDiv.style.background = `url('img/${Pictures[counter]}.jpg')`
            }

        if (button.classList.contains('btn-right')) {
            counter++
            if (counter > Pictures.length - 1) {
                counter = 0
            }
            imgDiv.style.background = `url('img/${Pictures[counter]}.jpg')`
        }
    }) 
    });
})();

