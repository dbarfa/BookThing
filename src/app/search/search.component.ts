import { Component, OnInit } from '@angular/core';
import { SearchService } from '../servicesAPI/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { ToastrService } from 'ngx-toastr';

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
  readData!: any;
  toReadData!: any;

  constructor(
    private searchService: SearchService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private toastr: ToastrService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // Without this the app will not reload the components whenever i change the query params
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params) => {
      this.query = params;
    });
    this.getApiBooks();
  }

  getApiBooks() {
    this.loading = true;
    this.searchService.get(this.query).subscribe((data) => {
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

  showSuccess(data: any, category: string) {
    this.toastr.success(' was added as ' + category, data.title, {
      progressBar: true,
      closeButton: true,
    });
  }

  showFailure(data: any, category: string) {
    this.toastr.error(' is already in ' + category, data.title, {
      progressBar: true,
      closeButton: true,
    });
  }

  postReadBook(data: any) {
    this.readData = { book: data.key, author: data.author_name?.[0] };
    this.searchService.readbutton(this.readData).subscribe({
      next: () => {
        console.log('ok');
        this.showSuccess(data, 'read');
      },
      error: () => {
        console.log('error');
        this.showFailure(data, 'read');
      },
    });
    console.log(this.readData);
  }

  postToReadBook(data: any) {
    this.toReadData = { book: data.key, author: data.author_name?.[0] };
    this.searchService.toreadbutton(this.toReadData).subscribe({
      next: () => {
        console.log('ok');
        this.showSuccess(data, 'to read');
      },
      error: () => {
        console.log('error');
        this.showFailure(data, 'to read');
      },
    });
    console.log(this.readData);
  }
}
