import React from "react";
import style from "../css/profile.module.css";
import logo from "../Images/pizzancoffee.png";
import { Link } from "react-router-dom";
import profileschema from "../Validations/ProfileValidation";
import swal from "sweetalert";

function Profile() {
  async function profileinfo(e) {
    e.preventDefault();

    let formData = {
      firstName: e.target[1].value,
      lastName: e.target[2].value,
      email: e.target[3].value,
      contact: e.target[4].value,
      // dob: e.target[6].value,
      country: e.target[7].value,
      state: e.target[8].value,
      address: e.target[9].value,
    };
    const isValid = await profileschema.isValid(formData);
    if (isValid) {
      console.log(formData);
      swal({
        title: "saved successfully",
        text: "Good job!",
        icon: "success",
        button: "Ok",
      });
    } else {
      console.log(formData);
      swal({
        title: "invalid",
        icon: "error",
        button: "Ok",
      });
    }
  }
  return (
    <>
      <section className={style.profile}>
        <div className={style.p1}>
          <img src={logo} width="120px" className={style.im} alt="logo"></img>
          <hr className={style.line}></hr>
          <div className={style.profileleft}>
            <Link to="" className={style.iconimg}>
              <img
                src="https://img.icons8.com/small/16/000000/user-male-circle.png"
                alt="profile"
                width="25px"
                className={style.iconimg1}
              />
              Profile
            </Link>
            <br></br>
            <Link to="" className={style.iconimg}>
              <img
                src="https://img.icons8.com/small/16/ffffff/top-menu.png"
                alt="menu"
                width="25px"
                className={style.iconimg1}
              />
              Menu
            </Link>
            <br></br>

            <Link to="" className={style.iconimg}>
              <img
                src="https://img.icons8.com/color/48/000000/price-tag--v1.png"
                alt="offers"
                width="25px"
                className={style.iconimg1}
              />
              Offers
            </Link>

            <Link to="" className={style.iconimg}>
              <img
                src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/000000/external-setting-essentials-pack-tanah-basah-glyph-tanah-basah.png"
                alt="setting"
                width="25px"
                className={style.iconimg1}
              />
              Account
            </Link>
            <br></br>
            <Link to="" className={style.iconimg}>
              <img
                src="https://img.icons8.com/ios-glyphs/30/fa314a/logout-rounded--v1.png"
                alt="logout"
                width="25px"
                className={style.iconimg1}
              />
              Log Out
            </Link>
          </div>
        </div>

        <div className={style.p2}>
          <Link to="">
            <img
              src="https://img.icons8.com/material-outlined/24/ffffff/camera--v1.png"
              alt="camera"
              className={style.camera}
              width="25px"
            />
          </Link>
        </div>
      </section>

      <section>
        <form onSubmit={profileinfo}>
          <div className={style.p3}>
            <div className={style.edit}>
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"
                alt="edit"
                width="25px"
              />

              <button className={style.edit2} type="submit">
                Save
              </button>
            </div>

            <div className={style.zxcv}>
              <div className={style.abcd}>
                First Name
                <br></br>
                <input type="text" className={style.fn} />
              </div>

              <div className={style.abcd}>
                Last Name
                <br></br>
                <input type="text" className={style.fn} />
              </div>

              <div className={style.abcd}>
                E-mail
                <br></br>
                <input type="text" className={style.fn} />
              </div>

              <br></br>

              <div className={style.abcd2}>
                Contact No
                <br></br>
                <input type="text" className={style.fn} />
              </div>

              <div className={style.abcd3}>
                Date Of Birth
                <br></br>
                <input type="date" className={style.fn} />
              </div>

              <div className={style.abcd4}>
                Gender
                <br></br>
                <div className={style.radiobtn}>
                  <input
                    type="radio"
                    id="1"
                    name="gender"
                    className={style.radiobtn123}
                  />
                  <label htmlFor="1">Male</label>

                  <input
                    type="radio"
                    id="2"
                    name="gender"
                    className={style.radiobtn123}
                  />
                  <label htmlFor="2">Female</label>
                </div>
              </div>

              <br></br>

              <div className={style.abcd}>
                Country
                <br></br>
                <input type="text" className={style.fn} />
              </div>

              <div className={style.abcd}>
                State
                <br></br>
                <input type="text" className={style.fn} />
              </div>

              <div className={style.abcd}>
                Address
                <br></br>
                <input type="text" className={style.fn} />
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;
