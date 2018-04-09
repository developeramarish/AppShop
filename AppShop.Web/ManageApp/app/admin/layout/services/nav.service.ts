import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from './../models/nav-item';

@Injectable()
export class NavService{

    constructor(private router: Router) {
    }

    getItems(): NavItem[]{
        var items: NavItem[] = [];
        this.router.config
            .filter(route => route.data && route.data.text && route.data.inNav)
            .map(route => {
                if(route.data){
                    items.push(new NavItem(
                        route.data.text,
                        route.data.icon,
                        route.path || "/admin"
                    ));
                }
            });
        return items;
    }
}