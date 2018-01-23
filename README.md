# PushNotifAppDemo

Eine Push Benachrichtigung ist eine Nachricht, die von einem Backend Server oder einer Anwendung an eine mobile Anwendung oder Desktop Anwendung gesendet wird. Bei eine Push Benachrichtigung sendet ein Server eine Nachricht, auch wenn der Client keine Anfrage sendet.

## Use Cases
***
Push Benachrichtigungen werden genutzt um die Aufmerksamkeit eines Nutzers durch eine Information zu erlangen. Häufig wird dies bei Chatnachrichten, E-Mails, Erinnerungen etc. genutzt. Benachrichtigungen und Darstellungen sind plattformabhängig. In diesem Beispiel geht es lediglich um das Backend und nicht um die Darstellung der Benachrichtigung. Die Push Benachrichtigung wird über die Anbieterinfrastruktur gesendent, zum Beispiel Worklight Server (iPhone) oder Google Cloud Message (Android).

Wichtiger Hinweis: Nachfolgendes Beispiel wurde mit Cordova entwickelt, über den Anbieter Google Cloud Message. Es ist bei diesem Service nicht möglich Push Benachrichtigungen im Browser anzuzeigen, ein Emulator ist zwingend erforderlich. Dies liegt daran, dass das Backend für Push Benachrichtigungen Anbieter abhängig ist. Ein Beispiel für nur Andorid Geräte kann unter diesem Link geladen werden: [AndroidPushNotifDemo](https://github.com/SebastianFirlus/AndroidPushNotifDemo)

## Konfiguration (Google Cloud Message)
***
Im ersten Schritt muss ein neues Firebase Projekt bzw. Google Projekt angelegt werden, um sich beim Anbieter zu registrieren und eine Google Projektnummer und einen Serverschlüssel zu erhalten.
[Google Projekt](https://console.developers.google.com)
[Firebase](https://firebase.google.com/)

Als Sender-Service für die Push Benachrichtigungen wird an dieser Stelle [OneSignal](https://onesignal.com/) verwendet. Unter OneSignal muss die eigene App mit der Google Prokjektnummer und dem Serverschlüssel registriert werden. Dadurch lässt sich eine App ID generieren, welche im Quellcode später benötigt wird.

Nach dem Installieren des OneSignal Plugins kann man sich mit folgendem Quellcode in der index.js zu dem Dienst verbinden:
```javascript
document.addEventListener('deviceready', function() {
    var notificationOpenedCallback = function(jsonData) {
        alert("Notification is received!");
    };
    window.plugins.OneSignal.init("a03543b7-4970-497f-9e7c-374dd60ca52a",
        {googleProjectNumber: "2093598546"},
        notificationOpenedCallback);
    window.plugins.OneSignal.setSubscription(true);
    window.plugins.OneSignal.enableNotificationsWhenActive(true);
}, false);
```

## Links
***
[OneSignal Dokumentation](https://documentation.onesignal.com/docs)|
[OneSignal für Andorid](https://documentation.onesignal.com/docs/android-sdk-setup)|
[OneSignal für iOS](https://documentation.onesignal.com/docs/ios-sdk-setup)|
[OneSignal für Cordova](https://documentation.onesignal.com/docs/cordova-sdk-setup)