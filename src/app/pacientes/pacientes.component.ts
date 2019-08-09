import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Paciente} from './model/paciente';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

  paciente: Paciente[];
  private apiUrl = 'http://localhost:8080/pacientes';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.findAllPacientes();
  }

  findAllPacientes() {
    this.http.get<Paciente[]>(this.apiUrl).subscribe(
      res => {
        this.paciente = res;
      },
      error => {
        alert('Ocorreu um erro');
      }
    );
  }

}
