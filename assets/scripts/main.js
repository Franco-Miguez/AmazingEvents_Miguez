import data from "./amazing.js"

export default function upcomingEvents(events, date){
    let arrayUpcomingEvents=[]
    for (let event of events) {
        if (event.date > date) {
            arrayUpcomingEvents.push(event);
        }
    }
    return arrayUpcomingEvents;
}

export default function pastEvents(events, date){
    let arrayPastEvents=[]
    for (let event of events) {
        if (event.date < date) {
            arrayPastEvents.push(event)
        }
    }
    return arrayPastEvents
}

export default function todayEvents(events, date){
    for (let event of events) {
        if (event.date == date) {
            arrayDateEvents.push(event)
        }
    }
    return arrayDateEvents
}