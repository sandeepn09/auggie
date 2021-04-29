import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FundingAccountPage } from './funding-account.page';

describe('FundingAccountPage', () => {
  let component: FundingAccountPage;
  let fixture: ComponentFixture<FundingAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingAccountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FundingAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
