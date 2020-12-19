import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReferalFormPage } from './referal-form.page';

describe('ReferalFormPage', () => {
  let component: ReferalFormPage;
  let fixture: ComponentFixture<ReferalFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferalFormPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReferalFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
