import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  // {
  //   path: 'food',
  //   loadChildren: () => import('./food-info/food-info.module').then( m => m.FoodInfoPageModule)
  // },
  // {
  //   path: 'custom-fast',
  //   loadChildren: () => import('./custom-fast/custom-fast.module').then( m => m.CustomFastPageModule)
  // },
  // {
  //   path: 'fast-modal',
  //   loadChildren: () => import('./fast-modal/fast-modal.module').then( m => m.FastModalPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
