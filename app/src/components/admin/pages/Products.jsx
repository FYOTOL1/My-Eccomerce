import React, { useEffect, useRef, useState } from "react";
import LayoutAdmin from "../LayoutAdmin";
import LOADING from "../../LOADING";
import "../../../style/css/admin/products.css";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProducts,
  productsSearch,
  AddProduct,
  DeleteProduct,
  DeleteAll,
  UpdateProduct,
} from "../../../Redux/slices/productsSlice";

export default function Products() {
  const data = useSelector((state) => state.products.filter);
  const dispatch = useDispatch();
  const selectRef = useRef();
  //
  const [ShowPopup, setShowPopup] = useState();
  const [PopupAction, setPopupAction] = useState();
  const [_Id, set_Id] = useState("");
  const [Img, setImg] = useState("../../../../images/dragImg.webp");
  const [Title, setTitle] = useState();
  const [Category, setCategory] = useState();
  const [Quantity, setQuantity] = useState();
  const [Price, setPrice] = useState();
  const [Info, setInfo] = useState();
  const [Status, setStatus] = useState();

  //
  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);

  const FilterProducts = (value) => {
    dispatch(productsSearch({ value, find_by: selectRef.current.value }));
  };
  const imageReader = async (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", () => {
      setImg(reader.result);
    });
  };
  const createProduct = () => {
    try {
      dispatch(AddProduct({ Img, Title, Category, Quantity, Price, Info }));
      setCategory("");
      setTitle("");
      setImg("../../../../images/dragImg.webp");
      setInfo("");
      setPrice(0);
      setQuantity(0);
      setShowPopup(false);
    } catch (err) {}
  };
  const updateProduct = () => {
    try {
      dispatch(
        UpdateProduct({
          _Id,
          Img,
          Title,
          Category,
          Quantity,
          Price,
          Info,
          Status: Status === "true" ? true : false,
        })
      );
      setCategory("");
      setTitle("");
      setImg("../../../../images/dragImg.webp");
      setInfo("");
      setPrice(0);
      setQuantity(0);
      setStatus(false);
      setShowPopup(false);
    } catch (error) {}
  };
  const DeleteProd = ({ _id }) => {
    dispatch(DeleteProduct(_id));
  };
  const DelAll = () => {
    dispatch(DeleteAll());
  };

  return (
    <>
      <LayoutAdmin pageName={"products"}>
        <LOADING>
          {ShowPopup === true && PopupAction === "add" ? (
            <div className="popup-cont">
              <div className="popup">
                <div className="img">
                  <label htmlFor="img">
                    <img loading="lazy" src={Img} alt="Error" />
                  </label>
                  <input
                    onChange={(e) => imageReader(e)}
                    placeholder="img"
                    type="file"
                    id="img"
                    required
                  />
                </div>
                <div className="inp title">
                  <label htmlFor="title">title</label>
                  <input
                    placeholder="title"
                    maxLength={15}
                    onChange={(e) => setTitle(e.target.value)}
                    value={Title}
                    type="text"
                    id="title"
                    required
                    autoComplete="on"
                  />
                </div>
                <div className="inp price">
                  <label htmlFor="price">Price</label>
                  <input
                    placeholder="price"
                    maxLength={8}
                    onChange={(e) => setPrice(e.target.value)}
                    value={Price}
                    type="number"
                    id="price"
                    required
                    autoComplete="on"
                  />
                </div>
                <div className="inp quantity">
                  <label htmlFor="quantity">quantity</label>
                  <input
                    placeholder="quantity"
                    maxLength={4}
                    onChange={(e) => setQuantity(e.target.value)}
                    value={Quantity}
                    type="number"
                    id="quantity"
                    required
                    autoComplete="on"
                  />
                </div>
                <div className="inp info">
                  <label htmlFor="info">info</label>
                  <input
                    placeholder="info"
                    maxLength={40}
                    onChange={(e) => setInfo(e.target.value)}
                    value={Info}
                    type="text"
                    id="info"
                    required
                    autoComplete="on"
                  />
                </div>
                <div className="inp category">
                  <label htmlFor="category">category</label>
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={Category}
                    id="category"
                    className="select"
                  >
                    <option value="car">Car</option>
                    <option value="fruit">Fruit</option>
                    <option value="phone">Phone</option>
                    <option value="web">web</option>
                  </select>
                </div>
                <div className="actions">
                  <div
                    className="cancel-btn"
                    onClick={(e) => setShowPopup(false)}
                  >
                    Cancel
                  </div>
                  <div className="send-btn" onClick={(e) => createProduct()}>
                    Submit
                  </div>
                </div>
              </div>
            </div>
          ) : ShowPopup === true && PopupAction === "update" ? (
            <div className="popup-cont">
              <div className="popup">
                <div className="img">
                  <label htmlFor="img">
                    <img loading="lazy" src={Img} alt="Error" />
                  </label>
                  <input
                    onChange={(e) => imageReader(e)}
                    placeholder="img"
                    type="file"
                    id="img"
                    required
                  />
                </div>
                <div className="inp title">
                  <label htmlFor="title">title</label>
                  <input
                    placeholder="title"
                    maxLength={15}
                    onChange={(e) => setTitle(e.target.value)}
                    value={Title}
                    type="text"
                    id="title"
                    required
                    autoComplete="on"
                  />
                </div>
                <div className="inp price">
                  <label htmlFor="price">Price</label>
                  <input
                    placeholder="price"
                    maxLength={8}
                    onChange={(e) => setPrice(e.target.value)}
                    value={Price}
                    type="number"
                    id="price"
                    required
                    autoComplete="on"
                  />
                </div>
                <div className="inp quantity">
                  <label htmlFor="quantity">quantity</label>
                  <input
                    placeholder="quantity"
                    maxLength={4}
                    onChange={(e) => setQuantity(e.target.value)}
                    value={Quantity}
                    type="number"
                    id="quantity"
                    required
                    autoComplete="on"
                  />
                </div>
                <div className="inp info">
                  <label htmlFor="info">info</label>
                  <input
                    placeholder="info"
                    maxLength={40}
                    onChange={(e) => setInfo(e.target.value)}
                    value={Info}
                    type="text"
                    id="info"
                    required
                    autoComplete="on"
                  />
                </div>
                <div className="inp status">
                  <label htmlFor="status">status</label>
                  <select
                    onChange={(e) => setStatus(e.target.value)}
                    value={Status}
                    id="status"
                    className="select"
                  >
                    <option value={"true"}>Enabled</option>
                    <option value={"false"}>Disabled</option>
                  </select>
                </div>
                <div className="inp category">
                  <label htmlFor="category">category</label>
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={Category}
                    id="category"
                    className="select"
                  >
                    <option value="car">Car</option>
                    <option value="fruit">Fruit</option>
                    <option value="phone">Phone</option>
                    <option value="web">web</option>
                  </select>
                </div>
                <div className="actions">
                  <div
                    className="cancel-btn"
                    onClick={(e) => {
                      setCategory("");
                      setTitle("");
                      setImg("../../../../images/dragImg.webp");
                      setInfo("");
                      setPrice(0);
                      setQuantity(0);
                      setShowPopup(false);
                    }}
                  >
                    Cancel
                  </div>
                  <div className="send-btn" onClick={() => updateProduct()}>
                    Submit
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          <div className="products-admin">
            <div className="products-cont-admin">
              <header>
                <section className="actions">
                  <div
                    onClick={(e) => {
                      setShowPopup(true);
                      setPopupAction("add");
                    }}
                    className="btn add"
                  >
                    <i className="fa-solid fa-plus"></i>
                    <p>Add</p>
                  </div>
                  <div onClick={(e) => DelAll()} className="btn delete">
                    <i className="fa-solid fa-trash-can"></i>
                    <p>Delete All</p>
                  </div>
                </section>
                <section className="filter">
                  <select ref={selectRef}>
                    <option value="title">Title</option>
                    <option value="category">Category</option>
                  </select>
                  <div className="search">
                    <input
                      id="search"
                      onChange={(e) => FilterProducts(e.target.value)}
                      type="search"
                      placeholder="search..."
                      autoComplete="off"
                    />
                    <label htmlFor="search">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </label>
                  </div>
                </section>
              </header>
              {data?.length ? (
                <table>
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Category</th>
                      <th>Quantity</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  {data &&
                    data?.map((e) => (
                      <tbody
                        key={e._id}
                        style={e.status ? null : { opacity: "0.3" }}
                      >
                        <tr>
                          <td className="img">
                            <img srcSet={e.img} loading="lazy" alt="Error" />
                          </td>
                          <td>{e?.title}</td>
                          <td>{e?.category}</td>
                          <td>{e?.quantity}</td>
                          <td>{new Date(e?.createdAt).toLocaleDateString()}</td>
                          <td>{e?.status ? "Enabled" : "Disabled"}</td>
                          <td>{e?.price}</td>
                          <td>
                            <span onClick={() => DeleteProd(e)} className="del">
                              <i className="fa-solid fa-trash-can"></i>
                            </span>
                            <span
                              onClick={() => {
                                setPopupAction("update");
                                set_Id(e?._id);
                                setImg(e?.img);
                                setTitle(e?.title);
                                setInfo(e?.info);
                                setPrice(e?.price);
                                setCategory(e?.category);
                                setQuantity(e?.quantity);
                                setStatus(e?.status);
                                setShowPopup(true);
                              }}
                              className="upd"
                            >
                              <i className="fa-solid fa-pen"></i>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                </table>
              ) : (
                ""
              )}
            </div>
          </div>
        </LOADING>
      </LayoutAdmin>
    </>
  );
}
