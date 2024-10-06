import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {findComponent} from '../../spec-helpers';
import {By} from '@angular/platform-browser';
import {CounterComponent} from '../counter/counter.component';
import {MockComponent} from 'ng-mocks';

describe('HomeComponent with ng-mocks', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed
      .configureTestingModule({
        imports: [HomeComponent]
      })
      .overrideComponent(HomeComponent, {
        remove: {imports: [CounterComponent]},
        add: {imports: [MockComponent(CounterComponent)]}
      })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('renders without errors', () => {
    expect(component).toBeTruthy();
  });

  it('renders an independent counter', () => {
    const counter = findComponent(fixture, 'app-counter');
    expect(counter).toBeTruthy();
  });

  it('passes a start count', () => {
    const counter = findComponent(fixture, 'app-counter');
    expect(counter.attributes['ng-reflect-start-count']).toBe('5');
  });

  it('listens for count changes', () => {
    spyOn(console, 'log');
    const counter = findComponent(fixture, 'app-counter');
    const count = 5;
    counter.triggerEventHandler('countChange', count);

    expect(console.log).toHaveBeenCalledWith(
      'countChange event from CounterComponent',
      count
    );
  });

  it('renders an independent counter', () => {
    const counterEl = fixture.debugElement.query(
      By.directive(CounterComponent)
    );
    const counter: CounterComponent = counterEl.componentInstance;

    expect(counter).toBeTruthy();
  });

  it('passes a start count', () => {
    const counterEl = fixture.debugElement.query(
      By.directive(CounterComponent)
    );
    const counter: CounterComponent = counterEl.componentInstance;

    expect(counter.startCount).toBe(5);
  });

  it('listens for count changes', () => {
    const counterEl = fixture.debugElement.query(
      By.directive(CounterComponent)
    );
    const counter: CounterComponent = counterEl.componentInstance;

    spyOn(console, 'log');
    const count = 5;
    counter.countChange.emit(5);
    expect(console.log).toHaveBeenCalledWith(
      'countChange event from CounterComponent',
      count
    );
  });
});
