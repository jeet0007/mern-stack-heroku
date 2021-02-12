import { useState, useEffect } from "react";
import "./App.css";

// Components
import Card from "./components/Card";

const App = ({ match }) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fecthPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/v1/posts`);
        const { data } = await res.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError("Some error occured");
      }
    };

    fecthPosts();
  }, []);

  return (
    <div className="app">
      {loading ? (
        <h3 className="loading-text">Loading...</h3>
      ) : error ? (
        <h3 className="error-text">{error}</h3>
      ) : (
            <>
              <div className="app__posts">
                {posts.map((post) => (
                  <Card key={post._id} post={post} />
                ))}
              </div>
            </>
          )}
    </div>
  );
};

export default App;
