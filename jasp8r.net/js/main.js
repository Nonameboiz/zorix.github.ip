$(document).ready(function() {
    var plinks = [
       	       	{
            name: 'xxxVladozxxx',
            plink: 'https://vk.com/genchildren'
        },
		{
            name: 'derripo',
            plink: 'https://vk.com/derripo'
       },       
	   {
            name: 'anya',
            plink: 'https://vk.com/choiseul0'
        },
		{
            name: 'ripfake',
            plink: 'https://vk.com/id450413050'
		},
        {
            name: 'Zorix',
            plink: 'https://vk.com/kid404'
        },
        {
            name: 'Oake',
            plink: 'https://vk.com/kid404'

        },
		];    
	
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '" target="_blank">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' - ')
        }
    }
    $('#marquee').marquee({
        duration: 7000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })

	window.SetVolume = function(val)
	{
    var player = document.getElementById('video');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
	}
	
	});