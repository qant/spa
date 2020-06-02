import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
})
export class HeroCardComponent implements OnInit {
  @Input() hero: any = {};
  @Input() index: string;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  showHero() {
    this.router.navigate(['/heroe', this.index]);
  }
}
