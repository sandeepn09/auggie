import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifyBillersPage } from './verify-billers.page';

describe('VerifyBillersPage', () => {
  let component: VerifyBillersPage;
  let fixture: ComponentFixture<VerifyBillersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyBillersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifyBillersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
