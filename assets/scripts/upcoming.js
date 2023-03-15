import data from "./amazing.js"
import {
        upcomingEvents, createCardEvents,
        allCategories, createItemCategory, superFilter
} from "./events.js"
import { createImages, createTitle } from "./banner.js";

const contentCards = document.getElementById("content-cards")
const contentBanner = document.getElementById("content-banner")
const contentCategories = document.getElementById("content-categories")
const inputSearch = document.querySelector("input[placeholder='search']")
const form = document.forms[0]

const events = upcomingEvents(data.events, data.currentDate)
const categories = allCategories(data.events)

contentBanner.appendChild(createImages(events))
contentBanner.appendChild(createTitle("UPCOMING EVENTS"))
contentCategories.appendChild(createItemCategory(categories))
contentCards.appendChild(createCardEvents(events))


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