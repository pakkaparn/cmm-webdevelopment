$(document).ready(() => {
    // Change HTML Content
    const defaultName = $('#your_name').text()
    $('#form').submit(e => {
        e.preventDefault()

        let name = $('#name').val().trim()

        if(name.length === 0) name = defaultName

        $('#your_name').text(name + '.')

        return false
    })

    // Event listener
    const clickListener = $('#click-listener')
    const clickCounter = $('#click-counter')

    clickListener.click(() => {
        let clicked = parseInt(clickCounter.val()) + 1
        clickCounter.val(clicked)
    })

    // Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        margin: 20,
        items: 1
    })

    // Ajax
    const source = $('#fetch-data-template').html()
    const template = Handlebars.compile(source)

    $('#fetch-data').click(() => {
        let table = $('#fetch-data-table tbody')
        table.html('')

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'get'
        }).done(response => {
            let html = template(response)

            $('#fetch-data-table tbody').html(html)
        })
    })

})