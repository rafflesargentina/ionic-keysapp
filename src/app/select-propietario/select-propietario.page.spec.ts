import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SelectPropietarioPage } from './select-propietario.page';

describe('SelectPropietarioPage', () => {
  let component: SelectPropietarioPage;
  let fixture: ComponentFixture<SelectPropietarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectPropietarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SelectPropietarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
