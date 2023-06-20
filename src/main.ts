import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./global_styles.css']
})
export class AppComponent {
  nome: string = 'Fulano de Tal';
  dataNascimento: string = '01/01/1990';
  curso: string = 'Engenharia de Software';
  semestre: number = 5;
  unidadeCurricular: string = 'Programação Web';
}
