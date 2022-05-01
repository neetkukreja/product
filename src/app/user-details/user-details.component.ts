import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { UsersserviceService } from '../shared/usersservice.service';
import { PeopleMockData } from '../shared/people-mock';
import { BasePortalHost, BasePortalOutlet } from '@angular/cdk/portal';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = PeopleMockData;

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})

export class UserDetailsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  movieReviews = {
    Arrival: 9.5,
  };
  answer1: any = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  userMockData: any;

  constructor(private userService: UsersserviceService) {

  }



  ngOnInit(): void {


    this.userMockData = this.userService.users();
    //=========================================================================


  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  // names = ['a', 'b']


  //  print 

  //  My name is a
  //  My name is b


  //names = [{ name: 'Sunia', age: '30'}, {name: 'Puneet', age: 28}]
  // Print
  // my name is sunia and age is 30.
  // my name is 'puneet' and age is 28





}

