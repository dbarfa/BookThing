import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { IBook } from '../models/IBook';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  model!: IBook[];
  values: any = [];
  constructor(private show: SearchService) {}

  ngOnInit(): void {
    this.getApiThing();
  }

  getApiThing() {
    this.show.get().subscribe((data) => {
      console.log(data);
      this.values = data;
    });
  }
}
