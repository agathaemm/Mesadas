import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastreSePage } from './cadastre-se';

@NgModule({
  declarations: [
    CadastreSePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastreSePage),
  ],
})
export class CadastreSePageModule {}
