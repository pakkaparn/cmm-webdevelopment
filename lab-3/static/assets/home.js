// Change HTML Content
const defaultName = document.getElementById('your_name').innerHTML
document.getElementById('form').onsubmit = function(e) {
    e.preventDefault()

    var name = document.getElementById('name').value.trim()

    if(name.length === 0) name = defaultName
    document.getElementById('your_name').innerText = name + '.'

    return false
}

// Event listener
var clickListener = document.getElementById('click-listener')
var clickCounter = document.getElementById('click-counter')

clickListener.onclick = function() {
    clickCounter.value = parseInt(clickCounter.value) + 1
}

// Carousel
var carousel = new Siema()

document.querySelector('.carousel .prev').addEventListener('click', () => carousel.prev());
document.querySelector('.carousel .next').addEventListener('click', () => carousel.next());

// Ajax
const fetchData = document.getElementById('fetch-data')
fetchData.onclick = function() {
    let table = document.querySelector('#fetch-data-table tbody')
    table.innerHTML = ''

    var request = new XMLHttpRequest()

    request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true)
    request.onload = function() {
        if(request.status < 200 || request.status >= 400) return

        var response = JSON.parse(request.responseText)

        var template = document.getElementById('fetch-data-template')
        var cells = template.content.querySelectorAll('.cell')

        response.forEach(function(data) {
            cells[0].innerText = data.id
            cells[1].innerText = data.title
            cells[2].innerText = data.body

            let clone = document.importNode(template.content, true)
            var.appendChild(clone)

        })
    }

    request.send()
}