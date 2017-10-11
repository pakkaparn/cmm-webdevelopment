// Change HTML Content
const defaultName = document.getElementById('your_name').innerHTML
document.getElementById('form').onsubmit = e => {
    e.preventDefault()

    let name = document.getElementById('name').value.trim()

    if(name.length === 0) name = defaultName
    document.getElementById('your_name').innerText = name + '.'

    return false
}

// Event listener
const clickListener = document.getElementById('click-listener')
const clickCounter = document.getElementById('click-counter')

clickListener.onclick = () => {
    clickCounter.value = parseInt(clickCounter.value) + 1
}

// Carousel
const carousel = new Siema()

document.querySelector('.carousel .prev').addEventListener('click', () => carousel.prev());
document.querySelector('.carousel .next').addEventListener('click', () => carousel.next());

// Ajax
const fetchData = document.getElementById('fetch-data')
fetchData.onclick = () => {
    let table = document.querySelector('#fetch-data-table tbody')
    table.innerHTML = ''

    let request = new XMLHttpRequest()

    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
    request.onload = () => {
        if(request.status < 200 || request.status >= 400) return

        let response = JSON.parse(request.responseText)

        let template = document.getElementById('fetch-data-template')
        let cells = template.content.querySelectorAll('.cell')

        response.forEach(data => {
            cells[0].innerText = data.id
            cells[1].innerText = data.title
            cells[2].innerText = data.body

            let clone = document.importNode(template.content, true)
            table.appendChild(clone)

        })
    }

    request.send()
}