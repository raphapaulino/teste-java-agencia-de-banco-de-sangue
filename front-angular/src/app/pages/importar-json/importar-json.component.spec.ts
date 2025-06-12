import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportarJsonComponent } from './importar-json.component';

describe('ImportarJsonComponent', () => {
  let component: ImportarJsonComponent;
  let fixture: ComponentFixture<ImportarJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportarJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportarJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
