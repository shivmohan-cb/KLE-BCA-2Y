import useSearch from "../context/SearchContext";
import Product from "./Product";

const ProductList = ({ data }) => {
  const { search } = useSearch();

  const filter = (search) => {
    if (!data.length || !search) {
      return false;
    }
    const filtered = data.filter((elm) => {
      return elm.title.toLowerCase().includes(search.toLowerCase()) ||
        elm.category.toLowerCase().includes(search.toLowerCase())
        ? true
        : false;
    });
    return filtered;
  };

  const renderCondition = () => {
    let filteredData = filter(search);
    if (filteredData) {
      return filteredData.length ? (
        filteredData.map((elm) => (
          <Product
            key={elm.id}
            id={elm.id}
            title={elm.title}
            price={elm.price}
            image={elm.image}
            category={elm.category}
          />
        ))
      ) : (
        <div>No product with this name found</div>
      );
    } else {
      return data.length ? (
        data.map((elm) => (
          <Product
            key={elm.id}
            id={elm.id}
            title={elm.title}
            price={elm.price}
            image={elm.image}
            category={elm.category}
          />
        ))
      ) : (
        <div>Products Loding...</div>
      );
    }
  };

  return (
    <>
      <h2>Products</h2>
      <div className="products">{renderCondition()}</div>
    </>
  );
};

export default ProductList;