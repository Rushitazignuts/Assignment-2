import { Component } from '@angular/core';
import { FetchapiService } from './fetchapi.service';
import { api } from './api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataSource: any;
  title = 'Visually interactive listing of all the games';

  displaydata: any;
  constructor(private user: FetchapiService) {
    this.user.displaydata().subscribe((data) => {
      console.log(data);
      this.displaydata = data;
    });
  }

  nameValue(title: any) {
    if (title === '' || title.length === 0) {
      this.user.displaydata().subscribe((data) => {
        console.log(data);
        this.displaydata = data;
      });
     } else {
      this.displaydata = this.displaydata.filter(
        (row: api) => row.title === title
      );
      console.log(this.displaydata);
    }
  }
}
