import {
        mainEvents, mainCategories, search, dataEvents, orderEvents
} from "./events.js"
import { mainBanner } from "./banner.js";

async function main() {
    const data = await dataEvents("./assets/data/amazing.json")
    const events = await orderEvents(data.events)
    console.table(events)
    mainBanner("home", events)
    mainCategories(events)
    mainEvents(events, "./page/")
    search(events)
}

main()