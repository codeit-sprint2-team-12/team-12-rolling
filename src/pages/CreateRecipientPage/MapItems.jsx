const formatDate = (value) => {
  const date = new Date(value);
  return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
};

function CardListItems({ item }) {
  return (
    <div>
      <h1>From.{item.name}</h1>
      <h2>realtionship </h2>
      <h3>{item.recentMessages}(recentMessages)</h3>
      <p>{formatDate(item.createdAt)}</p>
    </div>
  );
}

function MapItems({ items }) {
  console.log(items);
  const { results } = items[0];

  return (
    <ul>
      {results.map((item) => {
        return (
          <li>
            <CardListItems item={item} />
          </li>
        );
      })}
    </ul>
  );
}

export default MapItems;
