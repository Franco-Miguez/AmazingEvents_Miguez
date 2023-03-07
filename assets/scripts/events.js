/** order events for date
 * return array of events
 */
export function orderEvents(events){
    const arrayOrder = events;
    for(let i = 0; i < arrayOrder.length; i++){
        for(let j = i; j < arrayOrder.length; j++){
            if(arrayOrder[i].date < arrayOrder[j].date){
                const aux = arrayOrder[i]
                arrayOrder[i] = arrayOrder[j]
                arrayOrder[j] = aux
            }
        }
    }
    return arrayOrder
}

/** filter upcoming events
 * return array of events
 */
export function upcomingEvents(events, date){
    let arrayUpcomingEvents=[]
    for (let event of events) {
        if (event.date > date) {
            arrayUpcomingEvents.push(event);
        }
    }
    return orderEvents(arrayUpcomingEvents)
}

/** filter past events
 * return array of events
*/
export function pastEvents(events, date){
    let arrayPastEvents=[]
    for (let event of events) {
        if (event.date < date) {
            arrayPastEvents.push(event)
        }
    }
    return orderEvents(arrayPastEvents)
}

/** filter events the today
 * return array whit events
 */
export function todayEvents(events, date){
    let arrayTodayEvents= []
    for (let event of events) {
        if (event.date == date) {
            arrayDateEvents.push(event)
        }
    }
    return orderEvents(arrayTodayEvents)
}

/** create templates the cards events
 *return a fragment
 */
export function createCardEvents(events, ruta="./"){
    const cardEvents = document.createDocumentFragment()
    for (let event of events) {
        const section = document.createElement('section')
        section.classList = ['card bg-secondary text-light']
        section.innerHTML = `
                <img src="${event.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h3 class="card-title">${event.name}</h3>
                    <p class="card-text">${event.description}</p>
                    <div class="d-flex flex-row justify-content-around ">
                        <div class="price align-self-end">$${event.price}</div>
                        <a href="${ruta}details.html" class="btn btn-primary">see more</a>
                    </div>
                </div>`
        cardEvents.appendChild(section)
    }
    return cardEvents
}