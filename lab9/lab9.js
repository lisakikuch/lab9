$(document).ready(function () {
    $('.column').fadeIn();

    $('#myBtnContainer .btn').click(function () {
        var filterClass = $(this).attr('onclick').match(/'([^']+)'/)[1];

        if (filterClass === 'all') {
            $('.column').fadeOut(100, function () {
                $('.column').fadeIn();
            });
        } else {
            $('.column').fadeOut(100).promise().done(function () {
                $('.' + filterClass).fadeIn();
            });
        }
        return false;
    });

});

$('.content img').click(function () {
    var imgSrc = $(this).attr('src');
    $('#lightboxImage').attr('src', imgSrc);
    $('#lightboxOverlay').fadeIn();
});

$('#closeLightbox, #lightboxOverlay').click(function (e) {
    if (e.target !== this) return;
    $('#lightboxOverlay').fadeOut();
});
