var HEARTHIS_TEMPLATE = '<iframe scrolling="no" width="100%" height="145" src="https://hearthis.at/embed/%id%/transparent/" frameborder="0" allowtransparency></iframe>';

$(function() {
    $('.episode-content').addClass('hidden');
});
$(function() {
    $('.episode > h2:first-child a').click(function(e) {
        e.preventDefault();
        var episode = $(this).parent().parent()
        var episodeContent = episode.find('.episode-content').first();
        var player = episode.find('.hearthis-player').first();
        var hearthisID = player.attr('data-hearthisid');

        if (episodeContent.hasClass('hidden')) {
            player.html(HEARTHIS_TEMPLATE.replace('%id%', hearthisID));
            episodeContent.removeClass('hidden');
        } else {
            player.html('');
            episodeContent.addClass('hidden')
        }
    });
});
