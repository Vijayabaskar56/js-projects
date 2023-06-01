(function() {
    const form = document.querySelector("form")
    const gvalues = [
            {"Mercury": 3.59},
            {"Venus": 8.87},
            {"Earth": 9.81},
            {"Moon": 1.62},
            {"Mars": 3.77},
            {"Jupiter": 25.95},
            {"Saturn": 11.08},
            {"Uranus": 10.67},
            {"Neptune": 14.07}
    ]
    form.addEventListener('submit', function(e) {
        e.preventDefault()

        const weight = document.querySelector('#earth-weight')
        const planet = document.querySelector('#planet')


        const messagecontent = document.querySelector('.output')
        if(message.value === ''){
            feedback.classList.add('show')
            setTimeout(function() {
            feedback.classList.remove('show')
            }, 4000)
        } else {
            
            messagecontent.textContent = .value
            message.value = ''
        }
    })



})()










(function() {
    const gvalues = `{
        "gvalues":[
            {
            "Mercury": 3.59,
            "Venus": 8.87,
            "Earth": 9.81,
            "Moon": 1.62,
            "Mars": 3.77,
            "Jupiter": 25.95,
            "Saturn": 11.08,
            "Uranus": 10.67,
            "Neptune": 14.07
            }
        ]
    }`
    

    const values = JSON.parse(gvalues);


    const form = document.getElementById('form')

    form.addEventListener('submit', function(e) {
    e.preventDefault()
    


    if (planet === undefined) {
        return 'invalid planet'
    }
    if (planet in values) { 
        const g = gvalues
    }

    
})
    
})

// function calc_weight(Mass, planet) {
//     const g = document.getElementsByName("Planet").values
//     if (g === undefined) {
//         return 'invalid planet';
//     }
//     var weight = Mass * g
//     return weight
// }

console.log(calc_weight(10, "Earth"));

