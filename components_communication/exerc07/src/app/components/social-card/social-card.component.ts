import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  SimpleChange
} from '@angular/core';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.sass']
})
export class SocialCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
