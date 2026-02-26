import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { Login } from './pages/login';
import { About } from './pages/about';
import { Products } from './pages/products';
import { ProductDetails } from './pages/product-details';
import { NotFound } from './pages/not-found';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  {
    path: 'about',
    component: About,
    canActivate: [authGuard],openai.chatgpt
    children: [
      { path: 'products', component: Products },
      { path: 'products/:id', component: ProductDetails }
    ]
  },
  { path: '**', component: NotFound }
];
