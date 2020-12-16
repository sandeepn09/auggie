import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreditHistoryPage } from './credit-history.page';

describe('CreditHistoryPage', () => {
  let component: CreditHistoryPage;
  let fixture: ComponentFixture<CreditHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreditHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
