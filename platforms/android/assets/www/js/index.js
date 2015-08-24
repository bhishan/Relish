/**
 * Created by bhishan on 8/17/15.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("backbutton", this.onBackKeyDown, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        populateUserInfoInPanel();
        populateEventsFromServer();


        //getEventsFromServer();

        app.receivedEvent('deviceready');
    },

    onBackKeyDown:function() {
        var hashId = window.location.hash;
        var exitConfirmation;
        if (hashId == null || hashId == "" || hashId == "#homepage" || hashId == "#login") {
            exitConfirmation = confirm("Are you sure you want to exit the application?");
            if (exitConfirmation == 1) {
                navigator.app.exitApp();
            }
        }
        else{
            navigator.app.backHistory();
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();