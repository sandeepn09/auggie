import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MinCardComponent } from './min-card.component';

describe('MinCardComponent', () => {
  let component: MinCardComponent;
  let fixture: ComponentFixture<MinCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MinCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
