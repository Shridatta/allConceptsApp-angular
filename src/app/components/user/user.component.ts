import { Component } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  //properties
  firstName = "Shridatta";
  lastName = "Zanjare";
  age = 25;
  address = {
    street: "153 Beacon Avenue",
    city: "Jersey city",
    State: "NJ"
  };

  //methods
  nextYear() {
    return this.age + 1;
  }

  constructor() {}
}
