import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {

  @Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();
  
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('ServerContentInput') serverContentInput: ElementRef;

  onAddServer(serverNameInput:HTMLInputElement) {
    console.log(this.serverContentInput)
    this.serverCreated.emit({
      serverName:serverNameInput.value,

      serverContent:this.serverContentInput.nativeElement.value
      // serverContent:this.newServerContent
    });
  }

  onAddBlueprint(serverNameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName:serverNameInput.value,
      serverContent:this.serverContentInput.nativeElement.value
      // serverContent:this.newServerContent
    });
  }
}
