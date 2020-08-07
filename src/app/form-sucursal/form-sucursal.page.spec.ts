import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormSucursalPage } from './form-sucursal.page';

describe('FormSucursalPage', () => {
  let component: FormSucursalPage;
  let fixture: ComponentFixture<FormSucursalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormSucursalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormSucursalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
