import { Component, OnInit, AfterViewInit, ElementRef, QueryList, ViewChildren, NgZone } from '@angular/core';
import { NgFor} from '@angular/common';
import { SkillsService, Skill } from '../services/skills';



@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class Skills implements OnInit, AfterViewInit{

  skills: Skill[] = [];
  
  @ViewChildren('skillCard') skillCards!: QueryList<ElementRef>;

  // 3. INJETE O SERVIÇO NO CONSTRUTOR
  constructor(private skillsService: SkillsService, private zone: NgZone) {}

  // 4. BUSQUE OS DADOS QUANDO O COMPONENTE INICIAR
  ngOnInit(): void {
    this.skills = this.skillsService.getSkills();
  }
   
  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // 3. Encontre o índice do elemento que se tornou visível
          const index = this.skillCards.toArray().findIndex(card => card.nativeElement === entry.target);
          if (index !== -1) {
            // 4. Rode a atualização de estado dentro do NgZone
            this.zone.run(() => {
              this.skills[index].isInView = true;
            });
            observer.unobserve(entry.target);
          }
        }
      });
    }, {
      threshold: 0.3 // Reduzimos um pouco o threshold para disparar um pouco antes
    });

    this.skillCards.forEach(card => observer.observe(card.nativeElement));
  }
}