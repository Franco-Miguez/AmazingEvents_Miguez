import data from "./amazing.js"

const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get('id')

const cardBody = document.querySelector('.card-body')
const event = data.events.find(event => event._id == id)
const cardImage = document.querySelector('#card-img')

//insert image
cardImage.innerHTML = `
                    <img src="${event.image}" class="img-fluid rounded" alt="image the event ${event.name}">
`
// insert data the events
cardBody.innerHTML = `
    <ul class="d-flex flex-column">
        <li><h3 class="card-title">${event.name.toUpperCase()}</h3></li>
        <li class="btn btn-info p-1 mb-1">${event.category}</li>
        <li class="text-secondary">${event.date}</li>
        <li class="my-4">${event.description}</li>
        <li class="">Place: ${event.place}</li>
        <li class="">Capacity: ${event.capacity}</li>
        <li class="">${event.assistance?
            "Assistance: " + event.assistance:
            "Estimate: " + event.estimate}</li>
        <li class="mt-4 btn btn-success d-block">$ ${event.price}</li>
    </ul>
`
console.log(id)