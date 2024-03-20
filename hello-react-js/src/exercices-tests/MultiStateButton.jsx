function MultiStateButton({ items, selected, onSelected }) {
  if (!items?.length) {
    throw new Error('items must not be empty');
  }

  function handleClick() {
    const currentIndex = items.indexOf(selected);
    const nextIndex = (currentIndex + 1) % items.length;
    onSelected(items[nextIndex]);
  }

  return (
    <button className="MultiStateButton" onClick={handleClick}>
      {selected}
    </button>
  );
}

export default MultiStateButton;