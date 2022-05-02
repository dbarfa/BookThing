import { Component, OnInit } from '@angular/core';
import { Token } from '../models/token.model';
import { SessionService } from '../services/session.service';
import { ProfileService } from '../servicesAPI/profile.service';

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

  constructor(
    private session: SessionService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.getAllRead();
    this.getAllToRead();
  }

  getAllRead() {

    return this.profileService.getAllRead('read').subscribe((data) => {
      this.indexOfReadLibrary = data;

      for (const item of data) {
        this.getReadIndividualRequest(item.work);
      }
      this.countOfIndex = this.indexOfReadLibrary.length;
    });
  }
  getReadIndividualRequest(bookId: string) {
    return this.profileService.getBookData(bookId).subscribe((data) => {
      this.values.push(data);
    });
  }

  getReadIndividualRequestToRead(bookId: string) {
    return this.profileService.getBookData(bookId).subscribe((data) => {
      this.valuesToRead.push(data);
    });
  }

  getAllToRead() {
    return this.profileService.getAllRead('toread').subscribe((data) => {
      this.indexOfToReadLibrary = data;
      for (const item of data) {
        this.getReadIndividualRequestToRead(item.work);
      }
      this.countOfIntexToRead = this.indexOfReadLibrary.length;
      this.loading = false;
    });
  }
}
