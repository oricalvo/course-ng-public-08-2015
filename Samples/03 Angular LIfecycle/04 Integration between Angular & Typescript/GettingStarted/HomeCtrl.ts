/// <reference path="typings/angularjs/angular.d.ts" />

class HomeCtrl {
    message: string;
    contacts: Contact[];

    constructor() {
        this.message = "Hello Angular";

        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }

    remove(index) {
        this.contacts.splice(index, 1);
    }
}

interface Contact {
    id: number;
    name: string;
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

