import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  pokemons = [];
  name = {};
  

  Object = Object;

  constructor( private servicePokemons: PokemonsService, private router: Router  ) { }

  ngOnInit(): void {

    this.obtenerPokemons();

  }

  obtenerPokemons(){

    this.servicePokemons.obtenerPokemons().subscribe( resp => {
      
      for (const item of resp) {

        let id = item.id;
  
        if (id.length === 1) {
          id = "00" + id;
        } else if (id.length === 2) {
          id = "0" + id;
        }else{
          id = id;
        }
  
        item.img = id;
  
        this.pokemons.push(item);
  
        
      }

      // console.log(this.pokemons);

    });


  }

  verPokemon(id: any){

    this.router.navigate(['/pokemon', id]);

  }

}
