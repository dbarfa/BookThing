import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { IBook } from '../models/IBook';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  model!: IBook[];
  values: any = [];
  query!: any;
  p: number = 1;

  constructor(
    private show: SearchService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // Without this the app will not reload the components whenever i change the query params
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params) => {
      this.query = params;
      console.log(this.query.q);
    });
    this.getApiThing();
  }

  getApiThing() {
    this.show.get(this.query).subscribe((data) => {
      console.log(data);
      this.values = data;
    });
  }
}