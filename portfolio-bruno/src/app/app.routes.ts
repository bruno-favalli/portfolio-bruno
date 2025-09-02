import { Routes } from '@angular/router';
import{ Projetos} from './projetos/projetos';
import{Sobre} from './sobre/sobre';
import {Contato} from './contato/contato';
import { Skills } from './skills/skills';


export const routes: Routes = [
    {path: '', component: Projetos},
    {path: 'sobre', component: Sobre},
    {path: 'contato', component: Contato},
    {path: 'skills', component: Skills}
];