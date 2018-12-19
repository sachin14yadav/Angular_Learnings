import { Component } from '@angular/core';

@Component ({
    selector: 'app-user',
    templateUrl: './assignment2.component.html',
})

export class Assignment2Component {
    username = '';
    isSubmitDisabled = true;

    constructor() {
    }

    checkInput(event: Event) {
        if (!( (<HTMLInputElement>event.target).value === '')) {
            this.isSubmitDisabled = false;
        } else {
            this.isSubmitDisabled = true;
        }
    }

        onSubmitClick() {
        this.username = '';
        this.isSubmitDisabled = true;
    }
}