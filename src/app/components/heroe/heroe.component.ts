import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  hero: any = {};

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesService
  ) {
    this._activatedRoute.params.subscribe((params) => {
      this.hero = this._heroesService.getHero(params['id']);
    });
    console.log('Hero Component');
    console.log(this.hero);
  }
}
