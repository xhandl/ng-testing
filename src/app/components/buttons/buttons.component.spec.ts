import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ButtonsComponent} from './buttons.component';
import {click, findEl} from '../../spec-helpers';

describe('ButtonsComponent', () => {
  let component: ButtonsComponent;
  let fixture: ComponentFixture<ButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('click me btn should be disabled by default', () => {
    const button = findEl(fixture, 'click-me-btn');
    expect(button.nativeElement.disabled).toBeTrue();
  });

  it('add item btn should be enabled by default', () => {
    const button = findEl(fixture, 'add-item-btn');
    expect(button.nativeElement.disabled).toBeFalse();
  });

  it('remove item btn should be enabled by default', () => {
    const button = findEl(fixture, 'remove-item-btn');
    expect(button.nativeElement.disabled).toBeFalse();
  });

  it('click me btn should be enabled when add item', () => {
    click(fixture, 'add-item-btn');
    fixture.detectChanges();
    const button = findEl(fixture, 'click-me-btn');
    expect(button.nativeElement.disabled).toBeFalse();
  });

  it('click me btn should be disabled when remove item', () => {
    component.items.set([1]);
    fixture.detectChanges();

    click(fixture, 'remove-item-btn');
    fixture.detectChanges();
    const button = findEl(fixture, 'click-me-btn');
    expect(button.nativeElement.disabled).toBeTrue();
  });

  it('should alert when click me btn clicked', () => {
    component.items.set([1]);
    fixture.detectChanges();

    spyOn(window, 'alert');
    click(fixture, 'click-me-btn');
    expect(window.alert).toHaveBeenCalledWith('Hello World!');
  });
});
