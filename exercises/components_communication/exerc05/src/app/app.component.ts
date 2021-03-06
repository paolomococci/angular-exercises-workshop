import { Component } from '@angular/core'
import { GalleryComponent } from './components/gallery/gallery.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'exerc05'

  addImage(gallery: GalleryComponent): void {
    gallery.images.unshift(gallery.retrieveImage())
    console.log('added new image')
  }

  removeImage(gallery: GalleryComponent): void {
    gallery.images.shift()
    console.log('removed an image')
  }

}
