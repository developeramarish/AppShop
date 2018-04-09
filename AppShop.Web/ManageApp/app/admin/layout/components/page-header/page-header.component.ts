import { Component, Injectable } from '@angular/core';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { McBreadcrumbsConfig } from 'ngx-breadcrumbs';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html'
})
export class PageHeaderComponent {
    private readonly metaTitlePostFIx = " - AppShop";
    text: string;

    constructor(
        private breadcrumbsConfig: McBreadcrumbsConfig,
        private route: ActivatedRoute, 
        private router: Router, 
        private metaTitle: Title) 
    {
        this.setTitle();
        this.setBreadcrumbHomeLink();
    }

    private setBreadcrumbHomeLink(): void{
        this.breadcrumbsConfig.postProcess = (items) => {
            let home = [{
                text: "",
                path: "/admin"
            }];
            return home.concat(items);
        };
    }

    private setTitle(): void{
        this.router.events.subscribe((event) => {
            if (event instanceof ActivationEnd) {
                if(event.snapshot.data.text){
                    this.text = event.snapshot.data.text;
                    this.metaTitle.setTitle(this.text + this.metaTitlePostFIx);
                }
            }
        });
    }
}
