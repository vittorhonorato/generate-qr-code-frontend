import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateQrCodeComponent } from './generate-qr-code.component';

describe('GenerateQrCodeComponent', () => {
  let component: GenerateQrCodeComponent;
  let fixture: ComponentFixture<GenerateQrCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateQrCodeComponent]
    });
    fixture = TestBed.createComponent(GenerateQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
