import React, { useEffect, useState } from "react";
import LayoutAdmin from "../LayoutAdmin";
import { useDispatch, useSelector } from "react-redux";
import "../../../style/css/admin/usersDash.css";
import {
  DeleteUser,
  GetUsers,
  UpdateUser,
} from "../../../Redux/slices/admin/usersSlice";
import LOADING from "../../LOADING";

export default function Users() {
  const filter = useSelector((state) => state.users.filter);
  const data = useSelector((state) => state.users.data);
  const dispatch = useDispatch();
  const [ShowPopup, setShowPopup] = useState(false);
  const [UserData, setUserData] = useState({});
  const [Username, setUsername] = useState(UserData.username);
  const [Email, setEmail] = useState(UserData.email);
  const [Password, setPassword] = useState(UserData.password);
  const [Phone_number, setPhone_number] = useState(UserData.phone_number);
  const [Role, setRole] = useState(UserData.role);

  useEffect(() => {
    dispatch(GetUsers());
    setUsername(UserData.username);
    setEmail(UserData.email);
    setPassword(UserData.password);
    setPhone_number(UserData.phone_number);
    setRole(UserData.role);
  }, [
    UserData.email,
    UserData.password,
    UserData.phone_number,
    UserData.username,
    dispatch,
    UserData,
  ]);

  const deleteUser = (e) => {
    dispatch(DeleteUser(e));
  };

  const updateUser = async () => {
    if (
      UserData?.length ||
      Username?.length ||
      Email?.length ||
      Password?.length ||
      Phone_number?.length
    ) {
      dispatch(
        UpdateUser({
          Username,
          Email,
          Password,
          Phone_number,
          Role,
          _id: UserData._id,
        })
      );
      setUsername(UserData.username);
      setEmail(UserData.email);
      setPassword(UserData.password);
      setPhone_number(UserData.phone_number);
      setRole(UserData.role);
      setShowPopup(false);
    } else {
      console.log("No Data Selected");
    }
  };

  return (
    <>
      <LayoutAdmin pageName={"users"}>
        <LOADING>
          <div className="users">
            {ShowPopup === true ? (
              <div className="popup-cont">
                <div className="popup">
                  <div className="inp username">
                    <label htmlFor="username">username</label>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={Username}
                      placeholder="username"
                      minLength={3}
                      maxLength={10}
                      type="text"
                      id="username"
                      required
                      autoComplete="on"
                    />
                  </div>
                  <div className="inp email">
                    <label htmlFor="email">email</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={Email}
                      placeholder="Email"
                      maxLength={30}
                      minLength={8}
                      type="text"
                      id="email"
                      required
                      autoComplete="on"
                    />
                  </div>
                  <div className="inp phonenumber">
                    <label htmlFor="phonenumber">phone number</label>
                    <input
                      onChange={(e) => setPhone_number(e.target.value)}
                      value={Phone_number}
                      placeholder="phone number"
                      maxLength={14}
                      type="text"
                      id="phonenumber"
                      required
                      autoComplete="on"
                    />
                  </div>
                  <div className="inp password">
                    <label htmlFor="password">password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={Password}
                      placeholder="Password"
                      maxLength={20}
                      minLength={6}
                      type="text"
                      id="password"
                      required
                      autoComplete="on"
                    />
                  </div>
                  <div className="inp password">
                    <label htmlFor="role">Role</label>
                    <select
                      onChange={(e) => setRole(e.target.value)}
                      id="role"
                      value={Role}
                      className="select"
                    >
                      <option value="user">user</option>
                      <option value="admin">admin</option>
                    </select>
                  </div>

                  <div className="actions">
                    <div
                      className="cancel-btn"
                      onClick={(e) => setShowPopup(false)}
                    >
                      Cancel
                    </div>
                    <div className="send-btn" onClick={(e) => updateUser()}>
                      Submit
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="title">
              <h2>Todays</h2>
            </div>
            <div className="users-cont">
              <table>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Date</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Action</th>
                </tr>
                {filter?.length
                  ? filter.map((e) => (
                      <tr key={e._id}>
                        <td>{e.username}</td>
                        <td>{e.role}</td>
                        <td>{e.createdDate}</td>
                        <td>{e.email}</td>
                        <td>{e.phone_number}</td>
                        <td className="actions">
                          <div
                            onClick={() => deleteUser(e._id)}
                            className="del"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </div>
                          <div
                            onClick={() => {
                              setUserData(e);
                              setShowPopup(true);
                            }}
                            className="upd"
                          >
                            <i className="fa-solid fa-pen"></i>
                          </div>
                        </td>
                      </tr>
                    ))
                  : data.map((e) => (
                      <tr key={e._id}>
                        <td>{e.username}</td>
                        <td>{e.role}</td>
                        <td>{e.createdDate}</td>
                        <td>{e.email}</td>
                        <td>{e.phone_number}</td>
                        <td className="actions">
                          <div
                            onClick={() => deleteUser(e._id)}
                            className="del"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </div>
                          <div
                            onClick={() => {
                              setUserData(e);
                              setShowPopup(true);
                            }}
                            className="upd"
                          >
                            <i className="fa-solid fa-pen"></i>
                          </div>
                        </td>
                      </tr>
                    ))}
              </table>
            </div>
          </div>
        </LOADING>
      </LayoutAdmin>
    </>
  );
}
