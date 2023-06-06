import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

 profil = [ 
  {nom:"Emilio", age : 43, hobby : "danse"},

  {nom : "Matthieu" , age : 36, hobby : "codewars"},

  {nom : "Aurelie", age : 40, hobby : "loisirs créatifs"}

    
]
removeCard(index: number): void {
  this.profil.splice(index, 1);
}
}