import {Component, ComponentFactoryResolver, Type, ViewChild, ViewContainerRef} from '@angular/core';
import {CatComponent} from './cat/cat.component';
import {DogComponent} from './dog/dog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  compNames: any = {
    cat: 'cat',
    dog: 'dog'
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  createComponent(componentName: string): void {
    this.container.clear();
    const componentType = this.getComponentType(componentName);
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    this.container.createComponent(componentFactory);
  }

  getComponentType(name: string): Type<any> {
    let type: Type<any> = DogComponent;
    switch (name) {
      case this.compNames.cat: {
        type = CatComponent;
        break;
      }
      case this.compNames.dog: {
        type = DogComponent;
        break;
      }
    }
    return type;
  }
}
