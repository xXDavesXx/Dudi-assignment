import { Component } from '@angular/core';
import {GetApiDataService} from "./services/apiData.service";
import {ApiDataIfc} from "./interfaces/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cardsData: ApiDataIfc[] = [];

  constructor(private getDataService: GetApiDataService) {
    this.getApiData();
  }

  getApiData(): void {
    this.getDataService.getUrlData().subscribe( (data: any) => {
      this.cardsData = data.entries.map((card: any) => {
        return {
          api: card.API,
          description: card.Description,
          auth: card.Auth,
          isHttps: card.HTTPS,
          cors: card.Cors,
          link: card.Link,
          category: card.Category,
        }
      });
    });
  }

  filterCards(key: any): void {
    this.getDataService.getUrlData(key).subscribe( (data: any) => {
      this.cardsData = data.entries.map((card: any) => {
        return {
          api: card.API,
          description: card.Description,
          auth: card.Auth,
          isHttps: card.HTTPS,
          cors: card.Cors,
          link: card.Link,
          category: card.Category,
        }
      });
    });
  }
}
