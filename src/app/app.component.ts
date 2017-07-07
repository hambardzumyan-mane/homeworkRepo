import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


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
            "imageDate": "01/15/2016"
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
