let currentHealth = 100
const maxHealth = 100


const healthDisplay = document.querySelector("#health")
const damageButton = document.querySelector("#damage")
const healButton = document.querySelector("#heal")
const statusDisplay = document.querySelector("#status")
const resetButton = document.querySelector("#reset")

damageButton.addEventListener("click", takeDamage)
healButton.addEventListener("click", healPlayer)
resetButton.addEventListener("click", resetHero)

function takeDamage() {
    if (currentHealth > 0){
        currentHealth = currentHealth - 20
    }

    if (currentHealth < 0){
        currentHealth = 0
    }
    healthDisplay.textContent = "Health: " + currentHealth + " / " + maxHealth
    updateStatus()
}


function healPlayer(){
    if (currentHealth >=1 && currentHealth < maxHealth){
        currentHealth = currentHealth + 20
    }

    if (currentHealth > maxHealth){
        currentHealth = maxHealth
    }
    healthDisplay.textContent = "Health: " + currentHealth + " / " + maxHealth
    updateStatus()

}
healthDisplay.textContent = "Health: " + currentHealth + " / " + maxHealth


function updateStatus() {
    if (currentHealth === maxHealth) {
        statusDisplay.textContent = "Status: Healthy"
    } else if (currentHealth >= 31 && currentHealth <= 99){
        statusDisplay.textContent = "Status: Injured"
    } else if (currentHealth >= 1 && currentHealth <= 30){
        statusDisplay.textContent = "Status: Critical"
    } else {
        statusDisplay.textContent = "Status: Dead"
    }
        
    }

    function resetHero() {
        currentHealth = maxHealth
       healthDisplay.textContent = "Health: " + currentHealth + " / " + maxHealth
        updateStatus()
    }