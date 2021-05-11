import { Component, OnInit } from "@angular/core";
import { User } from "../models/user/user-models";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AlertController } from "@ionic/angular";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.page.html",
  styleUrls: ["./edit-profile.page.scss"],
})
export class EditProfilePage implements OnInit {
  picUrl: SafeResourceUrl = "../../../assets/sandeep.png";

  user: User = {
    userId: 0,
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    email: "",
    phone: "",
    occupation: "",
    gender: "",
    dob: "",
    income: "",
    createDateTime: null,
    updateDateTime: null,
  };

  profileForm = new FormGroup({
    firstName: new FormControl("", Validators.required),
    lastName: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    postalCode: new FormControl("", Validators.required),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    occupation: new FormControl("", Validators.required),
    income: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    pronoun: new FormControl(""),
  });

  constructor(public alertController: AlertController, private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  save() {
    if (this.profileForm.invalid) {
      console.log(this.profileForm.value);
      this.presentAlert();
    } else {
      console.log(this.profileForm);
      console.log("BD Form is VALID!!!!");
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Error",
      // subHeader: 'Some fields have invalid values',
      message: "Please enter valid values to proceeed.",
      buttons: ["OK"],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
    });

    // this.picUrl = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    this.picUrl = image.dataUrl;
    console.log("PICURL", this.picUrl);
  }
}
