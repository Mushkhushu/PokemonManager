
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const pokeURL = environment.apiJsonPoke

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  private http: HttpClient = inject(HttpClient);

  getPokemons(): any {
    return this.http.get(pokeURL);
  }

}
