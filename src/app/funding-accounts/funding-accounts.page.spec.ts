import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FundingAccountsPage } from './funding-accounts.page';

describe('FundingAccountsPage', () => {
  let component: FundingAccountsPage;
  let fixture: ComponentFixture<FundingAccountsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingAccountsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FundingAccountsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
