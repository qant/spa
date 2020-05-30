import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroesService: HeroesService) {
    console.log(heroesService);
    console.log('HeroesComponent contructor');
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
    console.log('HeroesComponent ngOnInit');
  }
}
