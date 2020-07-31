import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListInmueblesComponent } from './list-inmuebles.component';

describe('ListInmueblesComponent', () => {
  let component: ListInmueblesComponent;
  let fixture: ComponentFixture<ListInmueblesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListInmueblesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListInmueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
