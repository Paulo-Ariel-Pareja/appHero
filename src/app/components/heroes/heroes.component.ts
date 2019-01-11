import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from './heroe';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(
              private _heroesService: HeroesService,
              private router: Router) { }

  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(index:number){
    this.router.navigate( ['/heroe', index]);
  }

}
