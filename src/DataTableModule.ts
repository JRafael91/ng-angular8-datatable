import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DataTable } from './DataTable';
import { DefaultSorter } from './DefaultSorter';
import { Paginator } from './Paginator';
import { BootstrapPaginator } from './BootstrapPaginator';

@NgModule({
    declarations: [
        BootstrapPaginator,
        DataTable,
        DefaultSorter,
        Paginator
    ],
    exports: [
        BootstrapPaginator,
        DataTable,
        DefaultSorter,
        Paginator
    ],
    imports: [CommonModule]
})
export class DataTableModule { }