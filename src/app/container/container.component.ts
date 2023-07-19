import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef })
  container!: ViewContainerRef;
  dynaComponentRefs: ComponentRef<DynamicComponent>[] = [];
  createDynamicComponent() {
    const componentRef = this.container.createComponent(DynamicComponent);
    componentRef.instance.message = 'Hello, Dynamic Component!';
    componentRef.instance.closeEvent.subscribe(() =>
      this.closeDynamicComponent(componentRef)
    );
    this.dynaComponentRefs.push(componentRef);
  }
  closeDynamicComponent(componentRef: ComponentRef<DynamicComponent>) {
    const index = this.dynaComponentRefs.indexOf(componentRef);
    if (index !== -1) {
      componentRef.destroy();
      this.dynaComponentRefs.splice(index, 1);
    }
  }
}
