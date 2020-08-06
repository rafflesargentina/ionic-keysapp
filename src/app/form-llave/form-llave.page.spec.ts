import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormLlavePage } from './form-llave.page';

describe('FormLlavePage', () => {
  let component: FormLlavePage;
  let fixture: ComponentFixture<FormLlavePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLlavePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormLlavePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
