import { Component } from '@angular/core';
import { NgFor} from '@angular/common';

interface Skill{
  nome: string;
  icone: string;
  nivel: number;
  label: string;
}

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills {

    skills: Skill[]=[
        {nome: 'Angular', icone: 'https://img.icons8.com/color/48/000000/angularjs.png', nivel: 60, label: 'Em desenvolvimento'},
        {nome: 'JavaScript', icone: 'https://img.icons8.com/color/48/000000/javascript--v1.png', nivel: 80, label: 'Avançado'},
        {nome: 'TypeScript', icone: 'https://img.icons8.com/color/48/000000/typescript.png', nivel: 60, label: 'Em desenvolvimento'},
        {nome: 'HTML', icone: 'https://img.icons8.com/color/48/000000/html-5--v1.png', nivel: 100, label: 'Avançado'},
        {nome: 'CSS', icone: 'https://img.icons8.com/color/48/000000/css3.png', nivel: 70, label: 'Avançado'},
    ];
}
