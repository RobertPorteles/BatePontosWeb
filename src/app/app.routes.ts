import { Routes } from '@angular/router';
import { Log } from './module/bateponto/components/pages/log/log';


export const routes: Routes = [


	{
		path: 'bateponto',
		loadChildren: () => import(
			'./module/bateponto/bateponto.module').then(
				m => m.batePontoModule)
	},
	{
		path: '', pathMatch: 'full', redirectTo: 'bateponto/login'
	}

];
