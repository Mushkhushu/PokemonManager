import { Routes } from '@angular/router';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';
import { GenerationsComponent } from './composants/generations/generations.component';
import { HomeComponent } from './partials/home/home.component';

export const routes: Routes = [
    {path: 'generations', component: GenerationsComponent},
    {path: 'pokemons', component: PokemonsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'generations/:id', redirectTo: 'pokemons', pathMatch: 'full'},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];