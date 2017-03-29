/**
 * Created by china on 2017/2/12.
 */
import {Component, OnInit} from '@angular/core';
import {Hero} from './daily/component/bean/hero';
import {HeroService} from './daily/service/HeroService';

@Component({
    selector: 'my-app',
    templateUrl: 'daily/views/main.html',
    styleUrls: ['daily/css/main.css'],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        this.getHeroes();
    }

    constructor(private heroService: HeroService) {
    };

    title = 'Tour of Heroes';
    selectedHero: Hero;
    heroes: Hero[];

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    getHeroes():void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}
