import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Sportapp } from "./Sportapp";

@Injectable()
export class DataService {
  sportapp: Sportapp[] = [];
  router: Router;
  ausgefuellt: boolean;

  constructor(router: Router, private http: HttpClient) {}

  remove(sportapp: Sportapp) {
    this.sportapp = this.sportapp.filter(g => g.ligaName !== sportapp.ligaName);
  }
  async loadDescriptionAndImagefromServer(sportapp: Sportapp) {
    const url1 = "https://www.openligadb.de/Datenhaushalt/";
    let url2 = "";

    let response1 = await this.http.get(url1 + sportapp.ligaName);
    let response2 = await this.http.get(url2 + sportapp.ligaName);

    console.log("loading ligaName");
    response1.subscribe(data => {
      sportapp.ligaName = data["liga"];
      console.log(sportapp.ligaName);
    });
  }
}
