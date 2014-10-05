var $jq = jQuery.noConflict();
$jq('.r_orb').hide();

getTweets("banana");

function getTweets(searchString) {
    
    document.writeln("banana");
    
    var rowCount = '75';
    $jq.ajax({
    urlhttps: 'http://search.twitter.com/search.json?q='+searchString+'&rrp='+rowCount,
    dataType: 'jsonp',
    
    success: function(_json) {
    
        document.writeln("banana");
    
        $jq('#twitList ul').remove();
        $jq('#twitList').append('<ul></ul>');
        var $listItems = $jq('#twitList').find('ul');
        $jq.each(_json.results, function(key) {
            var html = '<img class = "t_icon" src="'+_json.results[key].profile_image_url+'"/>';
            html+= '<div class="t_body">'+_json.results[key].text + '</div>';
            html += '<p class="p_italics">From: ' +_json.results[key].from_user + ' Created: '+_json.results[key].created_at+'</p>';
        
            $listItems.append('<li>' + html + '</li>');
        
        });
    //$jq('#b1').html('Search <img class = "button1" src=\'images/$$generic.orb.green.png.a5image\'/>');
}
    });
}

