import { Component } from '@angular/core';

//Services
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UploadService],
})
export class AppComponent {
  title = 'angular-cloudinary';

  constructor(private _uploadService: UploadService) {}

  files: File[] = [];

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  onUpload() {
    //Scape empty array
    if (!this.files[0]) {
      alert('Primero sube una imagen, por favor');
    }

    //Upload my image to cloudinary
    const file_data = this.files[0];
    const data = new FormData();
    data.append('file', file_data);
    data.append('upload_preset', 'angular_cloudinary');
    data.append('cloud_name', 'codexmaker');

    this._uploadService.uploadImage(data).subscribe((response) => {
      if (response) {
        console.log(response);
      }
    });
  }
}
