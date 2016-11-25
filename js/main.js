// var HEARTHIS_TEMPLATE = '<iframe scrolling="no" width="100%" height="145" src="https://hearthis.at/embed/%id%/" frameborder="0"></iframe>';
var HEARTHIS_TEMPLATE = '<iframe scrolling="no" width="100%" height="150" src="https://hearthis.at/embed/%id%/transparent_black/?hcolor=&color=&style=2&block_size=1&block_space=1&background=1&waveform=0&cover=0&autoplay=0&css=" frameborder="0" allowtransparency></iframe>'

$(function() {
    $('.episode-content').addClass('hidden');

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

    var podcastPMHourUTC = 17;
    var timezoneOffset = parseInt((new Date()).getTimezoneOffset() * -1 / 60);
    var timezoneSign = timezoneOffset < 0 ? '–' : '+';
    var timeFormat = (podcastPMHourUTC + timezoneOffset) + ':00 (UTC' + timezoneSign + Math.abs(timezoneOffset) + ')'
    $('#podcast-airtime').text(timeFormat);
});
