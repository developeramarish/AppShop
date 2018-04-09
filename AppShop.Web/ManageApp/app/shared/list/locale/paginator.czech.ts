import { MatPaginatorIntl } from '@angular/material';

export class PaginatorCzech {

    static get(){
        let paginator = new MatPaginatorIntl();

        paginator.firstPageLabel = 'První stránka';
        paginator.lastPageLabel = 'Poslední stránka';
        paginator.previousPageLabel = 'Předchozí stránka';
        paginator.nextPageLabel = 'Další stránka';

        paginator.itemsPerPageLabel = 'Položek na stránku';

        paginator.getRangeLabel = this.getRangeLabel;

        return paginator;
    }

    private static getRangeLabel = (page: number, pageSize: number, length: number) => {
        if (length == 0 || pageSize == 0) { 
            return `0 z ${length}`; 
        } 

        length = Math.max(length, 0); 
        
        const startIndex = page * pageSize; 
        const endIndex = startIndex < length 
            ? Math.min(startIndex + pageSize, length) 
            : startIndex + pageSize; 

        return `${startIndex + 1} - ${endIndex} z ${length}`; 
    }
}