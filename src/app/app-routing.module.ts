import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tabs/account',
    children: [
      {
        path: '',
        loadChildren: () =>
            import('./account/account.module').then(m => m.AccountPageModule)
      }
    ]
  },
  {
    path: 'tabs/scanner',
    children: [
      {
        path: '',
        loadChildren: () =>
            import('./scanner/scanner.module').then(m => m.ScannerPageModule)
      }
    ]
  },
  {
    path: 'tabs/coupon-list',
    children: [
      {
        path: '',
        loadChildren: () =>
            import('./coupon-list/coupon-list.module').then(m => m.CouponListPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
