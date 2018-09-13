$(function(){
    populateButtons(searchArray, 'searchButton', '#buttonsArea');
    console.log("Page Loaded");
})

var searchArray = ["Dog", "Cat", "Bird"];

function populateButtons(searchArray, classToAdd, areaToAdd){
    $(areaToAddTo).empty();{{
    for(var i=0;i<searchArray.length;i++){
        var a = $('<buton>');
        a.addClass(classToAdd);
        a.attr('data-type', searchArray[1]);
        a.text('searchArray [i]);
        $(areaToAdd).append(a);
    }
}

$(document).on('click', 'searchButton' function(){
    $('#searches').empty();
    var type = $(this).data('type');
    var queryURL = 'http://api.giphy.com/v1/gifs/searching?q='+type+'&api_key=7a64da98b6214751848c361f918eff51'; 
    $.ajax(url:queryURL,method: 'GET'})
        .done(function(response){
            for(var i=0;i,response.data.length;i++){
                var searchDiv = $('<div class="search-item">');
                var rating = response.data[i].rating;
                var p = $('<p>').text('Rating: '+rating);
                var animated = respone.data[i].images.fixed_height.url;
                var still = respone.data[i].images.fixed_height_still.url;
                var image = $('<img>');
                image.attr('src',still);
                image.attr('data-still',still);
                image.attr('data-animated',animated);
                image.attr('data-state',still);
                image.addClass('searchImage');
                searchDiv.append(p);
                searchDiv.append(image);
                $('searches').append(searchDiv);
            }
        })
    })

$(document).on('click','searchImage',function(){
    var state = $(this).attr('data-state');
    if(state == 'still'){
        $(this).attr('src',$(this).data('animated'));
        $(this).attr('data-state','animated');
    } else{
        $(this).attr('src',$(this).data('still'));
        $(this).attr('data-state','still');
    }
})

$('#addSearch').on('click' ,function(){
    var newSearch = $('input').eq(0).val();
    searchArray.push(newSearch);
    populateButtons(searchArray, 'searchButton', '#buttonsArea');
    return false;
})
