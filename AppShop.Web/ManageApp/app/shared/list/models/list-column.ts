export class ListColumn {
    constructor(
        public title: string, 
        public property: string, 
        public type: ListColumnType = ListColumnType.text,
        public isSortable: boolean = true,
        public isDefaultSortable: boolean = false,
        public prefix?: string | null,
        public postfix?: string | null) { 
    }

    setPrefix(text: string): this{
        this.prefix = text;
        return this;
    }
    
    setPostfix(text: string): this{
        this.postfix = text;
        return this;
    }

    setAsDefaultSort(value: boolean = true): this{
        this.isDefaultSortable = value;
        return this;
    }
}

export enum ListColumnType{
    text = "text",
    date = "date",
    datetime = "datetime",
    image = "image",
    status = "status",
    price = "price"
}