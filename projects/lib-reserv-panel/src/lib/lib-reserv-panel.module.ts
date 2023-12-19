import { NgModule,ModuleWithProviders } from '@angular/core';
import { LibReservPanelComponent } from './lib-reserv-panel.component';
import { ComponentRangeDatePickerComponent } from './component-range-date-picker/component-range-date-picker.component';
import {CommonModule } from '@angular/common'
import {LibReservPanelService} from './lib-reserv-panel.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LibReservPanelComponent, ComponentRangeDatePickerComponent
  ],
  imports: [
  CommonModule,HttpClientModule
  ],
   providers: [
        LibReservPanelService
    ],
  exports: [
    LibReservPanelComponent
  ]
})
export class LibReservPanelModule { 
  public static forRoot(environment: any): ModuleWithProviders<LibReservPanelModule> {

    return {
        ngModule: LibReservPanelModule,
        providers: [
            LibReservPanelService,
            {
                provide: 'env', // you can also use InjectionToken
                useValue: environment
            }
        ]
    };
}
}
