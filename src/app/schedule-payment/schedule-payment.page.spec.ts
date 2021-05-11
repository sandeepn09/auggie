import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedulePaymentPage } from './schedule-payment.page';

describe('SchedulePaymentPage', () => {
  let component: SchedulePaymentPage;
  let fixture: ComponentFixture<SchedulePaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulePaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedulePaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
