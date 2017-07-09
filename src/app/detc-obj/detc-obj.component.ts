import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detc-obj',
  templateUrl: './detc-obj.component.html',
  styleUrls: ['./detc-obj.component.css']
})
export class DetcObjComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selectedItems = ['Camera', 'Date'];

  isDropDown: boolean = false;
  dropDownMenu() {
    this.isDropDown = !this.isDropDown;
  }

  ocw = {
    "cameras": [
      { "cameraName": "Camera 1",
        "images":
          [
            {
              "imageName": "assets/images/ficsed.JPG",
              "imageDate": "01/14/2015"
            },
            {
              "imageName": "assets/images/ficsed.JPG",
              "imageDate": "01/15/2015"
            }
          ]
      },
      { "cameraName": "Camera 2",
        "images":
          [
            {
              "imageName": "assets/images/ficsed.JPG",
              "imageDate": "01/15/2016"
            },
            {
              "imageName": "assets/images/ficsed.JPG",
              "imageDate": "01/15/2018"
            }
          ]
      }
    ]
  };
  title = 'app';

}
