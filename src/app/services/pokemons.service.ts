import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  url: string = environment.apiURL;

  constructor( private http: HttpClient) { }

  obtenerPokemons(){

    return this.http.get(`${this.url}/pokemon`).pipe(
      map( data => {
          return data['pokemon'];
        })
    );

  }

  obtenerPokemonById(id: any){

    const idPokemon = id;

    // console.log(idPokemon);

    return this.http.get(`${this.url}/pokemon/${idPokemon}`).pipe(
      map( data => {
          return data['pokemon'];
        })
    );

  }

  buscarPokemon( texto: string ){

    // const params = {query: texto};

    return this.http.get(`${this.url}/pokemon/buscar/${texto}`)
        .pipe(
          map( (resp) => resp['pokemon'] )
        );

  }

}
