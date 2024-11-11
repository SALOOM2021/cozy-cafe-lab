// -------------------Exercise 1-------------------
const title = document.querySelector("#main-title")
title.textContent = "Welcome to the Cozy Cafe";
title.style.textAlign = "center"


// -------------------Exercise 2-------------------
const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = "#EADDCA"


// -------------------Exercise 3-------------------
const quoteOfTheDay = document.querySelector("#quote-of-the-day")
quoteOfTheDay.textContent = "A cup of coffee can change your day"


// -------------------Exercise 4-------------------
const elementsWithClass = document.querySelectorAll(".highlight-title")
elementsWithClass.forEach((elFontChange) => {
    elFontChange.style.fontStyle = "italic"
})


// -------------------Exercise 5-------------------
const catchUlParent = document.querySelector("#past-menu-items")
const newItem = document.createElement("li")
newItem.textContent = "Rose Cake"

catchUlParent.appendChild(newItem)


// -------------------Exercise 6-------------------
const specialtiesList = document.querySelector("#cafe-specialties")
const newSpecialistItem = document.createElement("li")
newSpecialistItem.textContent = "Karak Tea"

specialtiesList.appendChild(newSpecialistItem)


// -------------------Exercise 7-------------------
const blogsParent = document.querySelector("#blogs")
const newDiv = document.createElement("div")
newDiv.classList.add("blog-post")

const h3Title = document.createElement("h3")
h3Title.textContent = "Karak Tea Tasting Event"
newDiv.appendChild(h3Title)

const newParagraph = document.createElement("p")
newParagraph.textContent = "Join us for a cozy and flavorful Karak Tea Tasting Event, where you can experience the rich, spiced flavor of this popular Middle Eastern drink."
newDiv.appendChild(newParagraph)

blogsParent.appendChild(newDiv)
