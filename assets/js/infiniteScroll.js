$().ready(function() {
    var page = 2;
    var url_blog = window.location;
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $.get(
                (url_blog + '/page/' + page),
                function(content) {
                    if (page <= max_pages) {
                        $('.post-grid').append($(content).find("article"));
                        page = page + 1;
                    }
                }
            );
        }
    });
});
