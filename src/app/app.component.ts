import { Component, ViewChild, ElementRef, AfterViewInit, OnInit, AfterContentInit, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { CpColorDirective } from './cp-color.directive';
import { AlertComponent } from './alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit, AfterContentInit {
  title = 'myapp';
  //element reference
  @ViewChild('pRef', { static: false }) pRef: ElementRef;
  @ViewChild('othertab', { static: false }) otherTab: ElementRef;
  @ViewChild('dynamicDiv', { static: false }) dynamicDiv: ElementRef<HTMLDivElement>;
  @ViewChild('title', { static: false }) private elTitle: ElementRef;
  
  //Component
  @ViewChild(ChildComponent, { static: false }) numberComponent: ChildComponent;


  

  //Directives
  @ViewChild(CpColorDirective, { static: false }) private cpColorDirective: CpColorDirective;
  
  //viewChildren
  @ViewChildren(AlertComponent) alerts: QueryList<AlertComponent>
  @ViewChildren("div") divs: QueryList<any>

  showMe: boolean = false;

  ngOnInit() { }

  ngAfterViewInit() {
    console.log("33", this.pRef.nativeElement.innerHTML);
    //this.viewVal.nativeElement.innerHTML = "view me";
    this.pRef.nativeElement.innerHTML = "DOM updated succesfully!!!";
    this.elTitle.nativeElement.value = "Ramesh";

    this.alerts.forEach(alertInstance => console.log(alertInstance));

    this.divs.forEach(div => console.log(div));

  }
  ngAfterContentInit() {

  }

  onClick() {
    this.showMe = true;
    setTimeout(() => {
      this.dynamicDiv.nativeElement.innerText = "hello";
      console.log('after view init dynamic', this.dynamicDiv); // div
    }, 1000);
  }

  increase() {
    this.numberComponent.increaseByOne();
  }
  decrease() {
    this.numberComponent.decreaseByOne();
  }


  
  changeColor(color: string) {
      this.cpColorDirective.change(color);
  }
}
