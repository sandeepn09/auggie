import { Injectable } from "@angular/core";
import { Plugins, CameraPhoto, CameraResultType, CameraSource } from "@capacitor/core";
import { promise } from "protractor";
const { Camera } = Plugins;

export interface FileInfo {
  private: boolean;
  title: string;
  file_name: string;
}

export interface FileItem {
  created_at: string;
  file_name: string;
  id: string;
  image_url?: Promise<any>;
  private: boolean;
  title: string;
  user_id: string;
  creator?: boolean;
}

@Injectable({
  providedIn: "root",
})
export class UploadService {
  constructor() {}

  addFiles() {
    const image = Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    console.log("image", image);
  }

  uploadFile(file: CameraPhoto, info: FileInfo) {}
}
