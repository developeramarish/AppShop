import { Pipe, PipeTransform } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import * as moment from 'moment';

@Pipe({
    name: 'dataFormat'
})
export class DataFormatPipe implements PipeTransform{

    constructor(){
    }

    transform(value: any, type: string){
        let funcName = 'to' + type[0].toUpperCase() + type.slice(1);

        if(this[funcName] == null)
            return value;

        return eval('this.' + funcName + '("' + value + '")');
    }

    toText(value:string):string|null {
        return value;
    }

    toDate(value:string):string|null {
        var momentDate = moment(value);
        if (!momentDate.isValid()) 
            return value;

        return momentDate.format('D.M.YYYY');

    }

    toDatetime(value:string):string|null {
        var momentDate = moment(value);
        if (!momentDate.isValid()) 
            return value;

        return momentDate.format('D.M.YYYY HH:mm');
    }

    toImage(value: string):string|null {
        return '<img src="' + value + '" />'
    }

    toStatus(value: string): string|null{
        let iconClass = JSON.parse(value) ? "fa-check text-success" : "fa-times text-danger";
        return '<i class="fa ' + iconClass + '"></i>';
    }

    toPrice(value:string):string|null {
        return Number(value).toLocaleString().replace(',', ' ') + " Kč"
    }

}