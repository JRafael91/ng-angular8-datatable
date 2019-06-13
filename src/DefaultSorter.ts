import { Component, Input, OnInit } from '@angular/core';
import { DataTable, SortEvent } from './DataTable';

@Component({
    selector: 'sv-default-sorter',
    template: `
        <a style="cursor: pointer" (click)="sort()" class="text-nowrap">
            <ng-content></ng-content>
            <span *ngIf="isSortedByMeAsc" class="glyphicon glyphicon-triangle-top fa fa-sort-up" aria-hidden="true"></span>
            <span *ngIf="isSortedByMeDesc" class="glyphicon glyphicon-triangle-bottom fa fa-sort-down" aria-hidden="true"></span>
        </a>
    `
})
export class DefaultSorter implements OnInit {

    @Input("by") sortBy: string;

    public isSortedByMeAsc: boolean = false;
    public isSortedByMeDesc: boolean = false;

    public constructor(private svTable: DataTable) { }

    public ngOnInit(): void {
        this.svTable.onSortChange.subscribe((event: SortEvent) => {
            this.isSortedByMeAsc = (event.sortBy == this.sortBy && event.sortOrder == "asc");
            this.isSortedByMeDesc = (event.sortBy == this.sortBy && event.sortOrder == "desc");
        });
    }

    public sort() {
        if (this.isSortedByMeAsc) {
            this.svTable.setSort(this.sortBy, "desc");
        } else {
            this.svTable.setSort(this.sortBy, "asc");
        }
    }

}