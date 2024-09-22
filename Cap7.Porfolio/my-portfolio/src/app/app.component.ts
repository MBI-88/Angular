import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = environment.username
  constructor(private title:Title, private meta:Meta){
  }
  
  ngOnInit() {
    this.title.setTitle('My portfolio')
    this.meta.addTags([
      {
        name: "description",
        content: `${this.username} repos on Github`

      },
      {
        name:'author',
        content: `${this.username}`
      }
    ])
  }
}
