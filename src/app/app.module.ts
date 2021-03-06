import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';
//import { StormpathModule, StormpathConfiguration } from 'angular-stormpath';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent }     from './heroes/heroes.component';
import { HeroService }         from './services/hero.service';
import { TestService } from './services/test.service';

/*export function stormpathConfig(): StormpathConfiguration {
 let spConfig: StormpathConfiguration = new StormpathConfiguration();
 spConfig.endpointPrefix = 'https://{DNS-LABEL}.apps.stormpath.io';
 return spConfig;
}*/
/*export function stormpathConfig(): StormpathConfiguration {
 let spConfig: StormpathConfiguration = new StormpathConfiguration();
 spConfig.endpointPrefix = 'http://api.mycompany.com';
 spConfig.meUri = '/account';
 return spConfig;
}*/


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,    
    RouterModule.forRoot([
    {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
    },
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'heroes',
      component: HeroesComponent
    }
  ])
  ],
  providers: [    
    HeroService,
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
