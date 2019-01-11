import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from '../heroes/heroe';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {
    
    this.activatedRoute.params.subscribe( params => {
      this.heroe = this.heroesService.getHeroe( params['id'] );
    } );
   }

  ngOnInit() {
  }

  isMarvel(heroe:Heroe):boolean{
    if(heroe.casa == 'Marvel'){
      return true;
    }
    return false;
  }
}
