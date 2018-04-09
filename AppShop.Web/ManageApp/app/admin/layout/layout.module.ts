import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { BootstrapModule, LoaderModule } from '@app/shared';

import { 
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MobileNavComponent,
    UserNavComponent,
    PageHeaderComponent } from './components';
    
import { NavService } from './services/nav.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoaderModule,
    BootstrapModule,
    McBreadcrumbsModule.forRoot(),
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MobileNavComponent,
    UserNavComponent,
    PageHeaderComponent
  ],
  providers: [
    NavService
  ]
})
export class LayoutModule { }
