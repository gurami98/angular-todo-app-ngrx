import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';

// TODO: properly manage routing for the application
@NgModule({
  declarations: [],
  imports: [CommonModule, UserModule],
  exports: [],
})
export class FeatureModule {}
