import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register, reset } from "../../features/auth/authSlice.js";
import HeaderSubHeaderCombo from "../../components/HeaderSubHeaderCombo.js";
import Form from "../../components/Form.js";
const Registration = () => {
  const [formdata, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  // const { fname, lname, email, password } = formdata;

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { user, isLoading, isError, isSuccess, message } = useSelector(
  //   (state) => state.auth
  // );

  useEffect(() => {
    dispatch(
      register({
        fname: "Moby",
        lname: "Dick",
        email: "qbeezy@gmeey.com",
        password: "EatADick23!",
      })
    );
    dispatch(reset());
  }, [dispatch]);

  return (
    <>
      <HeaderSubHeaderCombo
        header={"EVENTRAXX"}
        subHeader={"Create an account below"}
      />
      <Form>poppppp</Form>
    </>
  );
};

export default Registration;
