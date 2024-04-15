import { Link } from "react-router-dom";

const Home = () => {
    return (
      <div className="container mt-5">
        <h1>Welcome to E-Commerce Store</h1>
        <p>Discover amazing deals on the latest fashion, electronics, and more!</p>
        <div className="row">
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300" alt="Product 1" className="img-fluid" />
            <h2>Product 1</h2>
            <p>Description of Product 1</p>
            <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300" alt="Product 2" className="img-fluid" />
            <h2>Product 2</h2>
            <p>Description of Product 2</p>
            <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
          </div>
          <div className="col-md-4">
            <img src="https://via.placeholder.com/300" alt="Product 3" className="img-fluid" />
            <h2>Product 3</h2>
            <p>Description of Product 3</p>
            <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
          </div>
        </div>
      </div>
    );
  };


  export default Home;
