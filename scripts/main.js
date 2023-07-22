let myImage = document.querySelector("img")

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src")
    if (mySrc === "images/奔驰.jpeg") {
        myImage.setAttribute("src", "images/luhu.jpeg")
    } else {
        myImage.setAttribute("src", "images/奔驰.jpeg")
    }
}

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    let myName = prompt("请输入你的名字:")
    if (!myName) {
        setUserName()
    } else {
        localStorage.setItem("name", myName)
        myHeading.textContent = "Mozilla 酷毙了, " + myName
    }
}

if (!localStorage.getItem("name")) {
    setUserName()
} else {
    let storedName = localStorage.getItem("name")
    myHeading.textContent = "Mozilla 酷毙了, " + storedName
}

myButton.onclick = () => {
    setUserName()
}