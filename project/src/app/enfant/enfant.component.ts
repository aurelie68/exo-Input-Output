import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enfant',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.css']
})
export class EnfantComponent {
 

  @Input() person: any;
  @Output() remove = new EventEmitter<void>();

  removeProfil(): void {
    this.remove.emit();
  }
}