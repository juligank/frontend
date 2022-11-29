import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Profesor } from '../interfaces/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  private api = 'http://localhost:8080/api';

  constructor(private http :HttpClient) { }


  getAllProfesores() {
    const path = `${this.api}/profesores`;

    return this.http.get<Profesor[]>(path);
  }

  createProfesor(profesor: Profesor) {
    const path = `${this.api}/profesores`;
    return this.http.post(path, profesor);
  }

}
