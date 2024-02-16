import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const generationURL = environment.apiJsonGeneration

@Injectable({
  providedIn: 'root'
})
export class ApiGenerationService {
  private http: HttpClient = inject(HttpClient);
  getGenerations(): any {
    return this.http.get(generationURL);
  }
}
