angular.module("MyApp", []).config(function ($locationProvider, contactServiceProvider) {
    $locationProvider.html5Mode(true);

    window.contactServiceProvider = contactServiceProvider;

    contactServiceProvider.enableCaching(true);
});

