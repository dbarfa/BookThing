import { Component, OnInit } from '@angular/core';
import { SearchService } from '../servicesAPI/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  values: any = [];
  query!: any;
  p: number = 1;
  loading: boolean = true;

  constructor(
    private show: SearchService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private session: SessionService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // Without this the app will not reload the components whenever i change the query params
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params) => {
      this.query = params;
    });
    this.getApiThing();
  }

  getApiThing() {
    this.loading = true;
    this.show.get(this.query).subscribe((data) => {
      this.values = data;
      this.loading = false;
    });
  }

  scrollOnChange(event: any) {
    this.p = event;
    // the setTimeout is a temp fix
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1);
  }
  getBook(data: any) {
    data = { book: data, id: this.session.decodedToken.id };
    console.log(data);
  }
}
