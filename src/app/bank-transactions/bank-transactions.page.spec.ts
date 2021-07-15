import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankTransactionsPage } from './bank-transactions.page';

describe('BankTransactionsPage', () => {
  let component: BankTransactionsPage;
  let fixture: ComponentFixture<BankTransactionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankTransactionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankTransactionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
