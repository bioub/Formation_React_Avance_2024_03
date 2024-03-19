import { useState } from "react";

function MultiStateButton({ items }) {
  const [selected, setSelected] = useState(items[0]);

  if (!items?.length) {
    throw new Error('items must not be empty');
  }

  function handleClick() {
    const currentIndex = items.indexOf(selected);
    const nextIndex = (currentIndex + 1) % items.length;
    setSelected(items[nextIndex]);
  }

  return (
    <button className="MultiStateButton" onClick={handleClick}>
      {selected}
    </button>
  );
}

export default MultiStateButton;