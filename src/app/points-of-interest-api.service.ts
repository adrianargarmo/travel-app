import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PointsOfInterestApiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://test.api.amadeus.com/v1/reference-data/locations/pois';
  private tokenUrl = `https://test.api.amadeus.com/v1/security/oauth2/token`;

  getToken() {
    let bearerToken: string = '';

    const data = 'grant_type=client_credentials&client_id=q6NRArewG9t09p0bot6xPuDlacNT8ott&client_secret=IUkRW0VE5zJ4Ruj8'; // key vaults

    const header1 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    console.log(`token url:${this.tokenUrl}`);

    return this.http.post(this.tokenUrl, data, { headers: header1 });
  }

  getPointsOfInterestInformation(latitude: number, longitude: number, radius: number, bearerToken: string) {
    const header2 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${bearerToken}`
    });

    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&radius=${radius}&page[limit]=10`;
    return this.http.get(url, { headers: header2 });
  }

   
   getPointsOfInterestInformationWithCategory(latitude: number, longitude: number, radius: number, bearerToken: string, category: any[]) {
    const header3 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${bearerToken}`
    });

      const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&radius=${radius}&page[limit]=10&categories=${category}`;
      return this.http.get(url, { headers: header3 });    
   }
}