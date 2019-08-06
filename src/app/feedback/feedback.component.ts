import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
model: FeedbackModel = {
  titulo: '',
  email: '',
  descricao: ''
};
  private apiURL = 'http://localhost:8080/feedback';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
  }

  envairFeedback(): void {
    this.http.post(this.apiURL, this.model).subscribe(
      res => {
        location.reload();
      },
      err => {
        alert('Ocorreu um erro ao enviar o feedback');
      }
    );
  }

}

export interface FeedbackModel {
  titulo: string;
  email: string;
  descricao: string;
}
