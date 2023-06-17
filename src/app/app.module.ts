import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FeatureModule } from '@features/feature.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent, NavbarComponent } from '@shared/components';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TodoListComponent } from '@features/todo-list/todo-list.component';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, NavbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Todo App With NgRx',
      maxAge: 25,
      logOnly: environment.production,
      trace: true,
      traceLimit: 100,
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    TodoListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
