import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatPaginatorIntl } from '@angular/material';
import { MaterialModule } from '@app/shared/material/material.module';
import { BootstrapModule } from '@app/shared';

import { ListComponent } from './components/list/list.component';
import { DataFormatPipe } from './pipes/data-format.pipe';
import { PaginatorCzech } from './locale/paginator.czech';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MaterialModule,
    BootstrapModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: PaginatorCzech.get() }
  ],
  declarations: [
    ListComponent,
    DataFormatPipe
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule {}