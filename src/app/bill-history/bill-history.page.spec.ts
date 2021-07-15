import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillHistoryPage } from './bill-history.page';

describe('BillHistoryPage', () => {
  let component: BillHistoryPage;
  let fixture: ComponentFixture<BillHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillHistoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
