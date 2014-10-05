$(function(){
     
    megaPriceChange();
    

})
var hash = document.URL.lastIndexOf("text");
hash = document.URL.substring(hash+5);
hash = parseInt(hash.substring(0,2), 36) / (36*36*36*36);
var follower = Math.round(hash*300000000);
var mentions = new Array("I like pizza", "Cheese is bad");
var rt = 2;
var fav = 3;
var posts = new Array("I like bananas", "I hate bananas", "terrible customer service", "I love Mcdonalds", "#lovingit");
var retweeted = new Array("#lovingit", "I love McDonalds", "terrible customer service", "amazing", "awesome")


var x = "" + priceChange(mentions, rt, fav, follower, posts);


function setVal(id, val){
 $('#' + id).text(val);   
}

function megaPriceChange(){

   

        
    var f = priceChange(mentions, hash, hash, hash, posts);   
    
    var favoritespos=0;
    var mentionspos=0;
    var retweetedpos=0;
    
    var favoritesneutral=0;
    var mentionsneutral=0;
    var retweetedneutral=0;
    
    var favoritesneg=0;
    var mentionsneg=0;
    var retweetedneg=0;
    
    for(var x in mentions){
                //Should be rt of mention, fav of mention
        if (neutrality(x)<0)
            mentionsneg++;
        else if(neutrality(x)>0)
            mentionspos++;
        else 
            mentionsneutral++;
    }
    
    for(var y in posts){
        if(neutrality(x)<0)
            favoritesneg++;
        else if(neutrality(x)>0)
            favoritespos++;
        else
            favoritesneutral++;
    }
    
    for(var z in retweeted){
        if(neutrality(x)<0)
            retweetedneg++;
        else if(neutrality(x)>0)
            retweetedpos++;
        else
            retweetedneutral++;
    }
    
    
    f=Math.round(f);
    
    setVal('rating', f*0.6+35);
    setVal('percentChange', f/10)
    
    //setVal('favorites-pos', favoritespos);
    //setVal('mentions-pos', mentionspos);
    //setVal('retweeted-pos', retweetedpos);
    
    //setVal('favorites-neutral', favoritesneutral);
    //setVal('mentions-neutral', mentionsneutral);
    //setVal('retweeted-neutral', retweetedneutral);
    
    //setVal('favorites-neg', favoritesneg);
    //setVal('mentions-neg', mentionsneg);
    //setVal('retweeted-neg', retweetedneg);
    
    setVal('followers', follower);
    setVal('percentFav', Math.round((((mentionsneg+mentionsneutral+mentionspos+34)*2043226)/follower))/100 + 80);
    //setVal('percentMentioned', Math.round((((mentionsneg+mentionsneutral+mentionspos+23)*34434953)/follower))/100-20, 2);
    setVal('percentMentioned', 17.39);

    setVal('percentRetweeted', Math.round((((mentionsneg+mentionsneutral+mentionspos+10)*14432423)/follower))/100 );
    
    setVal('percentCorr', 90 - Math.round(hash*100.8+12,2), 2)
}

function priceChange(mentions, rt, fav, follower, posts){
    
    var k = 100
    
    var tCount = 0;
    
    for(var x in mentions){
        
        tCount = rt*10 + fav*2;
        //Should be rt of mention, fav of mention
        
        if(neutrality(x))
            continue;
        else if (!neutrality(x))
            tCount*=-1;
        else
            tCount /= 2;
    }
    
    for(var y in posts){
        
        tCount += rt*10 + fav*2;
        tCount *= (rt + fav)/follower;
        
    }
        
    return tCount * k;
 
}

function neutrality(tweet){
    
    var badWords = new Array("dare", "bad", "horrible", "dirty", "hate")
    var goodWords = new Array("helpful", "fun", "like", "good", "loving")
    
    for(var x in badWords){
        if(tweet.toLowerCase().indexOf(x) > -1)
        {
            console.log(-1)
            return -1;
            
        }
    }
            
    for(var y in goodWords){
        if(tweet.toLowerCase(indexOf(String.ignoreCase(x)) > -1));
            return 1;
    }
    
    return 0;
}