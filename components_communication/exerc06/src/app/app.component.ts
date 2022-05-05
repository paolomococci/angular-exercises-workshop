import {
  Component,
  ViewChild
} from '@angular/core'
import { GalleryComponent } from './components/gallery/gallery.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'exerc06'
  
  @ViewChild(GalleryComponent) gallery: any

  addImage(): void {
    console.log('retrieved a new image')
    this.gallery.images.unshift(
      this.gallery.retrieveImage()
    )
  }

  removeImage(): void {
    console.log('removed an image')
    this.gallery.images.shift()
  }

}
