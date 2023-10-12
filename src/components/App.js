const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(<h1> Hello World </h1>);

const imageUrl =
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640";
const productPrice = 10.99;

const product = (
  <div>
    <img src={imageUrl} alt="Tacos With Lime" width="640" />
    <h2>Tacos With Lime</h2>
    <p>Price: {productPrice}$</p>
    <button type="button">Add to cart</button>
  </div>
);

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" },
  { id: "id-4", name: "Redux in depth" },
];

const BookList = ({ books }) => {
  return (
    <ul>
      {books.map((book, index) => (
        <li key={index}>{book.name}</li>
      ))}
    </ul>
  );
};

const alertStyles = {
  margin: 8,
  padding: "12px 16px",
  borderRadius: 4,
  backgroundColor: "gray",
  color: "white",
};

import { Alert } from "./Alert";

const App = () => {
  return (
    <div>
      <BookList books={favouriteBooks} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// ReactDOM.createRoot(document.getElementById("root")).render(product);
