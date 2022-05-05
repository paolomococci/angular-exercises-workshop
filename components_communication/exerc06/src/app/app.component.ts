import { Component } from '@angular/core'
import { GalleryComponent } from './components/gallery/gallery.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'exerc06';

  addImage(gallery: GalleryComponent): void {
    console.log('retrieved a new image')
    gallery.images.unshift(gallery.retrieveImage())
  }

  removeImage(gallery: GalleryComponent): void {
    gallery.images.shift()
    console.log('removed an image')
  }

}
