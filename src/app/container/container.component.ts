import { Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  componentRef!: ComponentRef<DynamicComponent>;
  createDynamicComponent() {
    this.componentRef = this.container.createComponent(DynamicComponent);
    this.componentRef.instance.message = 'Hello, Dynamic Component!';
  }
}
