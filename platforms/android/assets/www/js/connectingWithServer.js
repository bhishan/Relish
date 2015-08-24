/**
 * Created by bhishan on 8/22/15.
 */


function populateEventsFromServer(){
    $("#eventsFromServer").html('');
    var result = '';
    for(var i=0;i <10; i++){
        result +=    '<div class="nd2-card">' +
        '<div class="card-title"> ' +
            '<h3 class="card-primary-title">Event Name</h3> ' +
            '<h5 class="card-subtitle">Organizer, Location</h5> ' +
            '</div>'+
    '<div class="card-media">' +
    '<img src="img/examples/card_bg_1.jpg"></div>' +
    '<div class="card-supporting-text">' +
    'Cards are a convenient means of displaying content composed of different elements. They are also well-suited for showcasing elements whose size or supported actions vary, like photos with captions of variable length.'+
    '</div>' +
            '<div class="card-action"> ' +
            '<div class="row between-xs"> ' +
            '<div class="col-xs-4"> ' +
            '<div class="box"> ' +
            '<a href="#" class="ui-btn ui-btn-inline ui-btn-fab"><i class="zmdi zmdi-mic"></i></a> ' +
        '<a href="#" class="ui-btn ui-btn-inline ui-btn-fab"><i class="zmdi zmdi-videocam"></i></a> ' +
        '</div> ' +
        '</div> ' +
        '<div class="col-xs-8 align-right"> ' +
        '<div class="box"> ' +
        '<a href="#" class="ui-btn ui-btn-inline">Action</a> ' +
        '</div> ' +
        '</div> ' +
        '</div> ' +
        '</div>'  +  '</div>'

    }
    var result2 = '';

    for(var i=0;i<10;i++){
        result2 +=
            '<div class="nd2-card">' +
            '<div class="card-media">' +
            '<img src="img/examples/card_bg_2.jpg"></div>' +
            '<div class="card-supporting-text">' +
            'Cards are a convenient means of displaying content composed of different elements. They are also well-suited for showcasing elements whose size or supported actions vary, like photos with captions of variable length.'+
            '</div>' +
            '</div>'
    }

    result = result + result2;
    $('#eventsFromServer').html(result);
}

function populateUserInfoInPanel(){
    $("#username-in-panel").html('');
    var userName = window.localStorage.getItem("userName") || "Guest";
    var userRole = window.localStorage.getItem("userRole") || "User Role: Guest";
    var result = '<strong>' + userName + '</strong>' + '<strong>'+userRole+'</strong>';
    $("#username-in-panel").html(result);
}