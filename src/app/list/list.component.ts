import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Sportapp } from '../Sportapp';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  ngOnInit() {
  }

get sportapp(): Sportapp[] {
    return this.dataservice.sportapp;
  }

}