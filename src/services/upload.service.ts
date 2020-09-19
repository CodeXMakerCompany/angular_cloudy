import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UploadService {
  constructor(private _http: HttpClient) {}

  uploadImage(vals): Observable<any> {
    let data = vals;

    return this._http.post(
      'https://api.cloudinary.com/v1_1/codexmaker/image/upload',
      data
    );
  }
}
