import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-stopper',
    templateUrl: './stopper.component.html',
    styleUrls: ['./stopper.component.scss']
})
export class StopperComponent {
    public clickingButtonDates: Date[] = [];

    public addNewDateRecord(): void {
        this.clickingButtonDates.push(
            new Date()
        );
        console.log(this.clickingButtonDates);
    }

}
