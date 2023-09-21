import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PointsOfInterestApiService {
  
  constructor(private http: HttpClient) { }

  private apiKey = 'HyaD5EGAR6i4gy1Zy1zMbDAfNHLd5WAM'; // client_id
  private apiSecret = "yWoll4AQNWb5oueS"; // client_secret
  private apiUrl = 'https://test.api.amadeus.com/v1/reference-data/locations/pois';
  private tokenUrl = `https://test.api.amadeus.com/v1/security/oauth2/token`;

  getToken() {
    let bearerToken: string = '';

    const data = 'grant_type=client_credentials&client_id=HyaD5EGAR6i4gy1Zy1zMbDAfNHLd5WAM&client_secret=yWoll4AQNWb5oueS'; // key vaults

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
    console.log(`Bearer ${bearerToken}`)
    
    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&radius=${radius}&page[limit]=10`;
    return this.http.get(url, { headers: header2 });
  }
}