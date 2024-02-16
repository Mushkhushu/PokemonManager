import { Component, inject } from '@angular/core';
import { ApiPokemonService } from '../../services/api-pokemon.service';
import { Pokemon } from '../../interfaces/pokemon';


@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})


export class PokemonsComponent {
  private apiPokemonService: ApiPokemonService = inject(ApiPokemonService);
  public pokemons: Array<Pokemon> = []

  constructor() {
    this.getPokemons();
  }
  getPokemons(): void {
    this.apiPokemonService.getPokemons()
      .subscribe({
        next: (pokemons: any) => {
          console.log(pokemons)
          this.pokemons = pokemons;
        },
        error: (error: any) => {
          console.log('Some error happenned');
          console.error(error)
        }
      })
  }

  countPokemons(): number {
    return this.pokemons.length;
  }
}
