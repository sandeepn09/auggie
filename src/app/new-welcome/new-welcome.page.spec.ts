import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewWelcomePage } from './new-welcome.page';

describe('NewWelcomePage', () => {
  let component: NewWelcomePage;
  let fixture: ComponentFixture<NewWelcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewWelcomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewWelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
