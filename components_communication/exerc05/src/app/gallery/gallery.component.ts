import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  images: string[] = []

  constructor() { }

  ngOnInit(): void {
    this.images = new Array(5).fill(0).map(this.retrieveImage)
  }
  retrieveImage(): string {
    throw new Error('Method not implemented.')
  }

}
