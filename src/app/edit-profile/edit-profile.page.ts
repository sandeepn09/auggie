import { Component, OnInit } from "@angular/core";
import { User } from "../models/user/user-models";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AlertController, ModalController } from "@ionic/angular";
import {
  Capacitor,
  Plugins,
  CameraResultType,
  CameraSource,
  FilesystemDirectory,
} from "@capacitor/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { UploadService } from "../services/upload.service";
import { PaymentModalComponent } from "../shared/payment-modal/payment-modal.component";
import { UserService } from "../services/user.service";

const { Camera, Filesystem } = Plugins;

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
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10),
      Validators.maxLength(11),
    ]),
    occupation: new FormControl("", Validators.required),
    annualIncome: new FormControl("", Validators.required),
    dob: new FormControl("", Validators.required),
    gender: new FormControl(""),

    address: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    state: new FormControl("", Validators.required),
    postalCode: new FormControl(""),
  });

  constructor(
    public alertController: AlertController,
    private sanitizer: DomSanitizer,
    private uploadService: UploadService,
    public modalController: ModalController,
    private userService: UserService
  ) {}

  ngOnInit() {}

  save() {
    if (this.profileForm.invalid) {
      console.log(this.profileForm.value);
      this.presentAlert();
    } else {
      console.log(this.profileForm);
      console.log("BD Form is VALID!!!!");
      this.userService.updateProfile(this.profileForm.value);
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
    Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt,
    }).then((result) => {
      console.log("Result", result.path);
    });

    /**const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
    });**/
    //this.picUrl = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
    // this.picUrl = image.path;

    // console.log("PICURL", this.picUrl);
    // console.log("Image Path", image.format);
  }

  async takePicture1() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });

    const photoInTempStorage = await Filesystem.readFile({ path: image.path });
    let date = new Date(),
      time = date.getTime(),
      fileName = time + ".png";

    await Filesystem.writeFile({
      data: image.dataUrl,
      path: fileName,
      directory: FilesystemDirectory.Data,
    });

    const finalPhotoUri = await Filesystem.getUri({
      directory: FilesystemDirectory.Data,
      path: fileName,
    });

    console.log("photoInTempStorage", finalPhotoUri);
  }

  async presentModal() {
    console.log("BANK INFO", this.user);
    const modal = await this.modalController.create({
      component: PaymentModalComponent,
      cssClass: "confirm-modal",
      componentProps: this.user,
    });

    await modal.present();

    const { data: info, role } = await modal.onWillDismiss();
    console.log(role);
  }
}
