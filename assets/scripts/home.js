import data from "./amazing.js";
import { createCardEvents, orderEvents} from "./events.js"


const contentCards = document.getElementById("content-cards")
const events = orderEvents(data.events)
contentCards.appendChild(createCardEvents(events,"./page/"))
