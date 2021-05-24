import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuHeaderComponent } from "./menu-header/menu-header.component";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PmtCardComponent } from "./pmt-card/pmt-card.component";
import { ValidationPopoverComponent } from "./validation-popover/validation-popover.component";
import { NumberMaskComponent } from "./number-mask/number-mask.component";
import { BankModalComponent } from "./bank-modal/bank-modal.component";
import { PaymentModalComponent } from "./payment-modal/payment-modal.component";
import { ProviderModalComponent } from "./provider-modal/provider-modal.component";
import { SendTextModalComponent } from "./send-text-modal/send-text-modal.component";
import { SignupConfirmComponent } from "./signup-confirm/signup-confirm.component";

@NgModule({
  declarations: [
    MenuHeaderComponent,
    PmtCardComponent,
    ValidationPopoverComponent,
    SendTextModalComponent,
    NumberMaskComponent,
    ProviderModalComponent,
    BankModalComponent,
    PaymentModalComponent,
    SignupConfirmComponent
  ],
  imports: [CommonModule, FormsModule, IonicModule],
  exports: [
    MenuHeaderComponent,
    PmtCardComponent,
    ValidationPopoverComponent,
    NumberMaskComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
