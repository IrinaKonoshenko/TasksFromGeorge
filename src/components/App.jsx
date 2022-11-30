import { Button } from './Button/Button';

export const App = () => {
  return (
    <div className="flex flex-col gap-4 p-5 bg-slate-200">
      <div className="flex gap-3">
        <Button
          text="Large"
          size="large"
          variant="solid"
          onClick={() => alert('solid')}
        />
        <Button
          text="Large"
          size="large"
          variant="outlined"
          onClick={() => alert('outlined')}
        />
        <Button
          text="Large"
          size="large"
          variant="text"
          onClick={() => alert('text')}
        />
      </div>
      <div className="flex gap-3">
        <Button text="Medium" variant="solid" />
        <Button text="Medium" variant="outlined" />
        <Button text="Medium" variant="text" />
      </div>
      <div className="flex gap-3">
        <Button text="Small" size="small" variant="solid" />
        <Button text="Small" size="small" variant="outlined" />
        <Button text="Small" size="small" variant="text" />
      </div>
    </div>
  );
};
