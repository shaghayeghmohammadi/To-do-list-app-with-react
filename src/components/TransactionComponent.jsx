import { useState } from "react";

const TransactionComponent = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredItem, setFilteredItem] = useState(transactions);

  const filterTransaction = (search) => {
    if (!search || search === "") {
      setFilteredItem(transactions);
      return;
    }
    const filter = transactions.filter((t) =>
      t.desc.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredItem(filter);
  };
  
  // useEffect(() => {
  //   filterTransaction(searchItem);
  // }, [transactions]);

  const changeHandler = (e) => {
    setSearchItem(e.target.value);
    filterTransaction(e.target.value);
  };


  if (transactions.length === 0) return <p className="ptag">No transaction is added yet! 💬</p>;

  return (
    <section>
      <input
        type="text"
        className="search"
        placeholder="Search box"
        value={searchItem}
        onChange={changeHandler}
      />
      {filteredItem.length
        ? filteredItem.map((t) => (
            <div
              className="list-ts"
              style={{
                borderRight: t.theType === "expense" && "4px solid red",
              }}
              key={t.id}
            >
              <span>{t.desc}</span>
              <span>{t.amount}$</span>
              <span>{t.theType}</span>
            </div>
          ))
        : "Sorry ☹️ No match was found!"}
    </section>
  );
};

export default TransactionComponent;
