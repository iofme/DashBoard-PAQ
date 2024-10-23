import { Component, OnInit } from '@angular/core';
import { UserService } from '../_service/account.service';
import { CardComponent } from '../card/card.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-mural',
  standalone: true,
  imports: [HeaderComponent, CardComponent],
  templateUrl: './mural.component.html',
  styleUrl: './mural.component.css'
})
export class MuralComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
