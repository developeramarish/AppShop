import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppModule } from '@app/app.module';
import { AppComponent } from '@app/app.component';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        ServerModule,
        NoopAnimationsModule,
        AppModule
    ]
})
export class AppServerModule {
}
