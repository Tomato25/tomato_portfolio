import React from "react";
import "./ProfileCircle.scss";
import profileImg from "public/Images/profileImg.jpg";
import Image from "next/image";

function ProfileCircle() {
  return (
    <div>
      <div className="profileImgContainer">
        <ul className="circle-container">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-html5"

              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ADE6B9"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >

            <g filter="url(#myfilters)">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </g>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-css3"

              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ADE6B9"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <filter id="myfilters">
              <feOffset
    dx='0'
    dy='0'
  />

  <feGaussianBlur
    stdDeviation='1'
    result='offset-blur'
  />


  <feComposite
    operator='out'
    in='SourceGraphic'
    in2='offset-blur'
    result='inverse'
  />
  

  <feFlood
    flood-color='black'
    flood-opacity='.95'
    result='color'
  />
  <feComposite
    operator='in'
    in='color'
    in2='inverse'
    result='shadow'
  />


  <feComposite
    operator='over'
    in='shadow'
    in2='SourceGraphic'
  />
              </filter>
              <g filter="url(#myfilters)">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
                <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
              </g>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-javascript"

              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ADE6B9"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <g filter="url(#myfilters)">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M7.5 8h3v8l-2 -1" />
              <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
              </g>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-react-native"

              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ADE6B9"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <g filter="url(#myfilters)">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.357 9c-2.637 .68 -4.357 1.845 -4.357 3.175c0 2.107 4.405 3.825 9.85 3.825c.74 0 1.26 -.039 1.95 -.097" />
              <path d="M9.837 15.9c-.413 -.596 -.806 -1.133 -1.18 -1.8c-2.751 -4.9 -3.488 -9.77 -1.63 -10.873c1.15 -.697 3.047 .253 4.974 2.254" />
              <path d="M6.429 15.387c-.702 2.688 -.56 4.716 .56 5.395c1.783 1.08 5.387 -1.958 8.043 -6.804c.36 -.67 .683 -1.329 .968 -1.978" />
              <path d="M12 18.52c1.928 2 3.817 2.95 4.978 2.253c1.85 -1.102 1.121 -5.972 -1.633 -10.873c-.384 -.677 -.777 -1.204 -1.18 -1.8" />
              <path d="M17.66 15c2.612 -.687 4.34 -1.85 4.34 -3.176c0 -2.11 -4.408 -3.824 -9.845 -3.824c-.747 0 -1.266 .029 -1.955 .087" />
              <path d="M8 12c.285 -.66 .607 -1.308 .968 -1.978c2.647 -4.844 6.253 -7.89 8.046 -6.801c1.11 .679 1.262 2.706 .56 5.393" />
              <path d="M12.26 12.015h-.01c-.01 .13 -.12 .24 -.26 .24a0.263 .263 0 0 1 -.25 -.26c0 -.14 .11 -.25 .24 -.25h-.01c.13 -.01 .25 .11 .25 .24" />
              </g>
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-javascript"

              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ADE6B9"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <g filter="url(#myfilters)">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M7.5 8h3v8l-2 -1" />
              <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
              </g>
            </svg>
          </li>
        </ul>

        <Image className="profileImg" src={profileImg} />
      </div>
    </div>
  );
}

export default ProfileCircle;
