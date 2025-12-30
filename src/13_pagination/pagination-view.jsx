import "./pagination.css";
import { useState } from "react";
import { useEffect } from "react";

const LIMIT = 10;

const PaginationView = () => {
  const url = `https://dummyjson.com/products?limit=100`;
  const [page, setPage] = useState(1);

  const [products, setProducts] = useState([]);

  const handlePagination = (pageNo) => {
    setPage(pageNo);
  };

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setProducts(data?.products);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [url]);

  return (
    <div>
      <h3>Pagination</h3>
      <section className="products">
        {products?.slice(page * LIMIT - LIMIT, page * LIMIT)?.map((item) => (
          <div key={item.id} className="products__list">
            <img
              src={item?.thumbnail}
              alt={item?.title}
              height={150}
              width={200}
            />
            <span>{item?.title}</span>
          </div>
        ))}
      </section>
      <div className="pagination">
        {page > 1 && (
          <span onClick={() => handlePagination(page - 1)}>Prev</span>
        )}

        {[...Array(Math.ceil((products?.length || 0) / LIMIT))].map(
          (_, index) => (
            <span
              key={index}
              onClick={() => handlePagination(index + 1)}
              className={page === index + 1 ? "selected" : ""}
            >
              {index + 1}
            </span>
          )
        )}
        {page < Math.ceil(products.length / LIMIT) && (
          <span onClick={() => handlePagination(page + 1)}>Next</span>
        )}
      </div>
    </div>
  );
};

export default PaginationView;
