/**
 * Created by china on 2017/2/12.
 */
import {Injectable} from '@angular/core';
import {MyConst} from '../component/const/myConst';
import {Hero} from "../component/bean/hero";
@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(MyConst.HEROES || []);
    }
}