import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TeaService } from '@app/core';
import { Tea } from '@app/models';

@Component({
  selector: 'app-tea-details',
  templateUrl: './tea-details.page.html',
  styleUrls: ['./tea-details.page.scss'],
})
export class TeaDetailsPage implements OnInit {
  rating: number;

  tea: Tea;

  constructor(private route: ActivatedRoute, private teaService: TeaService) {}

  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.teaService.get(id).subscribe((t: Tea) => {
      this.tea = t;
      this.rating = t.rating;
    });
  }

  ratingChanged() {
    if (this.tea) {
      this.tea.rating = this.rating;
      this.teaService.save(this.tea);
    }
  }
}
