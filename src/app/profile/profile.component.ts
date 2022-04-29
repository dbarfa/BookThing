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
      for (const item of data) {
        this.getReadIndividualRequest(item);
      }
      console.log(this.values);
    });
  }
  getReadIndividualRequest(bookId: string) {
    return this.profileService.getBookData(bookId).subscribe((data) => {
      this.values.push(data);
    });
  }
}
