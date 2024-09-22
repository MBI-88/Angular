import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Organization } from '../organization';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  organizations$: Observable<Organization[]> | undefined
  constructor(private orgGithub: GithubService) { }

  ngOnInit(): void {
    this.organizations$ = this.orgGithub.getOrgs()
  }

}
