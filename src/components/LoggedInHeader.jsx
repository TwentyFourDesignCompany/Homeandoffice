import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userPic from "../assets/clientPic.png";
import logo from "../assets/logo.png";

export default function LoggedInHeader({ styles }) {
  const [isHeaderOpen, setIsHeaderOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth > 800) {
      setIsHeaderOpen(true);
    } else {
      setIsHeaderOpen(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 800) {
        setIsHeaderOpen(true);
      } else {
        setIsHeaderOpen(false);
      }
    });
  }, []);

  const navigate = useNavigate();
  return (
    <div className="header__secondary">
      <div className="header__secondary__wrapper">
        <Link to="/">
          <img src={logo} className="brand__logo__secondary" alt="img" />
        </Link>
        <div className="header__wrapper__input">
          <input
            type="text"
            placeholder="Search Item"
            className="furniture__main__container__content__input"
          />
          <div className="header__wrapper__input_svg">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L16.514 16.506M19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        <button
          className="header__mobile__btn"
          onClick={() => {
            isHeaderOpen ? setIsHeaderOpen(false) : setIsHeaderOpen(true);
          }}
        >
          {isHeaderOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
        {isHeaderOpen ? (
          <div className="nav">
            <div className="nav__link">
              <input
                type="radio"
                id="home"
                className="nav__link__input"
                name="nav__link__input"
                onClick={() => {
                  navigate("/about");
                }}
              />
              <div style={styles} className="nav__link__content__secondary">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.9507 2.481C5.72863 2.15798 6.56267 1.9917 7.405 1.9917C8.24733 1.9917 9.08138 2.15798 9.85931 2.481C10.6372 2.80402 11.3438 3.27743 11.9383 3.87408L11.9417 3.87742L12 3.93653L12.0583 3.87743L12.0617 3.87408C12.6563 3.27743 13.3628 2.80402 14.1407 2.481C14.9186 2.15798 15.7527 1.9917 16.595 1.9917C17.4373 1.9917 18.2714 2.15798 19.0493 2.481C19.827 2.80391 20.5333 3.2771 21.1277 3.87346C23.6727 6.41916 23.7293 10.6283 20.7136 13.7005L20.7071 13.7071L12.7071 21.7071C12.5196 21.8946 12.2652 22 12 22C11.7348 22 11.4804 21.8946 11.2929 21.7071L3.28634 13.7005C0.270638 10.6283 0.327258 6.41915 2.87229 3.87346C3.46674 3.2771 4.17303 2.80391 4.9507 2.481ZM7.405 3.9917C6.8259 3.9917 6.25249 4.10602 5.71767 4.32809C5.18284 4.55017 4.69711 4.87564 4.28833 5.28584L4.28711 5.28706C2.59349 6.98068 2.38976 9.92921 4.71052 12.2963L12 19.5857L19.2895 12.2963C21.6102 9.92922 21.4065 6.98068 19.7129 5.28706L19.7117 5.28584C19.3029 4.87564 18.8172 4.55017 18.2823 4.32809C17.7475 4.10602 17.1741 3.9917 16.595 3.9917C16.0159 3.9917 15.4425 4.10602 14.9077 4.32809C14.3735 4.54988 13.8884 4.87478 13.4799 5.28422C13.4794 5.28476 13.4789 5.2853 13.4783 5.28584L12.7117 6.06249C12.5238 6.25282 12.2675 6.35996 12 6.35996C11.7325 6.35996 11.4762 6.25282 11.2883 6.06249L10.5217 5.28584C10.5211 5.2853 10.5206 5.28476 10.5201 5.28422C10.1116 4.87478 9.62646 4.54988 9.09234 4.32809C8.55751 4.10602 7.9841 3.9917 7.405 3.9917Z"
                    fill="#2F294D"
                  />
                </svg>
                Wishlists
              </div>
            </div>
            <div className="nav__link">
              <input
                type="radio"
                id="about"
                className="nav__link__input"
                name="nav__link__input"
                onClick={() => {
                  navigate("/product");
                }}
              />
              <div style={styles} className="nav__link__content__secondary">
                <svg
                  width="32"
                  height="31"
                  viewBox="0 0 32 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_1_315)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7 28C7 26.8954 7.89543 26 9 26C10.1046 26 11 26.8954 11 28C11 29.1046 10.1046 30 9 30C7.89543 30 7 29.1046 7 28Z"
                      fill="#2F294D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18 28C18 26.8954 18.8954 26 20 26C21.1046 26 22 26.8954 22 28C22 29.1046 21.1046 30 20 30C18.8954 30 18 29.1046 18 28Z"
                      fill="#2F294D"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 8C0 7.44772 0.447715 7 1 7H5C5.47663 7 5.88701 7.33639 5.98055 7.80374L6.82043 12H23C23.298 12 23.5805 12.1329 23.7705 12.3626C23.9605 12.5922 24.0381 12.8946 23.9823 13.1873L22.3809 21.5848C22.2437 22.2754 21.868 22.8958 21.3195 23.3373C20.7738 23.7766 20.0916 24.011 19.3914 24H9.68864C8.98838 24.011 8.3062 23.7766 7.76048 23.3373C7.21225 22.8959 6.83664 22.2759 6.69933 21.5857C6.69927 21.5854 6.69939 21.5859 6.69933 21.5857L5.02879 13.2392C5.02201 13.2116 5.01638 13.1835 5.01195 13.1551L4.18032 9H1C0.447715 9 0 8.55228 0 8ZM7.22073 14L8.66084 21.1952C8.70656 21.4254 8.83179 21.6322 9.01461 21.7793C9.19743 21.9265 9.42619 22.0047 9.66084 22.0002L9.68 22H19.4L19.4192 22.0002C19.6538 22.0047 19.8826 21.9265 20.0654 21.7793C20.2474 21.6328 20.3723 21.4273 20.4185 21.1984L21.7913 14H7.22073Z"
                      fill="#2F294D"
                    />
                  </g>
                  <circle
                    cx="23.5"
                    cy="8.5"
                    r="7.5"
                    fill="#E3810E"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M23.53 12C23.398 12 23.288 11.956 23.2 11.868C23.112 11.78 23.068 11.6737 23.068 11.549V5.29L23.2 5.444L21.957 6.302C21.8837 6.35333 21.7993 6.379 21.704 6.379C21.5793 6.379 21.473 6.335 21.385 6.247C21.297 6.15167 21.253 6.04533 21.253 5.928C21.253 5.76667 21.33 5.63833 21.484 5.543L23.233 4.388C23.2917 4.35133 23.3503 4.32567 23.409 4.311C23.4677 4.29633 23.5263 4.29267 23.585 4.3C23.717 4.3 23.8197 4.344 23.893 4.432C23.9737 4.51267 24.014 4.61533 24.014 4.74V11.549C24.014 11.6737 23.9663 11.78 23.871 11.868C23.783 11.956 23.6693 12 23.53 12Z"
                    fill="white"
                  />
                  <defs>
                    <clipPath id="clip0_1_315">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0 7)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                My Cart <span>24₦</span>
              </div>
            </div>
            <div className="nav__link">
              <input
                type="radio"
                id="about"
                className="nav__link__input"
                name="nav__link__input"
                onClick={() => {
                  navigate("/contact-us");
                }}
              />
              <div style={styles} className="nav__link__content__secondary">
                <img
                  src={userPic}
                  alt="userPic"
                  className="nav__link__content__secondary__img"
                />
              </div>
            </div>
            <div className="nav__link">
              <input
                type="radio"
                id="about"
                className="nav__link__input"
                name="nav__link__input"
                onClick={() => {
                  navigate("/cart");
                }}
              />
              <div className="nav__link__content__svg">
                <svg
                  width="51"
                  height="51"
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="51" height="51" rx="25.5" fill="#E3810E" />
                  <g clipPath="url(#clip0_0_1)">
                    <path
                      d="M35.713 17.077C35.4317 16.7394 35.0796 16.468 34.6815 16.2818C34.2835 16.0957 33.8494 15.9995 33.41 16H17.242L17.2 15.649C17.114 14.9194 16.7634 14.2467 16.2145 13.7585C15.6656 13.2702 14.9566 13.0003 14.222 13H14C13.7348 13 13.4804 13.1054 13.2929 13.2929C13.1054 13.4804 13 13.7348 13 14C13 14.2652 13.1054 14.5196 13.2929 14.7071C13.4804 14.8946 13.7348 15 14 15H14.222C14.4669 15 14.7033 15.09 14.8864 15.2527C15.0694 15.4155 15.1863 15.6397 15.215 15.883L16.591 27.583C16.7339 28.7998 17.3185 29.9218 18.2339 30.736C19.1493 31.5502 20.3319 32 21.557 32H32C32.2652 32 32.5196 31.8946 32.7071 31.7071C32.8946 31.5196 33 31.2652 33 31C33 30.7348 32.8946 30.4804 32.7071 30.2929C32.5196 30.1054 32.2652 30 32 30H21.557C20.9381 29.9983 20.3348 29.8051 19.8299 29.4471C19.3251 29.089 18.9433 28.5835 18.737 28H30.657C31.8293 28.0001 32.9643 27.5882 33.8638 26.8364C34.7633 26.0846 35.37 25.0407 35.578 23.887L36.363 19.533C36.4414 19.101 36.4237 18.6571 36.3114 18.2326C36.1991 17.8082 35.9948 17.4137 35.713 17.077V17.077Z"
                      fill="white"
                    />
                    <path
                      d="M20 37C21.1046 37 22 36.1046 22 35C22 33.8954 21.1046 33 20 33C18.8954 33 18 33.8954 18 35C18 36.1046 18.8954 37 20 37Z"
                      fill="white"
                    />
                    <path
                      d="M30 37C31.1046 37 32 36.1046 32 35C32 33.8954 31.1046 33 30 33C28.8954 33 28 33.8954 28 35C28 36.1046 28.8954 37 30 37Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_1">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(13 13)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
