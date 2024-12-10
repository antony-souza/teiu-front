import { Routes } from '@angular/router';
import { AuthComponent } from '../components/auth/auth.component';
import { HomeComponent } from '../components/home/home.component';
import { RouterGuard } from '../guards/router-guards.guard';
import { SaleshistoryComponent } from '../components/saleshistory/saleshistory.component';
import { ProductbillingComponent } from '../components/productbilling/productbilling.component';
import { CreateSalesComponent } from '../components/create-sales/create-sales.component';

export const routes: Routes =
    [
        {
            path: '',
            component: AuthComponent
        },
        {
            path: 'home',
            component: HomeComponent,
            canActivate: [RouterGuard]
        },
        {
            path: 'saleshistory',
            component: SaleshistoryComponent,
            canActivate: [RouterGuard]
        },
        {
            path: 'productbilling',
            component: ProductbillingComponent,
            canActivate: [RouterGuard]
        },
        {
            path: 'createsales',
            component: CreateSalesComponent,
            canActivate: [RouterGuard]
        },

    ];
