import { Component } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.css']
})
export class UserProfileComponentComponent {
  user: User = new User("Wilfried","Elvire","data:image/jpeg;base64,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")

  getFullName(): string {
    return `${this.user.firstName} ${this.user.lastName}`
  }
}