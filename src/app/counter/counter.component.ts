import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCounter } from '../state/counter.selector';
import { decrement, increment } from '../state/counter.actions';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  count = 0;
  constructor(private store: Store) {}
  ngOnInit(): void {
    this.store.select(getCounter).subscribe((val: number) => {
      this.count = val;
    });
  }
  inc(): void {
    this.store.dispatch(increment({value: 2}));
  }
  dec(): void {
    this.store.dispatch(decrement({value: 2}));
  }
}
