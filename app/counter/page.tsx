'use client';

import Link from 'next/link';
import { decrement, increment, incrementByAmount, reset } from '../../redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const CounterPage = () => {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  return (
    <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
      <h4 style={{ marginBottom: 16 }}>{count}</h4>
      <button onClick={() => dispatch(incrementByAmount(2))}>increment</button>
      <button onClick={() => dispatch(decrement())} style={{ marginInline: 16 }}>
        decrement
      </button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <Link href='/quiz'>To quiz</Link>
    </div>
  );
};

export default CounterPage;
