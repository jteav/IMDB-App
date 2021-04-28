import { Component, OnInit } from '@angular/core';
import { MediaService, SearchType } from './../../services/media.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media',
  templateUrl: './media.page.html',
  styleUrls: ['./media.page.scss'],
})
export class MediaPage implements OnInit {

  results: Observable<any>;
  searchTerm = '';
  type: SearchType = SearchType.all;

  /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

  searchChanged() {
    // Call the service function which returns an Observable
    this.results = this.mediaService.searchData(this.searchTerm, this.type);
  }

}
