import { Component, OnInit, } from '@angular/core';
import { IssuesService } from '../issues.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter, Input } from '@angular/core'

@Component({
  selector: 'app-edit-issue',
  templateUrl: './edit-issue.component.html',
  styleUrls: ['./edit-issue.component.css']
})
export class EditIssueComponent implements OnInit {
  issueForm: FormGroup | null = null
  @Output() updateClose = new EventEmitter()
  @Input() issueNo: number | null = null
  constructor(private buildForm:FormBuilder,private issueService:IssuesService) { }

  ngOnInit(): void {
    this.issueForm = this.buildForm.group({
      title:['',Validators.required],
      description:[''],
      priority:['',Validators.required],
      type:['',Validators.required]
    })
    this.issueForm.controls['title'].valueChanges.subscribe((title: string) => {
      this.issueService.getSuggestions(title)
    })
  }
  editIssue(){
    if (this.issueForm && this.issueForm.invalid){
      this.issueForm.markAllAsTouched()
      return;
    }
    /* Llamar a la funcion */
    this.issueService.editData(this.issueForm?.value,this.issueNo)
    this.updateClose.emit()
  }

}
