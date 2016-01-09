var HEARTHIS_TEMPLATE = '<iframe scrolling="no" width="100%" height="145" src="https://hearthis.at/embed/%id%/" frameborder="0"></iframe>';

$(function() {
    $('.episode-content').addClass('hidden');
});
$(function() {
    $('.episode > h2:first-child a').click(function(e) {
        e.preventDefault();
        var episode = $(this).parent().parent()
        var episodeContent = episode.find('.episode-content').first();
        var player = episode.find('.player').first();
        var playerType = player.attr('data-player-type');

        if (episodeContent.hasClass('hidden')) {
            if (playerType == 'hearthis') {
                player.html(HEARTHIS_TEMPLATE.replace('%id%', player.attr('data-hearthisid')));
            } else if (playerType == 'embed') {
                player.html(unescape(player.attr('data-embed')));
            }
            episodeContent.removeClass('hidden');
        } else {
            player.html('');
            episodeContent.addClass('hidden');
        }
    });
});
