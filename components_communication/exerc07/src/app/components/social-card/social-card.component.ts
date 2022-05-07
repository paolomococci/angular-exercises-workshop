import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  SimpleChange
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

  constructor() { }

  ngOnInit(): void {
  }

}
