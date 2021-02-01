import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/interfaces';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  pokemons: Pokemon[] = [];

  private texto: string;

  constructor( 
    private activatedRoute: ActivatedRoute, 
    private servicePokemon: PokemonsService,
    private router: Router ) { }

  ngOnInit(): void {

      this.activatedRoute.params.subscribe( params => {
        // console.log(params.texto);
        this.texto = params.texto;

        this.pokemons = [];

        this.servicePokemon.buscarPokemon(this.texto).subscribe( resp => {
        
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

      });

    });

  }

  verPokemon(id: any){

    this.router.navigate(['/pokemon', id]);

  }


}
