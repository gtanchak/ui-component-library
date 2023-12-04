const data = [
  { id: 1, value: "Apple" },
  { id: 2, value: "Orange" },
  { id: 3, value: "Banana" },
];

const List = () => {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {data.map((item) => (
          <li>
            {item.value} <button>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
