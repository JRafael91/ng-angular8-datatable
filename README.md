# Table component with sorting and pagination for Angular

It is a update version of [@ricardorinco/ng-seven-datatable](https://github.com/ricardorinco/ng-seven-datatable) to use in Angular 8

## Installation

``` sh
npm i ng-angular8-datatable --save
```

## Usage example

### AppModule.ts

``` typescript
import { NgModule } from '@angular/core';
...
import { DataTableModule } from 'ng-angular8-datatable';

@NgModule({
    imports: [
        ...
        DataTableModule
    ],
    ...
})
export class AppModule {

}
```

### AppComponent.html

``` html

<table class="table table-striped" [svData]="data" #sv="svDataTable" [svRowsOnPage]="5">
    <thead>
    <tr>
        <th style="width: 20%">
            <sv-default-sorter by="name">Name</sv-default-sorter>
        </th>
        <th style="width: 50%">
            <sv-default-sorter by="email">Email</sv-default-sorter>
        </th>
        <th style="width: 10%">
            <sv-default-sorter by="age">Age</sv-default-sorter>
        </th>
        <th style="width: 20%">
            <sv-default-sorter by="city">City</sv-default-sorter>
        </th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor="let item of sv.data">
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td class="text-right">{{ item.age }}</td>
        <td>{{ item.city | uppercase }}</td>
    </tr>
    </tbody>
    <tfoot>
    <tr>
        <td colspan="4">
            <sv-bootstrap-paginator [rowsOnPageSet]="[5, 10, 25]"></sv-bootstrap-paginator>
        </td>
    </tr>
    </tfoot>
</table>
```

## API

### `svData` directive

- selector: `table[svData]`
- exportAs: `svDataTable`
- inputs
  - `svData: any[]` - array of data to display in table
  - `svRowsOnPage: number` - number of rows should be displayed on page (default: 1000)
  - `svActivePage: number` - page number (default: 1)
  - `svSortBy: any` - sort by parameter
  - `svSortOrder: string` - sort order parameter, "asc" or "desc"
- outputs
  - `svSortByChange: any` - sort by parameter
  - `svSortOrderChange: any` - sort order parameter

### `sv-default-sorter` component

- selector: `sv-default-sorter`
- inputs
  - `by: any` - specify how to sort data (argument for lodash function [_.sortBy ](https://lodash.com/docs#sortBy))

### `sv-bootstrap-paginator` component

Displays buttons for changing current page and number of displayed rows using bootstrap template (css for bootstrap is required). If array length is smaller than current displayed rows on page then it doesn't show button for changing page. If array length is smaller than min value rowsOnPage then it doesn't show any buttons.

- selector: `sv-bootstrap-paginator`
- inputs
  - `rowsOnPageSet: number` - specify values for buttons to change number of diplayed rows
