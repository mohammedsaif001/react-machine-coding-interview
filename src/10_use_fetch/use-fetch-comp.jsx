import useFetch from "./hooks/use-fetch";

const UseFetchComponent = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <h3>Use Fetch Component</h3>
      {loading ? (
        <p>Loading....</p>
      ) : error ? (
        <p>Error Occurred : {JSON.stringify(error)}</p>
      ) : !data?.length ? (
        <p>No Items to show</p>
      ) : (
        <div>
          {data?.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default UseFetchComponent;
