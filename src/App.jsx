import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState([
    {
      url: "https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70",
      name: "TRQ White Shoes",
      category: "Shoes",
      seller: "AMZ Seller Ghz",
      price: 1999,
    },
    {
      url: "https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg",
      name: "LOREM Watch Black",
      category: "Watches",
      seller: "Watch Ltd Siyana",
      price: 2599,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU",
      name: "AMZ Laptop 8GB RAM",
      category: "Laptops",
      seller: "Delhi Laptops",
      price: 50000,
    },
    {
      url: "https://i5.walmartimages.com/seo/Dezsed-Wireless-Cam-Clearance-Hd-2048X1536P-Security-Camera-2-4-5Ghz-Dual-Band-Wifi-24-7-Recording-Outdoor-Wide-Angle-Surveillance-Home-White_458e5abb-37cb-43ba-8796-8f254520c317.7648c468d3431de066d8f03ed954e02b.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
      name: "Security Camera",
      category: "CCTV",
      seller: "Camron LTD",
      price: 4000,
    },
    {
      url: "https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw1e7b2f04/images/Sonata/Catalog/87045WL01_1.jpg?sw=800&sh=800",
      name: "Watch Pink",
      category: "Watches",
      seller: "Watch Ltd",
      price: 2000,
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU",
      name: "Cup red Color",
      category: "Cup",
      seller: "ABS Ltd",
      price: 100,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const handleShow = (value) => {
    setShowCart(value);
  };

  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>

      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={product} addToCart={addToCart}></ProductList>
      )}
    </div>
  );
}

export default App;
