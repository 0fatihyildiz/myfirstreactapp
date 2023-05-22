// props and emits

type MyButtonProps = {
  count: number;
  onCount: (value: number) => void;
};

function MyButton({count, onCount}: MyButtonProps) {
  return (
    <button onClick={() => onCount(1)}>I'm a button {count} times</button>
  );
}

export default MyButton;
