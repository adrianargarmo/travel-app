import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SafePlaceApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://test.api.amadeus.com/v1/safety/safety-rated-locations';
  private tokenUrl = `https://test.api.amadeus.com/v1/security/oauth2/token`;

  getToken() {
    let bearerToken: string = '';

    const data = 'grant_type=client_credentials&client_id=7OMZliww7si2JQakqKTENzuODykHNxJe&client_secret=lpGgD5vZaeac3his'; // key vaults in azure

    const header1 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    console.log(`token url:${this.tokenUrl}`);

    return this.http.post(this.tokenUrl, data, { headers: header1 });
  }

  getSafePlaceInformation(latitude: number, longitude: number, radius: number, bearerToken: string) {
    const header2 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${bearerToken}`
    });
    console.log(`Bearer ${bearerToken}`)
    
    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&radius=${radius}&page[limit]=10`;
    return this.http.get(url, { headers: header2 });
  }
}