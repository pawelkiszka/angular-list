import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListItem } from '../../models/list-item.model';

@Component({
    selector: 'app-list-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {

    @Input()
    public listItem: ListItem;

    @Output()
    public buttonClick: EventEmitter<number> = new EventEmitter();

}
