import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../heroes/heroe';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes:Heroe[] = [];
  termino: string;
  constructor(private activetedRoute: ActivatedRoute, private heroesService: HeroesService) { 

  }

  ngOnInit() {
    this.activetedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroe( this.termino );
    });
  }

}
