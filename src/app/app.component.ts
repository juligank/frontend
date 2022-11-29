import { Component } from '@angular/core';
import { ProfesorService } from './services/profesor.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front';

constructor(
  private profesorService:ProfesorService
  ){}

  //onSubmit(data: { emailid: any; }){
  //  console.log(data.emailid)
 // }
  

  

getAllProfesores() {
  this.profesorService.getAllProfesores()
  .subscribe(teachers => {
    console.log(teachers);
  });
}

createProfesor() {
  const teacher = {
    id: '5',
    apellido: 'Martinez',
    cedula: '19080068',
    materia: 'etica',
    nombre: 'Manuel',
  };
  this.profesorService.createProfesor(teacher)
  .subscribe((newTeacher) => {
    console.log(newTeacher);
  });
}

}
