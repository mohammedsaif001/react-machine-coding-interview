import React, { useEffect, useRef, useState } from "react";

const LIMIT = 10;

const InfiniteScroll = () => {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState(null);

  const loaderRef = useRef(null);
  const observerRef = useRef(null);

  const fetchProducts = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await res.json();

      // Stop fetching when API returns empty array
      if (data.products.length === 0) {
        setHasMore(false);
        return;
      }

      setProducts((prev) => [...prev, ...data.products]);
      setSkip((prev) => prev + LIMIT);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchProducts();
  }, []);

  // Create observer ONCE
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !loading && hasMore) {
          fetchProducts();
        }
      },
      {
        root: null,
        rootMargin: "100px", // preload earlier
        threshold: 0,
      }
    );

    if (loaderRef.current) {
      observerRef.current.observe(loaderRef.current);
    }

    return () => observerRef.current.disconnect();
  }, [loading, hasMore]);

  return (
    <div style={{ width: 400, margin: "auto" }}>
      <h3>Products</h3>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ddd",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <strong>{product.title}</strong>
          <p>₹ {product.price}</p>
        </div>
      ))}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {hasMore && (
        <div ref={loaderRef} style={{ height: 40 }}>
          {loading && "Loading..."}
        </div>
      )}

      {!hasMore && <p>No more products 🚀</p>}
    </div>
  );
};

export default InfiniteScroll;
