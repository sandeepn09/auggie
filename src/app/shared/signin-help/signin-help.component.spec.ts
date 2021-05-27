import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigninHelpComponent } from './signin-help.component';

describe('SigninHelpComponent', () => {
  let component: SigninHelpComponent;
  let fixture: ComponentFixture<SigninHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninHelpComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigninHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
