const login = document.querySelector(".login-btn");
const firstContainer = document.querySelector(".container");
const secondContainer = document.querySelector(".second-container")
const spider = document.getElementById("spider")
const check = document.getElementById("check")



login.addEventListener("click", event => {
    // event.preventDefault();

    console.log(firstContainer.classList.add("hidden"), "FIRSTCONTAINER")
    console.log(secondContainer.classList.remove("hidden"), "SECOND")

        setTimeout(() => {
         spider.classList.add("hidden")
         check.classList.remove("hidden")
       }, 3000);
})























// let messages = []
// console.log(messages, "MESSAGES")

// if (email.value === null || email.value === " ") {
//     console.log(messages.push('email is required'))
// }

// if (messages.length > 0) {
//     event.preventDefault()
//     errorElement.innerText = messages.join(', ')
// }

// if (password.value.length <= 6) {
//     console.log(messages.push('password must be longer than 6 characters'))
// }
// console.log(password.value, "PASSWORD")