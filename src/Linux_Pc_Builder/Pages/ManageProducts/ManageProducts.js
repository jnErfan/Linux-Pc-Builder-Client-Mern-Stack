import { Button, Card, Col, Row } from "react-bootstrap";
import Rating from "react-rating";
import "./ManageProducts.css";

const ManageProducts = () => {
  /*  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./allData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []); */
  const products = [
    {
      image: "https://i.ibb.co/2NctKVY/1.png",
      pcName: "Intel 10th Gen Core i3-10100 Gaming",
      configuration:
        "ASRock H470M-HDV 10th and 11th Gen Intel M-ATX,Motherboard,Intel i3-10100 10th Gen Processor,4GB 2400MHz RAM +1TB HDD, Asus GeForce GT 710 2GB DDR5 Graphics Card",
      Brand: "Intel",
      price: "36,100",
      rate: "3.6",
      rated: "122",
      sell: "147",
      stock: "available",
    },
    {
      image: "https://i.ibb.co/XxnXS2X/2.png",
      pcName: "Gaming 10th Gen Core i5-10400f",
      configuration:
        "ASRock B560M-HDV 11th Gen M-ATX Motherboard,Intel,10th Gen i5-10400F Processor,8GB RAM +1TB HDD + 128GB SSD,GT 1030 2GB GDDR5 Graphics Card",
      Brand: "Intel",
      price: "53,400",
      rate: "4.1",
      rated: "108",
      sell: "127",
      stock: "available",
    },
    {
      image: "https://i.ibb.co/nCq7SfK/3.jpg",
      pcName: "AMD Ryzen 5 3500X Gaming",
      configuration:
        "ASROCK B450M-HDV R4.0 AMD B450 Chipset Motherboard,AMD RYZEN 5 3500X Processor,8GB 2400MHz RAM + 128GB SSD,GeForce GTX 1050Ti 4GB Graphics",
      Brand: "RYZEN",
      price: "63,500",
      rate: "4.3",
      rated: "155",
      sell: "197",
      stock: "stockOut",
    },
    {
      image: "https://i.ibb.co/z8Tff73/4.jpg",
      pcName: "AMD Ryzen 5 3600 Gaming",
      configuration:
        "Asrock B450M Pro4-F AMD Motherboard,AMD Ryzen 5 3600 Processor,8GB 3200MHz RAM + 128GB SSD, GeForce GTX 1050Ti 4GB Graphics Card",
      Brand: "RYZEN",
      price: "69,230",
      rate: "4.1",
      rated: "144",
      sell: "177",
      stock: "available",
    },
  ];
  return (
    <div
      className="container"
      style={{ marginTop: "50px", marginBottom: "100px" }}
    >
      <h1 className="text-center" style={{ color: "#2e2e66" }}>
        Manage All Products
      </h1>
      <div>
        <div>
          <Row sm={1} md={2} lg={2} className="mt-5">
            {products.map((product) => (
              <div
                className="col col-12 col-md-6 col-lg-6 text-center mb-5"
                key={product.pcName}
              >
                <Col>
                  <Card className="shadow-lg cardBody3">
                    <div className="d-flex justify-content-center">
                      {" "}
                      <Card.Img
                        className="w-75"
                        variant="top"
                        src={product.image}
                      />
                    </div>
                    <Card.Body>
                      <Card.Title className="ellipsis3 fw-bold mb-3">
                        {product.pcName}
                      </Card.Title>
                      <Card.Text className="ellipsis3">
                        <small>{product.configuration}</small>
                      </Card.Text>

                      <ul className="text-start">
                        <li>
                          Brand:{" "}
                          <span className="brand3"> {product.Brand}</span>
                        </li>
                        <li className="mt-2">
                          Total Sell{" "}
                          <span className="fw-bold">{product.sell}</span>{" "}
                        </li>
                      </ul>
                      <div className="text-center my-3">
                        <Rating
                          emptySymbol={
                            <i
                              className="far fa-star fs-5"
                              style={{ color: "#FFA500" }}
                            ></i>
                          }
                          fullSymbol={
                            <i
                              className="fas fa-star fs-5"
                              style={{ color: "#FFA500" }}
                            ></i>
                          }
                          initialRating={product.rate}
                          readonly
                        />{" "}
                        <span className="rated3">{product.rated}</span>
                      </div>
                      <h4 className="my-4">
                        {product.price} <span className="fw-bold">৳</span>{" "}
                      </h4>
                      <div className="row row-cols-2">
                        <div className="col col-12  col-md-6 col-lg-6 mt-2">
                          <Button variant="outline-success rounded-pill px-4">
                            Edit <i className="far fa-edit"></i>
                          </Button>
                        </div>
                        <div className="col col-12 col-md-6 col-lg-6 mt-2">
                          <Button variant="outline-danger rounded-pill px-4">
                            Delete <i className="far fa-trash-alt fs-5"></i>
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
