import data from "./amazing.js";
import {
    createCardEvents, orderEvents,
    allCategories, createItemCategory
} from "./events.js"
import { createImages, createTitle } from "./banner.js";


const contentCards = document.getElementById("content-cards")
const contentBanner = document.getElementById("content-banner")
const contentCategories = document.getElementById("content-categories")

const events = orderEvents(data.events)
const categories = allCategories(events)

contentBanner.appendChild(createImages(events))
contentBanner.appendChild(createTitle("HOME"))
contentCategories.appendChild(createItemCategory(categories))
contentCards.appendChild(createCardEvents(events, "./page/"))
