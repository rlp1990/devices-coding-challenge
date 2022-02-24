import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Industry } from './models/industry';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

/**
 * Custom default data for Industry table
 */
const ELEMENT_DATA: Industry[] = [
  { id: '1', name: 'Textil' },
  { id: '2', name: 'Mobile' }
];

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent {

  // Defined columns of the Industry table
  displayedColumns: string[] = ['name', 'action'];

  // Sets the default data to the dataSource of the mat-table
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  // Access to table sorter element
  @ViewChild(MatSort) sort!: MatSort;

  // Access to table paginator element
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Actions required after the components have fully loaded in the view
  ngAfterViewInit() {

    // Link paginator to dataSource table
    this.dataSource.paginator = this.paginator;

    // Link sorter to dataSource table
    this.dataSource.sort = this.sort;
  }

  constructor() { }

  /**
   * Method to fetch input data from filter and filter data from table
   * @param event input data from filter input element
   */
  applyFilter(event: Event) {

    // Get value from the event of the HTML input element
    const filterValue = (event.target as HTMLInputElement).value;

    // Filter rows according to filter value
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
