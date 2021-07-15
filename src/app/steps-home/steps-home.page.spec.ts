import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepsHomePage } from './steps-home.page';

describe('StepsHomePage', () => {
  let component: StepsHomePage;
  let fixture: ComponentFixture<StepsHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepsHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
