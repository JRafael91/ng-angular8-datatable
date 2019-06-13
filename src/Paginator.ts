import { Component, Input, SimpleChange, OnChanges, Optional } from '@angular/core';
import { DataTable, PageEvent } from './DataTable';

@Component({
    selector: "sv-paginator",
    template: `<ng-content></ng-content>`
})
export class Paginator implements OnChanges {

    @Input("svTable") inputSVTable: DataTable;

    private svTable: DataTable;

    public activePage: number;
    public rowsOnPage: number;
    public dataLength: number = 0;
    public lastPage: number;

    public constructor(@Optional() private injectSVTable: DataTable) { }

    public ngOnChanges(changes: { [key: string]: SimpleChange }): any {
        this.svTable = this.inputSVTable || this.injectSVTable;
        this.onPageChangeSubscriber(this.svTable.getPage());
        this.svTable.onPageChange.subscribe(this.onPageChangeSubscriber);
    }

    public setPage(pageNumber: number): void {
        this.svTable.setPage(pageNumber, this.rowsOnPage);
    }

    public setRowsOnPage(rowsOnPage: number): void {
        this.svTable.setPage(this.activePage, rowsOnPage);
    }

    private onPageChangeSubscriber = (event: PageEvent) => {
        this.activePage = event.activePage;
        this.rowsOnPage = event.rowsOnPage;
        this.dataLength = event.dataLength;
        this.lastPage = Math.ceil(this.dataLength / this.rowsOnPage);
    };

}