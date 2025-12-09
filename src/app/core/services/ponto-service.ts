import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Funcionario } from '../models/funcionario';
import { Localizacao } from '../models/localizacao';
import { Ponto } from '../models/ponto';

@Injectable({
  providedIn: 'root',
})
export class PontoService {

  httpMetodo = inject(HttpClient);

  url = "http://localhost:3000";


  getAllFuncionario(){
    return this.httpMetodo.get<Funcionario[]>(this.url + '/funcionarios')
  }

  getAllLocalizacao(){
    return this.httpMetodo.get<Localizacao[]>(`${this.url}/localizacao`)
  }

  getAllPonto(){
    return this.httpMetodo.get<Ponto[]>(`${this.url}/pontos`)
  }

}
