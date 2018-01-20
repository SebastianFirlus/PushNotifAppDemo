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
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
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

document.addEventListener('deviceready', function() {
    //the callBack function called when we click on the notification received
    var notificationOpenedCallback = function(jsonData)
    {
        alert("Notification is received!");
    };
    /*window.plugins.OneSignal
        .startInit("a03543b7-4970-497f-9e7c-374dd60ca52a")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();*/
    //init function to use OneSignal service (Your APP ID) and GCM sender ID
    window.plugins.OneSignal.init("a03543b7-4970-497f-9e7c-374dd60ca52a",
        {googleProjectNumber: "2093598546"},
        notificationOpenedCallback);
    //subscribe to the service
    window.plugins.OneSignal.setSubscription(true);
    //activating the reception of push notification when the app is working also
    window.plugins.OneSignal.enableNotificationsWhenActive(true);
}, false);