import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Funcionario } from '../../../core/models/funcionario';
import { Localizacao } from '../../../core/models/localizacao';
import { PontoService } from '../../../core/services/ponto-service';
import { Ponto } from '../../../core/models/ponto';

@Component({
  selector: 'app-log',
  imports: [CommonModule, MatPaginatorModule, MatTableModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './log.html',
  standalone: true,
  styleUrl: './log.css',
})
export class Log implements OnInit, AfterViewInit {


  private service = inject(PontoService)



  dataSourceFuncionario = new MatTableDataSource<Funcionario>()
  dataSourceLocalizacao = new MatTableDataSource<Localizacao>()
  dataSourcePontos = new MatTableDataSource<Ponto>()

  displayColumnFuncionario = ["id", "nome", "email", "cargo"]
  displayColumnLocalizacao = ["id", "latitude", "longitude", "descricao", "ponto_id"]
  displayColumnPonto = ["id", "descricao", "data", "hora", "funcionarios_id"]


  @ViewChild("Funcionario") funcionario!: MatPaginator;
  @ViewChild("Pontos") pontos!: MatPaginator;
  @ViewChild("Localizacao") localizacao!: MatPaginator;



  ngOnInit() {
    this.getAllFuncionarios();
    this.getAllPonto();
    this.getAllLocalizacao();

  }
  ngAfterViewInit() {
    this.dataSourceFuncionario.paginator = this.funcionario;
    this.dataSourcePontos.paginator = this.pontos;
    this.dataSourceLocalizacao.paginator = this.localizacao
  }

  getAllFuncionarios() {
    this.service.getAllFuncionario().subscribe((funcionario) => {
      this.dataSourceFuncionario.data = funcionario;
    })
  }
  getAllLocalizacao() {
    this.service.getAllLocalizacao().subscribe((localizacao) => {
      this.dataSourceLocalizacao.data = localizacao;
    })
  }
  getAllPonto() {
    this.service.getAllPonto().subscribe((ponto) => {
      this.dataSourcePontos.data = ponto;
    })
  }




}
