import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Paciente} from './model/paciente';
import {ApiService} from "../service/api.service";


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  paciente: Paciente[];

  constructor(private apiService: ApiService ) { }

  ngOnInit() {
    this.getAllPacientes();
  }

  getAllPacientes() {
    this.apiService.getAllPacientes().subscribe(
      res => {
        this.paciente = res;
      },
      error => {
        alert('Ocorreu um erro');
      }
    );
  }

}
