/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
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
        window.location.hash = "#login";

        $( document ).on( "swipeleft swiperight", "#demo-page", function( e ) {
            // We check if there is no open panel on the page because otherwise
            // a swipe to close the left panel would also open the right panel (and v.v.).
            // We do this by checking the data that the framework stores on the page element (panel: open).
            if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
                if ( e.type === "swipeleft"  ) {
                    $( "#right-panel" ).panel( "open" );
                } else if ( e.type === "swiperight" ) {
                    $( "#left-panel" ).panel( "open" );
                }
            }
        });


        //getEventsFromServer();

        $('#btnViewItem').on('click', function(e){
            alert("bhishan");
            window.location.hash = "#itemList";
        });

        $('#LoginButton').on('click', function(e){
            getEventsFromServer();
           window.location.hash = "#homeScreen";
        });

        $('#LoginAsGuest').on('click', function(e){
            getEventsFromServer();
           window.location.hash = "#homeScreen";
        });

        $('#signup').on('click', function(e){
            window.location.hash = "#personalInformation";
        })

        app.receivedEvent('deviceready');
    },

    onBackKeyDown:function() {
        var hashId = window.location.hash;
        var exitConfirmation;
        if (hashId == null || hashId == "" || hashId == "#homeScreen" || hashId == "#login") {
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

function getEventsFromServer(){
    $('#dashboardContainer').html('');
    var result = "";
    for (var i = 0; i<10;i ++){
        result += '<li class="left-content"><a class="ui-btn ui-icon-eye ui-btn-icon-top" href="#" data-transition="pop">View Item</a></li>'+
        '<li class="middle-content"><a class="ui-btn ui-icon-star ui-btn-icon-top" href="#" data-transition="pop">View Transaction</a></li>'+
        '<li class="right-content"><a class="ui-btn ui-icon-plus ui-btn-icon-top" href="#" data-transition="pop" >Add Item</a></li>'
    }
    $('#dashboardContainer').html(result);

    $('#dashboardContainer').find("a").click(function (e) {
        window.location.hash = "#itemList";
    });
}