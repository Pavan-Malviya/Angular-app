import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent {
  data: any = [];
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe((data) => {
      // console.log(data.data.cards[2].data.data.cards[0].data.name);
      this.data = data;
      console.log(data);
      // console.log(data.data?.cards[2]?.data?.data?.cards);
    });
  }
}
