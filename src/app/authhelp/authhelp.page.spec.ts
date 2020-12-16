import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthhelpPage } from './authhelp.page';

describe('AuthhelpPage', () => {
  let component: AuthhelpPage;
  let fixture: ComponentFixture<AuthhelpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthhelpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthhelpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
