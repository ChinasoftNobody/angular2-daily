import {Component, OnInit} from "@angular/core";
import {HeroService} from "../../service/HeroService";
import {Hero} from "../../bean/hero";
import {TestService} from "../../service/TestService";
import {stringify} from "querystring";
import {SSOErrorService} from "../../service/sso.error.service";
/**
 * Created by Administrator on 2017/3/29.
 */
@Component({
    moduleId: module.id,
    selector: 'app-main',
    templateUrl: '../views/dashboard.html',
    styleUrls: ['../styles/dashboard.css'],
    providers: [HeroService, TestService]
})
export class MainComponent implements OnInit {
    ngOnInit(): void {
        this.getHeroes();
    }

    constructor(private heroService: HeroService,
                private testService: TestService,
                private ssoErrorService:SSOErrorService) {
    };

    name = 'local message';
    selectedHero: Hero;
    heroes: Hero[];

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.testService.getMessage().subscribe(data => this.ssoErrorService.resolveRemoteResult(data.json(),result =>this.name = result) )
    }
}