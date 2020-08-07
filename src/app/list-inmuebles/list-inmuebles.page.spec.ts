import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListInmueblesPage } from './list-inmuebles.page';

describe('ListInmueblesPage', () => {
  let component: ListInmueblesPage;
  let fixture: ComponentFixture<ListInmueblesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInmueblesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListInmueblesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
