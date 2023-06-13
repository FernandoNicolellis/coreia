const options = document.querySelectorAll(".option")
const player = document.querySelector(("#player"))
options.forEach(option => {
    option.addEventListener("click", (e) => {
        let id;
        if (e.target.id == '') {
            id = e.target.parentNode.id
        }
        else {
            id = e.target.id
        }

        if (id == 'opt1') {
            player.style.animation = 'moveToLeft 2s linear forwards'
        }
        else if (id == 'opt2') {
            player.style.animation = 'moveToRight 2s linear forwards'
        }
        
    })
})





