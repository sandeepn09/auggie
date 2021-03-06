import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MenuHeaderComponent } from "./menu-header/menu-header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { PmtCardComponent } from "./pmt-card/pmt-card.component";
import { ValidationPopoverComponent } from "./validation-popover/validation-popover.component";
import { NumberMaskComponent } from "./number-mask/number-mask.component";
import { BankModalComponent } from "./bank-modal/bank-modal.component";
import { PaymentModalComponent } from "./payment-modal/payment-modal.component";
import { ProviderModalComponent } from "./provider-modal/provider-modal.component";
import { SendTextModalComponent } from "./send-text-modal/send-text-modal.component";
import { SignupConfirmComponent } from "./signup-confirm/signup-confirm.component";
import { MessageComponent } from "./message/message.component";
import { ErrorComponent } from "./error/error.component";
import { WarnConfirmComponent } from "./warn-confirm/warn-confirm.component";
import { ConfirmMsgComponent } from "./confirm-msg/confirm-msg.component";
import { SigninHelpComponent } from "./signin-help/signin-help.component";
import { CardMenuComponent } from "./card-menu/card-menu.component";
import { EditCardComponent } from "./edit-card/edit-card.component";
import { TransactionsComponent } from "./transactions/transactions.component";
import { SchedPaysComponent } from "./sched-pays/sched-pays.component";
import { MinCardComponent } from "./min-card/min-card.component";
import { UserService } from "../services/user.service";
import { MessageService } from "../services/message.service";
import { PhoneFormatPipe } from "../pipes/phone-format.pipe";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { VcodeComponent } from "./vcode/vcode.component";
import { VerMessageComponent } from "./ver-message/ver-message.component";
import { PasswordResetComponent } from "./password-reset/password-reset.component";
import { AppRoutingModule } from "../app-routing.module";
import { PhoneInputComponent } from "./phone-input/phone-input.component";
import { CardModalComponent } from "./card-modal/card-modal.component";

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
    SignupConfirmComponent,
    MessageComponent,
    ErrorComponent,
    WarnConfirmComponent,
    ConfirmMsgComponent,
    SigninHelpComponent,
    CardMenuComponent,
    EditCardComponent,
    TransactionsComponent,
    SchedPaysComponent,
    MinCardComponent,
    PhoneFormatPipe,
    SearchbarComponent,
    VcodeComponent,
    VerMessageComponent,
    PasswordResetComponent,
    PhoneInputComponent,
    CardModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
  ],
  exports: [
    MenuHeaderComponent,
    PmtCardComponent,
    ValidationPopoverComponent,
    NumberMaskComponent,
    TransactionsComponent,
    SchedPaysComponent,
    MinCardComponent,
    PhoneFormatPipe,
    SearchbarComponent,
    PhoneInputComponent
  ],
  providers: [UserService, MessageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
