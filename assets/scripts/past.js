import data from "./amazing.js"
import {
    pastEvents, createCardEvents,
    allCategories, createItemCategory, superFilter
} from "./events.js"
import { createImages, createTitle } from "./banner.js";

//elements the dom
const contentCards = document.getElementById("content-cards")
const contentBanner = document.getElementById("content-banner")
const contentCategories = document.getElementById("content-categories")
const inputSearch = document.querySelector("input[placeholder='search']")
const form = document.forms[0]

// filter and order events. filter the category
const events = pastEvents(data.events, data.currentDate)
const categories = allCategories(data.events)

//add image to banner and card events
contentBanner.appendChild(createImages(events))
contentBanner.appendChild(createTitle("PAST EVENTS"))
contentCategories.appendChild(createItemCategory(categories))
contentCards.appendChild(createCardEvents(events))

//events on the dom for update the card events
inputSearch.addEventListener("keyup", () => {
    contentCards.innerHTML = ""
    contentCards.appendChild(superFilter(events))

})

contentCategories.addEventListener("change", () => {
    contentCards.innerHTML = ""
    contentCards.appendChild(superFilter(events))
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    contentCards.innerHTML = ""
    contentCards.appendChild(superFilter(events))
})