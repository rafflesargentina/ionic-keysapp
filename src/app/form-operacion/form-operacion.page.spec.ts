import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormOperacionPage } from './form-operacion.page';

describe('FormOperacionPage', () => {
  let component: FormOperacionPage;
  let fixture: ComponentFixture<FormOperacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOperacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormOperacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
