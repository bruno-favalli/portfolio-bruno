import { Injectable } from '@angular/core';

// A interface pode ficar aqui ou em um arquivo separado de "models"
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

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  private projetos: Projeto[] = [
    {
      titulo: 'Agenda de Contatos',
      descricao: 'Facilita o gerenciamento de contatos pessoais, permitindo adicionar, editar e excluir informações de forma intuitiva.',
      tecnologias: ['Angular', 'TypeScript', 'HTML/CSS'],
      papel: 'Desenvolvedor frontend',
      resultados: 'Aprendi a criar uma interface de usuário responsiva e a manipular dados com Angular.',
      linkCodigo: 'https://github.com/seu-usuario/meu-projeto',
      linkDemo: 'https://seu-usuario.github.io/meu-projeto',
      videoLocal: 'assets/videos/teste.mp4'
    },
    {
      titulo: 'Lista de Tarefas',
      descricao: 'Aplicação simples para gerenciar tarefas diárias, com funcionalidades de adicionar, editar e marcar como concluídas.',
      tecnologias: ['Angular', 'TypeScript', 'HTML/CSS'],
      papel: 'Desenvolvedor frontend',
      resultados: 'Com esse projeto, melhorei minhas habilidades em Angular e na criação de componentes reutilizáveis.',
      linkCodigo: 'https://github.com/seu-usuario/meu-projeto',
      linkDemo: 'https://seu-usuario.github.io/meu-projeto',
      videoLocal: 'assets/videos/teste.mp4'
    },
    {
      titulo: 'Projeto hackathon Caixa 2025',
      descricao: 'Projeto para monitorar receitas e despesas, ajudando no planejamento financeiro pessoal.',
      tecnologias: ['Angular', 'TypeScript', 'HTML/CSS'],
      papel: 'Desenvolvedor frontend',
      resultados: 'Aprendi conceitos importantes de gerenciamento de estado e manipulação de formulários em Angular.',
      linkCodigo: 'https://github.com/seu-usuario/meu-projeto',
      linkDemo: 'https://seu-usuario.github.io/meu-projeto',
      videoLocal: 'assets/videos/teste.mp4'
    }, {
      titulo: 'Loja online',
      descricao: 'Prejeto desenvolvido como desafio técnico para as aulas da formação Angular da Ada com a Caixa.',
      tecnologias: ['Angular', 'TypeScript', 'HTML/CSS'],
      papel: 'Desenvolvedor frontend',
      resultados: 'Aprofundei meus conhecimentos em Angular e práticas de desenvolvimento frontend.',
      linkCodigo: 'https://github.com/seu-usuario/meu-projeto',
      linkDemo: 'https://seu-usuario.github.io/meu-projeto',
      videoLocal: 'assets/videos/teste.mp4'
    }
  ];

  constructor() { }

  getProjetos(): Projeto[] {
    return this.projetos;
  }
}