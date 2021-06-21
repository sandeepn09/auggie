import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VcodeComponent } from './vcode.component';

describe('VcodeComponent', () => {
  let component: VcodeComponent;
  let fixture: ComponentFixture<VcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcodeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
