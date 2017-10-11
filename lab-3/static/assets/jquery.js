$(document).ready(function() {
    // Change HTML Content
    var defaultName = $('#your_name').text()
    $('#form').submit(function(e) {
        e.preventDefault()

        var name = $('#name').val().trim()

        if(name.length === 0) name = defaultName

        $('#your_name').text(name + '.')

        return false
    })

    // Event listener
    var clickListener = $('#click-listener')
    var clickCounter = $('#click-counter')

    clickListener.click(function() {
        var clicked = parseInt(clickCounter.val()) + 1
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
    var source = $('#fetch-data-template').html()
    var template = Handlebars.compile(source)

    $('#fetch-data').click(function() {
        var table = $('#fetch-data-table tbody')
        table.html('')

        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'get'
        }).done(function(response) {
            var html = template(response)

            $('#fetch-data-table tbody').html(html)
        })
    })

})