import { Component } from '@angular/core';

import { ListConfig, Query } from '@app/shared/list';
import { ConfirmService, ConfirmButton } from '@app/shared/confirm';
import { NotifyService, NotifyType } from '@app/shared/notify';

import { ProductListConfig } from './product-list.config';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  config: ListConfig = ProductListConfig.get();
  data: any = [];
  isLoading: boolean = true;

  constructor( 
    private productService: ProductService,
    private confirm: ConfirmService,
    private notify: NotifyService) {}

  populateData(query: any): void {
    this.isLoading = true;
    this.productService.getAll(query).subscribe(result => {
      this.data = result;
      this.isLoading = false;
    });
  }

  duplicate(item: any, query: Query): void{
    this.confirm.show("Opravdu duplikovat položku?", ConfirmButton.Info).subscribe(result => {
      if(!result) return;

      this.productService.create(item).subscribe(success => {
        this.populateData(query);
        this.notify.show("Položka byla úspěšně zduplikována!", NotifyType.Success);
      }, error => {
        this.notify.show("Položka nemohla být zduplikována!", NotifyType.Danger); 
      });
    });
  }

  delete(item: any, query: Query): void{
    this.confirm.show("Opravdu smazat položku?", ConfirmButton.Danger).subscribe(result => {
      if(!result) return;
      
      this.productService.delete(item.id).subscribe(success => {
        this.populateData(query);
        this.notify.show("Položka byla úspěšně smazána!", NotifyType.Success);
      }, error => {
        this.notify.show("Položka nemohla být smazána!", NotifyType.Danger); 
      });
    });
  }

}
