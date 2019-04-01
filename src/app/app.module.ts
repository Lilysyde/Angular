import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/Forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JohnDoeComponent } from './john-doe/john-doe.component';
import { AngularDirectiveComponent } from './angular-directive/angular-directive.component';
import { HightlightDirective } from './angular-directive/hightlight.directive';
import { ShowMoviesDirective } from './angular-directive/show-movies.directive';
import { BambiiDirective } from './bambii.directive';
import { MenuComponent } from './menu/menu.component';
import { ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    JohnDoeComponent,
    AngularDirectiveComponent,
    HightlightDirective,
    ShowMoviesDirective,
    BambiiDirective,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
