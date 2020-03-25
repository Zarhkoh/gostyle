import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'account',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../account/account.module').then(m => m.AccountPageModule)
          }
        ]
      },
      {
        path: 'scanner',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../scanner/scanner.module').then(m => m.ScannerPageModule)
          }
        ]
      },
      {
        path: 'coupon-list',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../coupon-list/coupon-list.module').then(m => m.CouponListPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/account',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
