import { Component, OnInit } from '@angular/core';
import { UserprojectAddComponent} from './userproject-add.component';
import { Phase } from "../shared/phase";
import { UserProjectService } from "./user-project.service";

@Component({
  moduleId: module.id,
  selector: 'pc-userproject',
  templateUrl: './userproject.component.html'
})
export class UserprojectComponent implements OnInit {
  items: Phase[] = [];

  constructor(private ups: UserProjectService) { }

  ngOnInit() {
    this.items = this.ups .getItems();
  }

}
