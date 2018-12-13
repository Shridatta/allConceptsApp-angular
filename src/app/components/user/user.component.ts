import { Component } from "@angular/core";

import { User } from "./models/User";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  // Properties
  user: User;

  // Methods
  constructor() {
    this.user = {
      firstName: "Shridatta",
      lastName: "Zamjare",
      age: 30,
      address: {
        street: "153 beacon avenue",
        city: "Jersey City",
        state: "NJ"
      }
    };
  }
}
