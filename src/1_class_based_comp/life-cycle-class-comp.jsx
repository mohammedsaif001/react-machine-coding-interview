import React from "react";

class LifeCycleClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      data: [],
      timer: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    console.log("Component Did Mount");
    // start timer
    this.intervalId = setInterval(() => {
      this.setState((prev) => ({ timer: prev.timer + 1 }));
    }, 1000);

    // fetch data
    this.fetchData();
  }

  async fetchData() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    this.setState({ isLoading: true });

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      this.setState({ data });
    } catch (error) {
      this.setState({
        error: "Error occurred while fetching data",
      });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.data.length !== this.state.data.length) {
      console.log("componentDidUpdate: data changed");
    }
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
    console.log("Component Unmounted");
  }

  render() {
    const { isLoading, data, error, timer } = this.state;

    return (
      <div>
        <h3>Timer: {timer}</h3>

        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : data.length ? (
          <ul>
            {data.slice(0, 5).map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        ) : (
          <p>Nothing to display</p>
        )}
      </div>
    );
  }
}

export default LifeCycleClassComp;
