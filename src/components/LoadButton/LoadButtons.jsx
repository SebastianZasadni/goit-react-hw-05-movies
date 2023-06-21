export const PageUpBtn = ({ onUp }) => {
  return (
    <button type="submit" onClick={onUp}>
      Page up
    </button>
  );
};

export const PageDownBtn = ({ onDown }) => {
  return (
    <button type="submit" onClick={onDown}>
      Page down
    </button>
  );
};
