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
  indexOfLibrary!: any;
  countOfIndex: any = 0;
  constructor(
    private session: SessionService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.getAllRead();
  }

  getAllRead() {
    return this.profileService.getAllRead().subscribe((data) => {
      this.indexOfLibrary = data;
      console.log(this.indexOfLibrary);

      for (const item of data) {
        this.getReadIndividualRequest(item.work);
      }
      this.countOfIndex = this.indexOfLibrary.length;
      console.log(this.values);
    });
  }
  getReadIndividualRequest(bookId: string) {
    return this.profileService.getBookData(bookId).subscribe((data) => {
      this.values.push(data);
    });
  }
}
