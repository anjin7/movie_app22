import Button from './Button';
import styles from './App.module.css';
import { useState, useEffect } from 'react'

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time");
  const iRunOnlyOnce = () => {
    console.log("I run only once");
  };
  useEffect(() => {
    console.log("CALL THE API")
  }, []);
  return (
    <div>
      <h2 className={styles.title}>{counter}</h2>
      <button onClick={onClick}>Click me</button>
      <Button text={"continue"} />
    </div>
  );
}

export default App;
