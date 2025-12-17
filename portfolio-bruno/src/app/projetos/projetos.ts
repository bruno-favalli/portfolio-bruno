import { Component,ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { NgFor,NgIf } from '@angular/common';
import { ProjetosService } from '../services/projetos';
import { OnInit } from '../../../node_modules/@angular/core/index';


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
export class Projetos implements AfterViewInit, OnInit{
  projetos: Projeto[] = [];
    
    
  
  modalVisivel = false;
  videoAtual = ''; 
  modalTop = 0;
  modalLeft = 0;
  modalWidth = 200;
  fecharTimeout: any;

@ViewChild('videoModal') videoModal!: ElementRef<HTMLElement>;
@ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

@HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (this.modalVisivel) {
      this.fecharModal();
    }
  }

  // 3. INJETE O SERVIÇO NO CONSTRUTOR
  constructor(private projetosService: ProjetosService) {}

  // 4. BUSQUE OS DADOS QUANDO O COMPONENTE INICIAR
  ngOnInit(): void {
    this.projetos = this.projetosService.getProjetos();
  }
  
ngAfterViewInit() { /* Método obrigatório */ }

// Chame este método ao entrar no botão de preview
abrirModal(video: string, event: MouseEvent) {
  const botao = event.target as HTMLElement;
  this.videoAtual = video;
  this.modalVisivel = true;

  setTimeout(() => {
    this.posicionarModal(botao);
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      this.videoPlayer.nativeElement.play().catch(err => {
        console.error("Erro ao tocar o vídeo:", err);
      });
    }
  });
}

fecharModal() {
  this.modalVisivel = false;
  if (this.videoPlayer && this.videoPlayer.nativeElement) {
    this.videoPlayer.nativeElement.pause();
  }
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
