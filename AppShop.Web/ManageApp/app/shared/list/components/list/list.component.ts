import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { Sort } from '@angular/material';
import { ListConfig, ListColumn, Query } from './../../';
import fontawesome from '@fortawesome/fontawesome';
import solid from '@fortawesome/fontawesome-free-solid';
import regular from '@fortawesome/fontawesome-free-regular';

@Component({
    selector: "app-list",
    templateUrl: "./list.component.html"
})
export class ListComponent implements OnInit {
    @Input("isLoading") isLoading: boolean = false;
    @Input("config") config: ListConfig = new ListConfig;
    @Input("data") data: any = {
        items: [],
        totalItems: 0
    };
    @Output("onChange") onChangeHandler = new EventEmitter();
    @Output("onEvent") onEventHandler = new EventEmitter();

    displayedColumns: any = [];
    query: Query = new Query;

    constructor() {
        fontawesome.library.add(solid);
        fontawesome.library.add(regular);
    }


    ngOnInit(): void {
        this.displayedColumns = this.config.columnsCode;
        this.displayedColumns.push("actions");

        let sortColumn = this.config.getDefaultSortColumn();
        this.query.sortBy = sortColumn ? sortColumn.property : null
        this.query.limit = this.config.limit;

        this.onChange();
    }

    onChange(): void {
        this.onChangeHandler.emit(this.query);
    }

    onEvent(event: string, item: any): void {
        this.onEventHandler.emit({
            name: event,
            item: item,
            query: this.query
        });
    }

    onSortBy(sort: Sort): void {
        this.query.isSortAscending = sort.direction == "desc" ? false : true;
        this.query.sortBy = sort.active;

        this.onChange();
    }

    onPaginationChange(data: any): void {
        this.query.page = data.pageIndex + 1;
        this.query.limit = data.pageSize;

        this.onChange();
    }

}