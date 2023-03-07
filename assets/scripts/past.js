import data from "./amazing.js"
import {pastEvents, createCardEvents} from "./events.js"

const contentCards = document.getElementById("content-cards")
const events = pastEvents(data.events, data.currentDate)

contentCards.appendChild(createCardEvents(events))

