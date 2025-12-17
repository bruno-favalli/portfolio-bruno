import { Injectable } from '@angular/core';


export interface Skill {
  nome: string;
  icone: string; 
  nivel: number;
  label: string;
  isInView: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  
  private skills: Skill[] = [
    {nome: 'Angular', icone: 'fa-brands fa-angular', nivel:60, label: 'Em andamento', isInView: false},
    {nome: 'JavaScript', icone: 'fa-brands fa-js', nivel:80, label: 'Avançado', isInView: false},
    {nome: 'TypeScript', icone: 'bi bi-typescript', nivel:70, label: 'Intermediário', isInView: false},
    {nome: 'HTML5', icone: 'fa-brands fa-html5', nivel:90, label: 'Avançado', isInView: false},
    {nome: 'CSS3', icone: 'fa-brands fa-css3-alt', nivel:85, label: 'Avançado', isInView: false},
  ];

  constructor() { }

  getSkills(): Skill[] {
    return this.skills;
  }
}
