import {Component, OnInit} from '@angular/core';
import {ApiService} from "../service/api.service";

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

  constructor(private apiService: ApiService) {

  }

  ngOnInit() {
  }

  postSendFeedback(): void {
    this.apiService.postSendFeedback(this.model).subscribe(
      res => {
        location.reload();
      },
      err =>  {
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
