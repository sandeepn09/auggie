import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchedPaysComponent } from './sched-pays.component';

describe('SchedPaysComponent', () => {
  let component: SchedPaysComponent;
  let fixture: ComponentFixture<SchedPaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedPaysComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchedPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
