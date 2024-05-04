'use strict'

const potionsDiv = document.getElementById('potions')
const potionsList = potionsDiv.querySelectorAll('img')

for (let i = 0; i < potionsList.length; i++) {
    potionsList[i].onclick = clickPotion
    potionsList[i].dataset.index = i
}

let userPassword = ''
const rightPAssword = '3102'

function clickPotion( event ) {
    let image = event.target
    if (image.classList.contains('used')) return

    image.classList.add('used')
    userPassword += image.dataset.index

    if (userPassword.length === potionsList.length) {
        checkPassword()
    }
}

function checkPassword() {
    if (userPassword === rightPAssword) {
        showSpecialImage()
    } else {
        userPassword = ''
        for (let i = 0; i < potionsList.length; i++) {
            potionsList[i].classList.remove('used')
        }
    }
}

function showSpecialImage() {
    for (let i = 0; i < potionsList.length; i++) {
        potionsList[i].remove()
    }

    let image = document.createElement('img')
    image.src = './images/hiddenDragon.png'
    image.style.width = '100%'
    image.style.height = '100%'
    potionsDiv.append(image)
}