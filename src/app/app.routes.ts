import { Routes, Router } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { JohnDoeComponent } from './john-doe/john-doe.component';

const ROUTES: Routes = [
  { path: 'signup', component: SignUpComponent },
  { path: 'johndoe', component: JohnDoeComponent },
  { path: 'route', component: Router}
];

export { ROUTES };