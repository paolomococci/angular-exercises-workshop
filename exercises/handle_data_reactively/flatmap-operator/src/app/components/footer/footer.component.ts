import {
  Component,
  OnInit
} from '@angular/core'
import { Observable } from 'rxjs'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {

  dataComments$!: Observable<string>

  constructor(
    private userService: UserService  
  ) { }

  ngOnInit(): void {
    this.dataComments$ = this.userService.getDataComments()
  }

}
