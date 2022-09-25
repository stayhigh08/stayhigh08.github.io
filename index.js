// Beimportaljuk a html elemeket
const navUlEl = document.querySelector(".nav-ul")
const homeh1El = document.getElementById("home-h1")
const homeh5El = document.getElementById("home-h5")
const orangeBarEl1 = document.querySelector(".orange-bar-container-1")
const orangeBarEl2 = document.querySelector(".orange-bar-container-2")
const aboutContainerEl = document.querySelector(".about-container")

function checkMediaQuery() {
    // home page media queries
    if (window.innerWidth < 911) {
      navUlEl.style.gap = "300px"
      homeh1El.innerHTML = `Camb<br>logistics`
      orangeBarEl1.style.width = "300px"
      orangeBarEl2.style.width = "540px"
      orangeBarEl2.style.top = "480px"
      homeh5El.style.top = "500px"
    }
    else {
        navUlEl.style.gap = "600px"
        homeh1El.innerHTML = `CambLogistics`
        orangeBarEl1.style.width = "841px"
        orangeBarEl2.style.width = "841px"
        orangeBarEl2.style.top = "395px"
        homeh5El.style.top = "430px"
    }
    if(window.innerWidth < 585) {
        navUlEl.style.gap = "100px"
        homeh1El.style.fontSize = "30px"
        orangeBarEl1.style.width = "145.1612px"
        orangeBarEl2.style.width = "261.2911px"
        orangeBarEl2.style.top = "380px"
        homeh5El.style.top = "400px"
        homeh5El.style.fontSize = "25px"
    }
    else {
        homeh1El.style.fontSize = "62px"
        homeh5El.style.fontSize = "30px"

    }
}

// Add a listener for when the window resizes
window.addEventListener('resize', checkMediaQuery);
