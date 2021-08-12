import { User } from './user';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics= ['Angular', 'React', 'Vue'];

  onClick(f: NgForm) {
  console.log(f)
  }

  userModel = new User('Abed', 'Abed@test.com',7325555555, '','morning', true);
}
