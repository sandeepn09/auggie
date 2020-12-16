import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuthresultPage } from './authresult.page';

describe('AuthresultPage', () => {
  let component: AuthresultPage;
  let fixture: ComponentFixture<AuthresultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthresultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
