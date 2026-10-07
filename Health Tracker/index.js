let currentHealth = 100
const maxHealth = 100


const healthDisplay = document.querySelector("#health")
const damageButton = document.querySelector("#damage")
const healButton = document.querySelector("#heal")

damageButton.addEventListener("click", takeDamage)
healButton.addEventListener("click", healPlayer)

function takeDamage() {
    if (currentHealth > 0){
        currentHealth = currentHealth - 20
    }
    healthDisplay.textContent = "Health: " + currentHealth + " / " + maxHealth
}


function healPlayer(){
    if (currentHealth >=1 && currentHealth < maxHealth){
        currentHealth = currentHealth + 20
    }

    if (currentHealth > maxHealth){
        currentHealth = maxHealth
    }
    healthDisplay.textContent = "Health: " + currentHealth + " / " + maxHealth

}
healthDisplay.textContent = "Health: " + currentHealth + " / " + maxHealth
