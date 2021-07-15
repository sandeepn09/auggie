import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddBillsPage } from './add-bills.page';

describe('AddBillsPage', () => {
  let component: AddBillsPage;
  let fixture: ComponentFixture<AddBillsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBillsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddBillsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
