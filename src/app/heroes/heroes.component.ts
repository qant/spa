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
    console.log(heroesService);
    console.log('HeroesComponent contructor');
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
    console.log('HeroesComponent ngOnInit');
  }

  viewHero(idx: number): void {
    console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}
