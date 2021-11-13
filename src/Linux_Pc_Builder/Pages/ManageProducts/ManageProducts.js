import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Card, Col, Row, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import { useHistory } from "react-router";
import "./ManageProducts.css";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [pageUpdate, setPageUpdate] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [pageCounts, setPageCount] = useState(0);
  const size = 4;

  useEffect(() => {
    fetch(`http://localhost:5000/desktopsPagination?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.desktopPackage);
        setPageUpdate(data?.desktopPackage);
        const count = data?.count;
        setPageCount(Math.ceil(count / size));
      });
  }, [page, pageUpdate]);

  const deleteHandler = (id) => {
    const confirmation = prompt("If You Want To Delete ? Then Write (DELETE)");
    if (confirmation === "DELETE") {
      axios
        .delete(`http://localhost:5000/deleteDesktop/${id}`)
        .then((result) => {
          if (result.data.deletedCount) {
            setLoading(true);
            setTimeout(() => {
              setLoading(false);
              setAlert(true);
              setTimeout(() => {
                setAlert(false);
              }, 3000);
            }, 500);
          }
        });
    } else {
      return;
    }
  };
  const shippingHandler = (id) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push(`/updateDesktop/${id}`);
    }, 500);
  };
  return (
    <div
      className="container"
      style={{ marginTop: "50px", marginBottom: "100px" }}
    >
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            zIndex: 9999,
          }}
        >
          <div style={{ marginLeft: "190px" }}>
            <Spinner
              animation="border"
              variant="secondary"
              style={{ padding: "100px" }}
            />
          </div>
        </div>
      )}

      {alert && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.373)",
            zIndex: 9999,
          }}
        >
          <div
            className="d-flex justify-content-center mb-5"
            style={{ marginLeft: "190px" }}
          >
            <Alert
              variant="danger w-50 py-5 fw-bold text-center animate__animated animate__slow animate__fadeOut animate__delay-2s"
              style={{ position: "fixed" }}
            >
              Desktop Has Been Deleted From Database
            </Alert>
          </div>
        </div>
      )}
      <h1 className="text-center" style={{ color: "#2e2e66" }}>
        Manage All Products
      </h1>
      <div>
        {!products.length ? (
          <div
            className="text-center"
            style={{ marginTop: "70px", marginBottom: "150px" }}
          >
            <Spinner
              animation="border"
              variant="secondary"
              style={{ padding: "100px" }}
            />
          </div>
        ) : (
          <div>
            <Row sm={1} md={2} lg={2} className="mt-5">
              {products.map((product) => (
                <div
                  className="col col-12 col-md-6 col-lg-6 text-center mb-5"
                  key={product._id}
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
                            <Button
                              onClick={() => shippingHandler(product._id)}
                              variant="outline-success rounded-pill px-4"
                            >
                              Edit <i className="far fa-edit"></i>
                            </Button>
                          </div>
                          <div className="col col-12 col-md-6 col-lg-6 mt-2">
                            <Button
                              onClick={() => deleteHandler(product._id)}
                              variant="outline-danger rounded-pill px-4"
                            >
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
        )}

        <div
          className="mt-5 text-center shadow-lg py-3"
          style={{ borderRadius: "15px" }}
        >
          {[...Array(pageCounts).keys()].map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setPage(pageNum)}
              className={
                pageNum === page
                  ? "btn btn-info mx-2 fw-bold rounded-circle"
                  : "btn btn-outline-info fw-bold mx-2 rounded-circle"
              }
            >
              {pageNum + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
