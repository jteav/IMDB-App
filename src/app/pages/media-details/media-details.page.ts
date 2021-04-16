import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaService } from './../../services/media.service';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.page.html',
  styleUrls: ['./media-details.page.scss'],
})
export class MediaDetailsPage implements OnInit {

  information = null;

  constructor(private activatedRoute: ActivatedRoute, private mediaService: MediaService) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.mediaService.getDetails(id).subscribe(result => {
      this.information = result;
    });
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
