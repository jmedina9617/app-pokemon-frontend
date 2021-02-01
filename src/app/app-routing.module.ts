import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
  { path: 'home', component: PokemonsComponent },
  { path: 'buscar/:texto', component: BuscarComponent },
  { path: 'pokemon/:id', component: PokemonComponent },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
