import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
private apiUrl = 'https://localhost:7258/api/Values';

  constructor(private http:HttpClient) { }

  getSurveys(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
    }

    getSurvey(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
    }
    createSurvey(survey: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, survey);
    }
    updateSurvey(id: number, survey: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, survey);
    }
    deleteSurvey(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
    }
}
