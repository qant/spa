import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  private _heroes = {};

  constructor(private _activatedRoute: ActivatedRoute) {
    this._activatedRoute.params.subscribe((params) => {
      console.log(params['id']);
    });
    console.log('Heroe ');
  }
}
