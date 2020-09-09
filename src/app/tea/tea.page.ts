import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { Tea } from '@app/models';
import { AuthenticationService, TeaService } from '@app/core';

@Component({
  selector: 'app-tea',
  templateUrl: 'tea.page.html',
  styleUrls: ['tea.page.scss'],
})
export class TeaPage implements OnInit {
  teaMatrix$: Observable<Array<Array<Tea>>>;

  constructor(private auth: AuthenticationService, private tea: TeaService) {}

  ngOnInit() {
    this.teaMatrix$ = this.tea
      .getAll()
      .pipe(map((teas: Array<Tea>) => this.listToMatrix(teas)));
  }

  logout() {
    this.auth.logout().pipe(take(1)).subscribe();
  }

  private listToMatrix(teas: Array<Tea>): Array<Array<Tea>> {
    const matrix: Array<Array<Tea>> = [];
    let row = [];
    teas.forEach(t => {
      row.push(t);
      if (row.length === 4) {
        matrix.push(row);
        row = [];
      }
    });

    if (row.length) {
      matrix.push(row);
    }

    return matrix;
  }
}
