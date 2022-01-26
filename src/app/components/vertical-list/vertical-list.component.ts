import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/objects/Project';
import { ArrayUtilitiesService } from 'src/app/services/array-utilities.service';



@Component({
  selector: 'app-vertical-list',
  templateUrl: './vertical-list.component.html',
  styleUrls: ['./vertical-list.component.scss']
})
export class VerticalListComponent implements OnInit {

  constructor(private array_utilities: ArrayUtilitiesService) { }

  vertical_list = ["vertical-list"];
  project_list = "project-list";
  is_visible = false;
  projects = [new Project('mock_project', 'mock_description'), 
    new Project('mock_project_2', 'mock_description_2'),
    new Project('mock_project_3', 'mock_description_3'),
    new Project('mock_project_4', 'mock_description_4'),
    new Project('mock_project_5', 'mock_description_5')];

  ngOnInit(): void {
  }

  showDiv() {
    this.array_utilities.remove_element(this.vertical_list ,'invisible');
    this.vertical_list.push("visible");
  }

  hideDiv() {
    this.array_utilities.remove_element(this.vertical_list ,'visible');
    this.vertical_list.push("invisible");
  }

  clickDisplay() {
    if(this.is_visible) {
      this.array_utilities.remove_element(this.vertical_list ,'visible');
      this.vertical_list.push("invisible");
      this.is_visible = false;
    }
    else {
      this.array_utilities.remove_element(this.vertical_list ,'invisible');
      this.vertical_list.push("visible");
      this.is_visible = true;
    }
  }

}
