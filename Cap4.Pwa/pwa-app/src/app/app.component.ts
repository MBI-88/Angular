import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar'
import {switchMap,filter,map} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pwa-app';
  constructor(private update: SwUpdate, private snackbar: MatSnackBar) { }
  ngOnInit() {
    this.update.available.pipe(
      switchMap(() => this.snackbar.open('A new version is available!', 'Update now').afterDismissed()),
      filter(result => result.dismissedByAction),
      map(() => this.update.activateUpdate().then(() =>
        location.reload()))
    ).subscribe();
  }
}
