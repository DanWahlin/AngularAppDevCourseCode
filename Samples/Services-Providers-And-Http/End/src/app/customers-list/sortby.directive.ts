import { Directive, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Directive({
    selector: '[sortby]',
    host: {
        '(click)': 'onClick($event)'
    }
})
export class SortbyDirective implements OnInit {

    private _sortby: string;

    @Output() sorted: EventEmitter<string> = new EventEmitter<string>();

    @Input() set sortby(value: string) {
        this._sortby = value;
    }

    ngOnInit() { }

    onClick(event: any) {
        event.preventDefault();
        this.sorted.emit(this._sortby);
    }
}