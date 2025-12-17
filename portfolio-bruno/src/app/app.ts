import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importe o CommonModule

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule], // Adicione CommonModule aqui
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  temaAtual = 'light';

  ngOnInit(): void {
    // Aplica o tema ao corpo do documento ao iniciar
    document.body.className = this.temaAtual;
  }

  toggleTema(): void {
    this.temaAtual = this.temaAtual === 'light' ? 'dark' : 'light';
    document.body.className = this.temaAtual;
  }
}