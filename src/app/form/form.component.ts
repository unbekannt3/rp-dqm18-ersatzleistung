import { Component, OnInit } from "@angular/core";
import { Sportapp } from "../Sportapp";


@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  sportapp: Sportapp;
  ausgefuellt: boolean;
  constructor() {
    this.sportapp = new Sportapp();
  }

  ngOnInit() {}
 
  }

