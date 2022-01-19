import { Component, OnInit } from '@angular/core';
import { ArrayUtilitiesService } from 'src/app/services/array-utilities.service';

@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.scss']
})
export class NavigationListComponent implements OnInit {

  switch = ["switch"];
  switch_frame = ["switch-frame"];

  constructor(private array_utilities: ArrayUtilitiesService) { }
  
  ngOnInit(): void {
  }

  switchOn(): void {
    if (!this.array_utilities.element_exists(this.switch, "flip-the-switch")) {
      this.array_utilities.remove_element(this.switch, 'unflip-the-switch');
      this.switch.push("flip-the-switch");
    }
    else {
      this.array_utilities.remove_element(this.switch, 'flip-the-switch');
      this.switch.push('unflip-the-switch');
    }
  }

}
