import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BillersPage } from './billers.page';

describe('BillersPage', () => {
  let component: BillersPage;
  let fixture: ComponentFixture<BillersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BillersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
