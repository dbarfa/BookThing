import { Component, OnInit } from '@angular/core';
import { Token } from '../models/token.model';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  decodedToken: Token = this.session.decodedToken;
  constructor(private session: SessionService) {}

  ngOnInit(): void {
    console.log(this.decodedToken);
  }
}
