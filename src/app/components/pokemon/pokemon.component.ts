import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/interfaces';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicePokemons: PokemonsService,
    private location: Location,
  ) { }

  ngOnInit(): void {

    this.obtenerPokemon();

  }

  obtenerPokemon(){

    const id = this.activatedRoute.snapshot.params.id;

    this.servicePokemons.obtenerPokemonById(id).subscribe( resp => {

      // console.log(resp);

      let idPokemon = resp.id;
  
      if (idPokemon.length === 1) {
        idPokemon = "00" + idPokemon;
      } else if (idPokemon.length === 2) {
        idPokemon = "0" + idPokemon;
      }else{
        idPokemon = idPokemon;
      }

      resp.img = idPokemon;
      
      this.pokemon = resp;

      // console.log(this.pokemon);

    });

  }

  onRegresar(){
    this.location.back();
  }

}
