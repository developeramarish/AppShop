import { ListAction, ListButton, ListColumn } from './../';

export class ListConfig{
    limit: number = 10;
    public showPagination: boolean = true;
    public actions: ListAction[] = [];
    public buttons: ListButton[] = [];
    public columns: ListColumn[] = [];


    addAction(action: ListAction): this {
        this.actions.push(action);
        return this;
    }

    addButton(button: ListButton): this {
        this.buttons.push(button);
        return this;
    }

    addColumn(column: ListColumn): this {
        this.columns.push(column);
        return this;
    }

    getDefaultSortColumn(): ListColumn | null {
        let column;
        this.columns.forEach(c => {
            if(c.isDefaultSortable)
                column = c;
        });
        return column ? column : null;
    }

    get columnsCode(): any[] {
        return this.columns.map(c => c.property);
    }

}