import { Component, OnInit } from '@angular/core';
import { HeroesService, Hero } from '../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroesService: HeroesService, private router: Router) {
    console.log('HeroesComponent contructor');
    console.log(heroesService);
    console.log(router);
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log('HeroesComponent ngOnInit');
    console.log(this.heroes);
  }
  showHero(i: number) {
    this.router.navigate(['/heroe', i]);
  }
}
