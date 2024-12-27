import "../App.css";

function Header(props) {
  return (
    <div className="flex shopping-card">
      <div>
        <span>
          <img
            src="https://icon2.cleanpng.com/lnd/20241010/aa/ebe4f51c75ef9cb5aea4a7d85f9f79.webp"
            alt=""
            height={20}
            style={{ marginBottom: "-4px" }}
          />
        </span>
        <span
          className="text-style"
          style={{ marginLeft: "8px" }}
          onClick={() => props.handleShow(false)}
        >
          My Cart
        </span>
      </div>
      <div>
        <span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1413/1413908.png"
            alt="shopping cart icon"
            height={23}
            style={{ marginBottom: "-3px" }}
          />
        </span>
        <span
          className="text-style"
          style={{ marginLeft: "6px" }}
          onClick={() => props.handleShow(true)}
        >
          {" "}
          Cart
          <sup> {props.count} </sup>
        </span>
      </div>
    </div>
  );
}

export default Header;
