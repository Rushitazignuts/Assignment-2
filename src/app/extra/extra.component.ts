import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FetchapiService } from '../fetchapi.service';
@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss'],
})
export class ExtraComponent implements OnInit {
  displayedColumns: any[] = [
    'title',
    'platform',
    'score',
    'genre',
    'editors_choice',
  ];
  dataSource!: MatTableDataSource<any>;

  displaydata: any;

  @ViewChild(MatSort) sort!: MatSort;
  constructor(private user: FetchapiService) {}
  ngOnInit() {
    this.user.displaydata().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);

      this.dataSource.sort = this.sort;
      console.log(data);
    });
  }
}
