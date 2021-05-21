import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendTextModalComponent } from './send-text-modal.component';

describe('SendTextModalComponent', () => {
  let component: SendTextModalComponent;
  let fixture: ComponentFixture<SendTextModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendTextModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendTextModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
