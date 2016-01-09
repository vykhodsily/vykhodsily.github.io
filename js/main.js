var HEARTHIS_TEMPLATE = '<iframe scrolling="no" width="100%" height="145" src="https://hearthis.at/embed/%id%/transparent/" frameborder="0" allowtransparency></iframe>';
var MIXCLOUD_TEMPLATE = '<iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?embed_type=widget_standard&amp;embed_uuid=#uuid#&amp;feed=#feed#&amp;hide_cover=1&amp;hide_tracklist=1&amp;mini=1&amp;replace=0" frameborder="0"></iframe><div style="clear: both; height: 3px; width: auto;"></div><p style="display: block; font-size: 11px; font-family: \'Open Sans\', Helvetica, Arial, sans-serif; margin: 0px; padding: 3px 4px; color: rgb(153, 153, 153); width: auto;"><a href="https://www.mixcloud.com/SpecialRequest/vykhod-sily-podcast-069/?utm_source=widget&amp;utm_medium=web&amp;utm_campaign=base_links&amp;utm_term=resource_link" target="_blank" style="color:#808080; font-weight:bold;">Vykhod Sily Podcast 069</a><span> by </span><a href="https://www.mixcloud.com/SpecialRequest/?utm_source=widget&amp;utm_medium=web&amp;utm_campaign=base_links&amp;utm_term=profile_link" target="_blank" style="color:#808080; font-weight:bold;">Vykhod Sily Podcast</a><span> on </span><a href="https://www.mixcloud.com/?utm_source=widget&amp;utm_medium=web&amp;utm_campaign=base_links&amp;utm_term=homepage_link" target="_blank" style="color:#808080; font-weight:bold;"> Mixcloud</a></p><div style="clear: both; height: 3px; width: auto;"></div>'

$(function() {
    $('.episode-content').addClass('hidden');
});
$(function() {
    $('.episode > h2:first-child a').click(function(e) {
        e.preventDefault();
        var episode = $(this).parent().parent()
        var episodeContent = episode.find('.episode-content').first();

        if (episodeContent.hasClass('hidden')) {
            var player = episode.find('.hearthis-player');
            if (player.length > 0) {
                player.html(HEARTHIS_TEMPLATE.replace('%id%', player.first().attr('data-hearthisid')));
            } else {
                player = episode.find('.mixcloud-player').first();
                var mixcloudUUID = player.attr('data-mixcloud-uuid');
                var mixcloudFeed = player.attr('data-mixcloud-feed');
                player.html(MIXCLOUD_TEMPLATE.replace('#uuid#', mixcloudUUID).replace('#feed#', mixcloudFeed));
            }
            episodeContent.removeClass('hidden');
        } else {
            var player = episode.find('.hearthis-player').html('');
            if (player.length > 0) {
                player.first.html('');
            } else {
                episode.find('mixcloud-player').first().html('');
            }
            episodeContent.addClass('hidden');
        }
    });
});
