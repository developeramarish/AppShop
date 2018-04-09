import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService{
    private readonly apiUrl: string = '/api/products';

    constructor(private http: HttpClient){}

    getAll(queryObject: any){
        return this.http.get(this.apiUrl, {params: queryObject});
    }

    get(id: number){
        return this.http.get(this.apiUrl + '/' + id);
    }

    create(player: any){
        return this.http.post(this.apiUrl, player);
    }

    delete(id: number){
        return this.http.delete(this.apiUrl + '/' + id);
    }

}