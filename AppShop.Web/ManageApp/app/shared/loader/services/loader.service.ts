import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class LoaderService{
    private loaderSubject = new Subject<boolean>();
    state$ = this.loaderSubject.asObservable();

    show() {
        this.loaderSubject.next(true);
    }

    hide() {
        this.loaderSubject.next(false);
    }
}