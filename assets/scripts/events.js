/**
 * order events for date
 * return array of events
 * @param {array whit object event} events to ordered
 * @returns oredered array
 */
export function orderEvents(events){
    events.sort((a,b) => {
        if (a.date === b.date){
            return 0
        }else if (a.date < b.date){
            return 1
        }else if( a.date > b.date){
            return -1
        }
    })
    return events
}

/**
 *filter upcoming events
 *return array of events
 * @param {array whit object event} events it's event to filter
 * @param {string} date it's today date
 * @returns array
 */
export function upcomingEvents(events, date){
    const arrayUpcomingEvents=[]
    events.forEach(event => {
        if(event.date > date)
            arrayUpcomingEvents.push(event)
    })
    return orderEvents(arrayUpcomingEvents)
}

/**
 * filter past events
 * @param {array whit object event} events to filder
 * @param {string} date it's today date
 * @returns array
 */
export function pastEvents(events, date){
    const arrayPastEvents=[]
    events.forEach(event => {
        if (event.date < date)
            arrayPastEvents.push(event)
    })
    return orderEvents(arrayPastEvents)
}

/**
 * filter events the today
 * @param {array whit object events} events it's event to filter
 * @param {string} date it's today date
 * @returns array
 */
export function todayEvents(events, date){
    const arrayTodayEvents= []
    events.forEach((event) => {
        if (event.date == date)
            arrayTodayEvents.push(event)
    })
    return orderEvents(arrayTodayEvents)
}

/**
 * create templates the cards events
 * @param {array whit object event} events it's events to create template
 * @param {string} ruta it's path the scripts
 * @returns fragment
 */
export function createCardEvents(events, path="./"){
    const cardEvents = document.createDocumentFragment()
    events.forEach(event => {
        const section = document.createElement('section')
        section.classList = ['card bg-secondary text-light']
        section.innerHTML = `
                <img src="${event.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${event.name}</h3>
                    <p class="card-text">${event.description}</p>
                    <div class="d-flex flex-row justify-content-around ">
                        <div class="price align-self-end">$${event.price}</div>
                        <a href="${path}details.html" class="btn btn-primary">see more</a>
                    </div>
                </div>`
        cardEvents.appendChild(section)
    })
    return cardEvents
}