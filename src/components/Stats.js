function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercent =
    numItems > 0 ? Math.round((packedItems / numItems) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You got everything! Ready to go ✈️"
          : `You Have ${numItems} items on your list, and you have already packed
        ${packedItems}(${packedPercent}%)`}
      </em>
    </footer>
  );
}

export default Stats;
