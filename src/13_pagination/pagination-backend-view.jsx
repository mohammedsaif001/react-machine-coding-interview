import "./pagination.css";
import { useState } from "react";
import { useEffect } from "react";

const LIMIT = 10;

const PaginationBackendView = () => {
  const [page, setPage] = useState(1);

  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const handlePagination = (pageNo) => {
    setPage(pageNo);
  };

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${LIMIT}&skip=${
            page * LIMIT - LIMIT
          }`,
          {
            signal: controller.signal,
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setTotalCount(data?.total);
        setProducts(data?.products);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, [page]);

  return (
    <div>
      <h3>Pagination</h3>
      <section className="products">
        {products?.map((item) => (
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

        {[...Array(Math.ceil(totalCount / LIMIT))].map((_, index) => (
          <span
            key={index}
            onClick={() => handlePagination(index + 1)}
            className={page === index + 1 ? "selected" : ""}
          >
            {index + 1}
          </span>
        ))}
        {page < Math.ceil(totalCount / LIMIT) && (
          <span onClick={() => handlePagination(page + 1)}>Next</span>
        )}
      </div>
    </div>
  );
};

export default PaginationBackendView;
