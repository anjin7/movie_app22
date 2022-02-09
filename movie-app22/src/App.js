import Button from './Button';
import styles from './App.module.css';

function App() {
  return (
    <div>
      <h2 className={styles.title}>Hello</h2>
      <Button text={"continue"} />
    </div>
  );
}

export default App;
