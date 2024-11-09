import { FC, useState } from 'react';
import styles from './Counter.module.scss';

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = (props) => {
  const [counter, setCounter] = useState<number>(0);

  const incrementCounter = () => setCounter((prev) => prev + 1);
  const decrementCounter = () => setCounter((prev) => prev - 1);

  return (
    <div className={styles.counter}>
      <span>Counter is {counter}</span>

      <button onClick={incrementCounter}>Plus</button>
      <button onClick={decrementCounter}>Minus</button>
    </div>
  );
};
