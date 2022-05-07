import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  SimpleChanges
} from '@angular/core'

import { SocialCardType } from "../../enums/social-card-type"
import { ProfileCardComponent } from "../profile-card/profile-card.component"
import { ChirpingCardComponent } from "../chirping-card/chirping-card.component"

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.sass']
})
export class SocialCardComponent implements OnInit {

  @Input()
  socialCardType!: SocialCardType

  @ViewChild(
    'containerViewReference',
    {
      read: ViewContainerRef
    }
  )
  containerViewReference!: ViewContainerRef

  cardType!: SocialCardType

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['socialCardType'].currentValue !== undefined) {
      this.loadDynamicComponent(changes['socialCardType'].currentValue)
    }
  }

  loadDynamicComponent(sct: SocialCardType) {
    let component
    switch (sct) {
      case SocialCardType.Profile:

        break;

      default:
        break;
    }
    // todo
    throw new Error('Method not implemented.')
  }

}
