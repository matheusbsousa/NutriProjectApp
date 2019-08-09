import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Paciente} from "../pacientes/model/paciente";
import {FeedbackModel} from "../feedback/feedback.component";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private BASE_URL: string = "http://localhost:8080/nutri-api";
  private GET_ALL_PACIENTES  = `${this.BASE_URL}/pacientes`;
  private POST_SEND_FEEDBACK  = `${this.BASE_URL}/feedback`

  constructor(private http: HttpClient) { }

  public getAllPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.GET_ALL_PACIENTES);
}

public postSendFeedback(feedback: FeedbackModel): Observable<any>{
    return this.http.post(this.POST_SEND_FEEDBACK, feedback );
}









}
