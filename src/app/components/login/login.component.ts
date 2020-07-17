import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  signUpConfig = {
    header: "Registriere dich als Student",
    hideAllDefaults: true,
    defaultCountryCode: "1",
    signUpFields: [
      {
        label: "E-Mail Adresse",
        key: "email",
        required: true,
        displayOrder: 1,
        type: "string"
      },
      {
        label: "Passwort",
        key: "password",
        required: true,
        displayOrder: 2,
        type: "password"
      },
      {
        label: "Stadt",
        key: "city",
        required: false,
        displayOrder: 4,
        type: "string",
        custom: true
      }
    ]
  };
  constructor() {}

  ngOnInit() {}
}
