import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardModalComponent } from './card-modal.component';

describe('CardModalComponent', () => {
  let component: CardModalComponent;
  let fixture: ComponentFixture<CardModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
