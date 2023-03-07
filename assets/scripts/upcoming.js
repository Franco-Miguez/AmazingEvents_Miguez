import data from "./amazing.js"
import {upcomingEvents, createCardEvents} from "./events.js"

const contentCards = document.getElementById("content-cards")

const events = upcomingEvents(data.events, data.currentDate)
contentCards.appendChild(createCardEvents(events))