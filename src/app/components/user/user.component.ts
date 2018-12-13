import { Component } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent {
  //properties
  firstName = "Shridatta";
  LastName = "Zanjare";
  age = 25;

  //methods
  nextYear() {
    this.age += 1;
  }

  constructor() {
    console.log("constructor ran ");
    console.log("age now " + this.age);
    this.nextYear();
    console.log("age next september " + this.age);
  }
}
