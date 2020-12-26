import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewPaymethodPage } from './view-paymethod.page';

describe('ViewPaymethodPage', () => {
  let component: ViewPaymethodPage;
  let fixture: ComponentFixture<ViewPaymethodPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaymethodPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPaymethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
