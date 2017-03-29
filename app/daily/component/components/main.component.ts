import {Component, OnInit} from "@angular/core";
import {HeroService} from "../../service/HeroService";
import {Hero} from "../../bean/hero";
/**
 * Created by Administrator on 2017/3/29.
 */
@Component({
    moduleId:module.id,
    selector: 'app-main',
    templateUrl: '../views/main.html',
    styleUrls:['../styles/main.css'],
    providers: [HeroService]
})
export class MainComponent implements OnInit{
    ngOnInit(): void {
        this.getHeroes();
    }

    constructor(private heroService: HeroService) {
    };

    name = 'local message';
    selectedHero: Hero;
    heroes: Hero[];

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    getHeroes():void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
}