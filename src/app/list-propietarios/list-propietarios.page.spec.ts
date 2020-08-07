import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListPropietariosPage } from './list-propietarios.page';

describe('ListPropietariosPage', () => {
  let component: ListPropietariosPage;
  let fixture: ComponentFixture<ListPropietariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPropietariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListPropietariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
