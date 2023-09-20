import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PointsOfInterestApiService {
  
  constructor(private http:HttpClient) { }

  private apiKey = 'HyaD5EGAR6i4gy1Zy1zMbDAfNHLd5WAM'; // client_id
  private apiSecret = "yWoll4AQNWb5oueS"; // client_secret
  private apiUrl = 'https://test.api.amadeus.com/v1/reference-data/locations';
  private tokenUrl = 'https://test.api.amadeus.com/v1/security/oauth2/token';

  getSafePlaceInformation(latitude: number, longitude: number, radius: number){
    let bearerToken :string = '';

    //first call
    const data = { grant_type: 'client_credentials', client_id: 'HyaD5EGAR6i4gy1Zy1zMbDAfNHLd5WAM', client_secret: 'yWoll4AQNWb5oueS'};

    const header1 = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    
    this.http.post(this.tokenUrl, data, { headers: header1 }).subscribe(
      (response:any) => {
        // Handle the response
        bearerToken = `Bearer ${response.access_token}`;
      },
      (error) => {
        // Handle errors
      }
    );

    const header2 = new HttpHeaders({
      'Authorization': bearerToken
    });

    // second call
    // https://test.api.amadeus.com/v1/reference-data/locations/pois?latitude=32.806993&longitude=-96.836857&radius=20&page[limit]=10
    const url = `${this.apiUrl}?latitude=${latitude}&longitude=${longitude}&radius=${radius}&page[limit]=10`;
    return this.http.get(url, {headers: header2});
  }
}
