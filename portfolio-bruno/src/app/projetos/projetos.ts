import { Component,ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';


interface Projeto {
  titulo: string;
  imagem?: string;
  descricao: string;
  tecnologias: string[];
  papel: string;
  resultados: string;
  linkCodigo?: string;
  linkDemo?: string;
  videoLocal?: string;
}


@Component({
  selector: 'app-projetos',
  imports: [NgFor, NgIf],
  templateUrl: './projetos.html',
  styleUrl: './projetos.css'
})
export class Projetos implements AfterViewInit{
  projetos: Projeto[] = [
    {
      titulo: 'Agenda de Contatos',
      descricao: 'Facilita o gerenciamento de contatos pessoais, permitindo adicionar, editar e excluir informações de forma intuitiva.',
      tecnologias: ['Angular', 'TypeScript', 'HTML/CSS'],
      papel: 'Desenvolvedor frontend',
      resultados: 'Aprendi a criar uma interface de usuário responsiva e a manipular dados com Angular.',
      linkCodigo: 'https://github.com/seu-usuario/meu-projeto', // Cole aqui o link do seu GitHub
      linkDemo: 'https://seu-usuario.github.io/meu-projeto', // Adicione se quiser
      videoLocal: 'assets/videos/teste.mp4' 
      
    },{
      titulo: 'Lista de Tarefas',
      descricao: 'Aplicação simples para gerenciar tarefas diárias, com funcionalidades de adicionar, editar e marcar como concluídas.',
      tecnologias: ['Angular', 'TypeScript', 'HTML/CSS'],
      papel: 'Desenvolvedor frontend',
      resultados: 'Com esse projeto, melhorei minhas habilidades em Angular e na criação de componentes reutilizáveis.',
      linkCodigo: 'https://github.com/seu-usuario/meu-projeto', // Cole aqui o link do seu GitHub
      linkDemo: 'https://seu-usuario.github.io/meu-projeto',
      videoLocal: 'https://www.youtube.com/watch?v=yXPWsdT43YE' // Adicione se quiser
    },
    {
      titulo: 'Controle de Finanças Pessoais',
      descricao: 'Projeto para monitorar receitas e despesas, ajudando no planejamento financeiro pessoal.',
      tecnologias: ['Angular', 'TypeScript', 'HTML/CSS'],
      papel: 'Desenvolvedor frontend',
      resultados: 'Aprendi conceitos importantes de gerenciamento de estado e manipulação de formulários em Angular.',
      linkCodigo: 'https://github.com/seu-usuario/meu-projeto', // Cole aqui o link do seu GitHub
      linkDemo: 'https://seu-usuario.github.io/meu-projeto',
      videoLocal: 'https://www.youtube.com/watch?v=yXPWsdT43YE' // Adicione se quiser
    }
    
  ];
  modalVisivel = false;
  videoAtual = 'assets/videos/teste.mp4'; 
  modalTop = 0;
  modalLeft = 0;
  modalWidth = 200;
  fecharTimeout: any;

@ViewChild('videoModal') videoModal!: ElementRef<HTMLElement>;

ngAfterViewInit() { /* Método obrigatório */ }

// Chame este método ao entrar no botão de preview
abrirModal(video: string, event: MouseEvent) {
  const botao = event.target as HTMLElement;
  this.videoAtual = video;
  this.modalVisivel = true;

  setTimeout(() => {
    this.posicionarModal(botao);
  });
}

fecharModal() {
  this.modalVisivel = false;
}

cancelarFechamento() {
  if (this.fecharTimeout) {
    clearTimeout(this.fecharTimeout);
  }
}


private posicionarModal(botao: HTMLElement) {
  if (!this.videoModal?.nativeElement) return;

  const botaoRect = botao.getBoundingClientRect();
  const modalRect = this.videoModal.nativeElement.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  let left = botaoRect.left;
  let top = botaoRect.bottom;

  // Ajusta horizontalmente (evita sair da tela)
  if (left + modalRect.width > viewportWidth) {
    left = viewportWidth - modalRect.width;
    if (left < 0) left = 0;
  }

  // Ajusta verticalmente (evita sair da tela)
  if (top + modalRect.height > viewportHeight) {
    top = botaoRect.top - modalRect.height;
    if (top < 0) top = 0;
  }

  this.modalTop = top;
  this.modalLeft = left;
}

}
