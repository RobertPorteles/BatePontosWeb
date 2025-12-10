import { Routes } from '@angular/router';
import { Log } from './core/components/log/log';
import { Cadastro } from './core/components/cadastro/cadastro';
import { Login } from './core/components/login/login';

export const routes: Routes = [
	{
		path: '', redirectTo: '/login', pathMatch: 'full'
	},
	{
		path: "login", component: Login
	},
	{
		path: "log", component: Log
	}

];
