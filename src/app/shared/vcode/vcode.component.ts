import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { __spreadArrays } from "tslib";

@Component({
  selector: "app-vcode",
  templateUrl: "./vcode.component.html",
  styleUrls: ["./vcode.component.scss"],
})
export class VcodeComponent implements OnInit {
  @ViewChild("vc1") vc1;

  verCode: string[] = ["", "", "", ""];
  constructor(public modalController: ModalController) {}

  ngOnInit() {}

  vcode(event, prev, next, index) {
    console.log(event.id);
    console.log("next", next);
    const pattern = "/[0-9/";
    if (next != "") {
      next.setFocus();
    } else {
      const verCodeStr = this.verCode.join("");
      console.log("verCode", verCodeStr);

      if (verCodeStr.length == 4) {
        this.modalController.dismiss(
          { code: new Number(verCodeStr) },
          "confirm"
        );
      }
    }
  }

  ionViewDidEnter() {
    console.log("ionViewDidEnter");

    setTimeout(() => {
      this.vc1.focus;
      console.log("Enter");
    });
  }

  confirm() {
    
  }
}
