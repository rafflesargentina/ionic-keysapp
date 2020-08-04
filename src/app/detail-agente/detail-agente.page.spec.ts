import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailAgentePage } from './detail-agente.page';

describe('DetailAgentePage', () => {
  let component: DetailAgentePage;
  let fixture: ComponentFixture<DetailAgentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAgentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailAgentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
