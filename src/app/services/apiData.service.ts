import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GetApiDataService {

  private infoUrl: string = 'https://api.publicapis.org/entries';

  constructor(private http: HttpClient) {
  }

  getUrlData(title?: string): Observable<any> {
    if (title) {
      return this.http.get(this.infoUrl, { params: {title}});
    } else {
      return this.http.get(this.infoUrl);
    }
  }
}

