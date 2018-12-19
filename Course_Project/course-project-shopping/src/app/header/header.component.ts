import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() headerClickEmit = new EventEmitter<string>();

    onSelect(feature: string) {
        this.headerClickEmit.emit(feature);
        // console.log('Inside recipes');
    }

}