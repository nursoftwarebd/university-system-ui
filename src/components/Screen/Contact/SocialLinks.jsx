import Link from "next/link";
import React from "react";

const SocialLinks = () => {
  return (
    <ul className=" space-x-3 lg:space-x-6 pl-2 lg:pl-3  mt-5">
      <li className="inline-block mr-2">
        {" "}
        <Link className="text-indigo-500 cursor-pointer mr-1" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128">
            <rect width="118.35" height="118.35" x="4.83" y="4.83" fill="#3d5a98" rx="6.53" ry="6.53" />
            <path
              fill="#fff"
              d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"
            />
          </svg>
        </Link>{" "}
      </li>

      <li className="inline-block mr-2">
        {" "}
        <a className="text-pink-600 cursor-pointer mr-1" href="https://eduport.webestica.com/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
            <g fill="none">
              <rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" />
              <rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" />
              <path
                fill="#fff"
                d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z"
              />
              <defs>
                <radialGradient
                  id="skillIconsInstagram0"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FD5" />
                  <stop offset=".1" stop-color="#FD5" />
                  <stop offset=".5" stop-color="#FF543E" />
                  <stop offset="1" stop-color="#C837AB" />
                </radialGradient>
                <radialGradient
                  id="skillIconsInstagram1"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#3771C8" />
                  <stop offset=".128" stop-color="#3771C8" />
                  <stop offset="1" stop-color="#60F" stop-opacity="0" />
                </radialGradient>
              </defs>
            </g>
          </svg>
        </a>{" "}
      </li>

      <li className="inline-block mr-2">
        {" "}
        <a className="text-sky-400 cursor-pointer mr-1" href="https://eduport.webestica.com/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128">
            <path
              fill="#1d9bf0"
              d="M114.896 37.888c.078 1.129.078 2.257.078 3.396c0 34.7-26.417 74.72-74.72 74.72v-.02A74.343 74.343 0 0 1 0 104.21c2.075.25 4.16.375 6.25.38a52.732 52.732 0 0 0 32.615-11.263A26.294 26.294 0 0 1 14.331 75.09c3.937.76 7.993.603 11.857-.453c-12.252-2.475-21.066-13.239-21.066-25.74v-.333a26.094 26.094 0 0 0 11.919 3.287C5.5 44.139 1.945 28.788 8.913 16.787a74.535 74.535 0 0 0 54.122 27.435a26.277 26.277 0 0 1 7.598-25.09c10.577-9.943 27.212-9.433 37.154 1.139a52.696 52.696 0 0 0 16.677-6.376A26.359 26.359 0 0 1 112.92 28.42A52.227 52.227 0 0 0 128 24.285a53.35 53.35 0 0 1-13.104 13.603z"
            />
          </svg>
        </a>{" "}
      </li>

      <li className="inline-block mr-2">
        {" "}
        <a className="text-red-600 cursor-pointer mr-1" href="https://eduport.webestica.com/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128">
            <path
              fill="#0076b2"
              d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3z"
            />
            <path
              fill="#fff"
              d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 1 1-10.5 10.49a10.5 10.5 0 0 1 10.5-10.49m20.41 29h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
            />
          </svg>
        </a>{" "}
      </li>

      <li className="inline-block mr-2">
        {" "}
        <a className="text-sky-600 cursor-pointer mr-1" href="https://eduport.webestica.com/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
            <g fill="none" stroke="#de60bc" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
              <path d="M44 24a19.938 19.938 0 0 1-5.889 14.173A19.937 19.937 0 0 1 24 44C12.954 44 4 35.046 4 24a19.932 19.932 0 0 1 5.5-13.775A19.943 19.943 0 0 1 24 4a19.937 19.937 0 0 1 14.111 5.827A19.938 19.938 0 0 1 44 24Z" />
              <path d="M44 24c-2.918 0-10.968-1.1-18.173 2.063C18 29.5 12.333 34.831 9.863 38.147" />
              <path d="M16.5 5.454C19.63 8.343 26.46 15.698 29 23c2.54 7.302 3.48 16.28 4.06 18.835" />
              <path d="M4.154 21.5c3.778.228 13.779.433 20.179-2.3c6.4-2.733 11.907-7.76 13.796-9.355M5.5 31.613a20.076 20.076 0 0 0 9 9.991" />
              <path d="M4 24a19.932 19.932 0 0 1 5.5-13.775M24 4a19.943 19.943 0 0 0-14.5 6.225M32 5.664a20.037 20.037 0 0 1 6.111 4.163A19.938 19.938 0 0 1 44 24c0 2.462-.445 4.821-1.26 7M24 44a19.937 19.937 0 0 0 14.111-5.827" />
            </g>
          </svg>
        </a>{" "}
      </li>

      <li className="inline-block">
        {" "}
        <a className="text-rose-400 cursor-pointer mr-1" href="https://eduport.webestica.com/#">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
            <path
              fill="#CB1F27"
              d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239c-.36-8.938-.064-19.668 2.228-29.393c2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136c11.643 0 17.268 8.745 17.268 19.217c0 11.704-7.465 29.211-11.304 45.426c-3.207 13.578 6.808 24.653 20.203 24.653c24.252 0 40.586-31.149 40.586-68.055c0-28.054-18.895-49.052-53.262-49.052c-38.828 0-63.017 28.956-63.017 61.3c0 11.152 3.288 19.016 8.438 25.106c2.368 2.797 2.697 3.922 1.84 7.134c-.614 2.355-2.024 8.025-2.608 10.272c-.852 3.242-3.479 4.401-6.409 3.204c-17.884-7.301-26.213-26.886-26.213-48.902c0-36.361 30.666-79.961 91.482-79.961c48.87 0 81.035 35.364 81.035 73.325c0 50.213-27.916 87.726-69.066 87.726c-13.819 0-26.818-7.47-31.271-15.955c0 0-7.431 29.492-9.005 35.187c-2.714 9.869-8.026 19.733-12.883 27.421a127.897 127.897 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0C57.314 0 0 57.309 0 128.002Z"
            />
          </svg>
        </a>{" "}
      </li>
    </ul>
  );
};

export default SocialLinks;
