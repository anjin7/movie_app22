import Button from './Button';
import styles from './App.module.css';
import { useState } from 'react'

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  return (
    <div>
      <h2 className={styles.title}>{counter}</h2>
      <button onClick={onClick}>Click me</button>
      <Button text={"continue"} />
    </div>
  );
}

export default App;
