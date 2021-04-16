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

  constructor(private mediaService: MediaService) { }

  ngOnInit() {
  }

  searchChanged() {
    this.results = this.mediaService.searchData(this.searchTerm, this.type);
  }

}
