var HEARTHIS_TEMPLATE = '<iframe scrolling="no" width="100%" height="150" src="https://hearthis.at/embed/%id%/transparent_black/?hcolor=&color=&style=2&block_size=1&block_space=1&background=1&waveform=0&cover=0&autoplay=0&css=" frameborder="0" allowtransparency></iframe>'
var MIXCLOUD_TEMPLATE = '<iframe width="100%" height="120" src="https://www.mixcloud.com/widget/iframe/?feed=%id%&hide_cover=1" frameborder="0"></iframe>'

$(function() {
    // Player 
    $('#content > a.episode').click(function(e) {
        e.preventDefault()
        var episode = $(this)
        var player = $('#player')
        var playerType = episode.attr('data-player-type')
        var playerData = episode.attr('data-player-data')

        if (playerType == 'hearthis') {
            player.html(HEARTHIS_TEMPLATE.replace('%id%', playerData))
        } else if (playerType == 'mixcloud') {
            player.html(MIXCLOUD_TEMPLATE.replace('%id%', playerData))
        } else {
            console.log('Unknown player: ' + playerType)
        }
        $('#content > a.episode.selected').removeClass('selected');
        episode.addClass('selected');
    })
    $('#content > a.episode:first-child').click()

    // Filter
    $('#episode-filter > a').click(function(e) {
        e.preventDefault()
        showEpisodeType = $(this).attr('data-show')
        $('#content > a.episode').each(function() {
            episodeType = $(this).attr('data-episode-type')
            if (showEpisodeType === 'everything' || episodeType === showEpisodeType) {
                $(this).show()
            } else {
                $(this).hide()
            }
        })

        $('#episode-filter > a').removeClass('selected')
        $(this).addClass('selected')
    })
    $('#episode-filter > a:first-child').click()

    // Timezone
    var podcastPMHourUTC = 17
    var timezoneOffset = parseInt((new Date()).getTimezoneOffset() * -1 / 60)
    var timezoneSign = timezoneOffset < 0 ? '–' : '+'
    var timeFormat = (podcastPMHourUTC + timezoneOffset) + ':00 (UTC' + timezoneSign + Math.abs(timezoneOffset) + ')'
    $('#podcast-airtime').text(timeFormat)
})
