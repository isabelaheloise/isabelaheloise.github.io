
// Pegando todos os elementos do tipo section e aplicando a classe que deixa invisivel em todos eles exceto o da classe referente ao link que clicamos

const about_me = document.getElementById("about_me")
about_me.addEventListener("click", (event) => {
    document.querySelector(".about-me").classList.remove("invisiburu")
    document.querySelector(".education").classList.add("invisiburu")
    document.querySelector(".projects").classList.add("invisiburu")
    document.querySelector(".contacts").classList.add("invisiburu")
})
const education = document.getElementById("education")
education.addEventListener("click", (event) => {
    document.querySelector(".about-me").classList.add("invisiburu")
    document.querySelector(".education").classList.remove("invisiburu")
    document.querySelector(".projects").classList.add("invisiburu")
    document.querySelector(".contacts").classList.add("invisiburu")
})
const projects = document.getElementById("projects")
projects.addEventListener("click", (event) => {
    document.querySelector(".about-me").classList.add("invisiburu")
    document.querySelector(".education").classList.add("invisiburu")
    document.querySelector(".projects").classList.remove("invisiburu")
    document.querySelector(".contacts").classList.add("invisiburu")
})
const contacts = document.getElementById("contacts")
contacts.addEventListener("click", (event) => {
    document.querySelector(".about-me").classList.add("invisiburu")
    document.querySelector(".education").classList.add("invisiburu")
    document.querySelector(".projects").classList.add("invisiburu")
    document.querySelector(".contacts").classList.remove("invisiburu")
})

