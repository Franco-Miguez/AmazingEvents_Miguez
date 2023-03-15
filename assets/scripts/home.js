import data from "./amazing.js";
import {
    createCardEvents, orderEvents,
    allCategories, createItemCategory, superFilter
} from "./events.js"
import { createImages, createTitle } from "./banner.js";


const contentCards = document.getElementById("content-cards")
const contentBanner = document.getElementById("content-banner")
const contentCategories = document.getElementById("content-categories")
const inputSearch = document.querySelector("input[placeholder='search']")
const form = document.forms[0]

const events = orderEvents(data.events)
const categories = allCategories(events)


contentBanner.appendChild(createImages(events))
contentBanner.appendChild(createTitle("HOME"))
contentCategories.appendChild(createItemCategory(categories))
contentCards.appendChild(createCardEvents(events, "./page/"))

inputSearch.addEventListener("keyup", () => {
    contentCards.innerHTML = ""
    contentCards.appendChild(superFilter(events, "./page/"))

})

contentCategories.addEventListener("change", () => {
    contentCards.innerHTML = ""
    contentCards.appendChild(superFilter(events, "./page/"))
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    contentCards.innerHTML = ""
    contentCards.appendChild(superFilter(events, "./page"))
})