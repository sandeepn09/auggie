import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PmtCardComponent } from './pmt-card.component';

describe('PmtCardComponent', () => {
  let component: PmtCardComponent;
  let fixture: ComponentFixture<PmtCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmtCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PmtCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
