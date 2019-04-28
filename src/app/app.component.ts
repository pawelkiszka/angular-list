import { Component } from '@angular/core';
import { ListItem } from './models/list-item.model';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {

    public selectedItemId: number;

    public listItems: ListItem[] = [
        {
            id: 1,
            name: 'Kanapka'
        },
        {
            id: 2,
            name: 'Owca'
        },
        {
            id: 3,
            name: 'Lama'
        },
        {
            id: 4,
            name: 'Worek'
        },
        {
            id: 5,
            name: 'Pudelek'
        }
    ]

    public itemSelected(itemId: number) {
        this.selectedItemId = itemId;
    }
}


class Example {
    // zmienne klasy / statyczne
    public static NAME: string;
    private static VALUE: number;

    // zmienne obiektu
    public name: string;
    public item: object;

    private subscription: Subscription;

    // metody klasy statyczne


    // metody obiektu
    public getName(): string {
        return 'dupa';
    }
    
    public checkState(): void {
        this.checkSomething();
    }

    private checkSomething(): void {
    }
}


new Example().getName()



