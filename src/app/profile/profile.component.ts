import { Component, OnInit } from '@angular/core';
import { forkJoin, from, mergeMap, of, switchMap, switchScan, tap } from 'rxjs';
import { Token } from '../models/token.model';
import { SessionService } from '../services/session.service';
import { ProfileService } from '../servicesAPI/profile.service';
import { SearchService } from '../servicesAPI/search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  decodedToken: Token = this.session.decodedToken;

  values: any[] = [];
  valuesToRead: any[] = [];

  indexOfReadLibrary!: any;
  indexOfToReadLibrary!: any;

  countOfIndex: any = 0;
  countOfIntexToRead: any = 0;

  loading: boolean = true;
  imageLoader: boolean = true;

  toReadtransfer!: any;

  constructor(
    private session: SessionService,
    private profileService: ProfileService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    // this.getAllRead();
    // this.getAllToRead();

    forkJoin([
      this.profileService.getAllRead('read'),
      this.profileService.getAllRead('toread'),
    ]).subscribe(([data1, data2]) => {
      this.indexOfReadLibrary = data1;
      this.indexOfToReadLibrary = data2;

      // for (const item of data1) {
      //   this.getReadIndividualRequest(item.work);
      // }
      forkJoin([
        from(data1).pipe(
          mergeMap((d: any) =>
            this.profileService
              .getBookData(d.work)
              .pipe(tap((data) => this.values.push(data)))
          )
        ),
        from(data2).pipe(
          mergeMap((d: any) =>
            this.profileService
              .getBookData(d.work)
              .pipe(tap((data) => this.valuesToRead.push(data)))
          )
        ),
      ]).subscribe({ complete: () => (this.loading = false) });

      this.countOfIndex = this.indexOfReadLibrary.length;

      // for (const item of data2) {
      //   this.getReadIndividualRequestToRead(item.work);
      // }
      this.countOfIntexToRead = this.indexOfToReadLibrary.length;
    });
  }
  onLoad() {
    this.imageLoader = false;
  }
  // getReadIndividualRequest(bookId: string) {
  //   return this.profileService.getBookData(bookId).subscribe((data) => {
  //     this.values.push(data);
  //   });
  // }

  // getReadIndividualRequestToRead(bookId: string) {
  //   return this.profileService.getBookData(bookId).subscribe((data) => {
  //     this.valuesToRead.push(data);
  //   });
  // }

  deleteItem(data: any, category: string) {
    let dataBook: any = { book: data };

    this.profileService.deleteBook(dataBook, category).subscribe();
  }

  transferRead(data: any, data2: any) {
    this.toReadtransfer = { book: data, author: data2 };
    this.profileService.deleteBook(this.toReadtransfer, 'toread').subscribe();
    this.searchService.readbutton(this.toReadtransfer).subscribe((data) => {
      console.log(data);
    });
  }
  refresh(): void {
    window.location.reload();
  }
}
