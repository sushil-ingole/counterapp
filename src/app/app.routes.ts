import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { FormsComponent } from './forms/forms.component';
import { DataResolverService } from './data-resolver.service';

export const routes: Routes = [
    {
        path: '',
        component: CounterComponent
    },
    {
        path: 'forms',
        component: FormsComponent,
        resolve: DataResolverService
    }
];
