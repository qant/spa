import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  constructor(private heroesService: HeroesService) {
    console.log('HeroesComponent contructor');
  }

  ngOnInit(): void {
    console.log('HeroesComponent ngOnInit');
  }
}
