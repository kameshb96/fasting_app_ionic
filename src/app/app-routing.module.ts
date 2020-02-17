import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'fast',
    loadChildren: () => import('./fast/fast.module').then( m => m.FastPageModule)
  },
  {
    path: 'nutrition',
    loadChildren: () => import('./nutrition/nutrition.module').then( m => m.NutritionPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./food-info/food-info.module').then( m => m.FoodInfoPageModule)
  },
  {
    path: 'custom-fast',
    loadChildren: () => import('./custom-fast/custom-fast.module').then( m => m.CustomFastPageModule)
  },
  {
    path: 'timer',
    loadChildren: () => import('./timer/timer.module').then( m => m.TimerPageModule)
  },
  {
    path: 'fast-modal',
    loadChildren: () => import('./fast-modal/fast-modal.module').then( m => m.FastModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
