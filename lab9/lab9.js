$(document).ready(function () {
// Make sure the code will run after the entire page is loaded.
    $('.column').fadeIn();
    // Make all items will be visible with a fade-in effect.
    $('#myBtnContainer .btn').click(function () {
    // The code is executed when the button is clicked.
        var filterClass = $(this).attr('onclick').match(/'([^']+)'/)[1];
        // Extracts the filter class from the onclick attribute of the clicked button.
        if (filterClass === 'all') {
            $('.column').fadeOut(100, function () {
                $('.column').fadeIn();
            });
        // If the class is "all", all items are shown with an effect.
        } else {
            $('.column').fadeOut(100).promise().done(function () {
                $('.' + filterClass).fadeIn();
            });
        }
        // If the class is not "all", only the items matching "filterClass" are shown with an effect.
        return false;
    });

});

$('.content img').click(function () {
    // When an item is clicked, the code is executed.
    var imgSrc = $(this).attr('src');
    $('#lightboxImage').attr('src', imgSrc);
    // Get a source attribute of the clicked item.
    $('#lightboxOverlay').fadeIn();
    // Show the item with an effect.
});

$('#closeLightbox, #lightboxOverlay').click(function (e) {
    if (e.target !== this) return;
    $('#lightboxOverlay').fadeOut();
    // The item is hidden with an effect when the designated area is clicked.
});
