import classNames from 'classnames/bind';

import styles from './Contacts.module.scss';

const cx = classNames.bind(styles);

export default function Contacts() {
  return (
    <div className={cx('contacts')}>
      <div className={cx('contacts__item', 'contacts__item_instagram', 'emerge')} data-expose="true">
        <a className={cx('contacts__icon')} href="https://www.instagram.com/ekaterinburg.design/" target="_blank" aria-label="Instagram">
          <SVGInstagram />
        </a>
      </div>

      <div className={cx('contacts__item', 'contacts__item_facebook', 'emerge')} data-expose="true">
        <a className={cx('contacts__icon')} href="https://www.facebook.com/ekaterinburg.design" target="_blank" aria-label="Facebook">
          <SVGFacebook />
        </a>
      </div>

      <div className={cx('contacts__item', 'contacts__item_youtube', 'emerge')} data-expose="true">
        <a className={cx('contacts__icon')} href="https://www.youtube.com/channel/UCGHlfaD8vXJRoeRd_J6FS9g" target="_blank" aria-label="YouTube">
          <SVGYouTube />
        </a>
      </div>

      <div className={cx('contacts__item', 'contacts__item_mail')}>
        <span className={cx('contacts__caption', 'contacts__caption_mail')}>написать нам</span><br />
        <a className={cx('contacts__link')} href="mailto:mail@ekaterinburg.design">
          mail@<br />ekaterinburg.<br />design
        </a>
      </div>
    </div>
  )
};


function SVGInstagram() {
  return (
    <svg
      width={786}
      height={786}
      viewBox="0 0 786 786"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M649.784 183.178c0-26.116-21.165-47.202-47.183-47.202-26.019 0-47.203 21.086-47.203 47.202 0 26.019 21.184 47.105 47.203 47.105 26.018 0 47.183-21.086 47.183-47.105"
        fill="url(#a)"
      />
      <path
        d="M712.655 551.631c-1.747 38.31-8.155 59.125-13.475 72.949-7.145 18.33-15.669 31.436-29.493 45.183-13.67 13.747-26.777 22.252-45.106 29.319-13.825 5.399-34.718 11.825-73.026 13.651-41.416 1.825-53.688 2.214-158.714 2.214-104.928 0-117.297-.389-158.713-2.214-38.309-1.826-59.104-8.252-72.93-13.651-18.426-7.067-31.435-15.572-45.182-29.319-13.845-13.747-22.368-26.853-29.416-45.183-5.322-13.824-11.825-34.639-13.477-72.949-2.018-41.416-2.388-53.881-2.388-158.693 0-105.026.37-117.395 2.388-158.811 1.652-38.309 8.155-59.104 13.477-73.046 7.048-18.31 15.571-31.339 29.416-45.086 13.747-13.727 26.756-22.252 45.182-29.396 13.826-5.418 34.621-11.748 72.93-13.573 41.416-1.826 53.785-2.292 158.713-2.292 105.026 0 117.298.466 158.714 2.293 38.308 1.824 59.201 8.154 73.026 13.572 18.329 7.144 31.436 15.669 45.106 29.396 13.824 13.747 22.348 26.776 29.493 45.086 5.32 13.942 11.728 34.737 13.475 73.046 1.923 41.416 2.388 53.785 2.388 158.811 0 104.812-.465 117.277-2.388 158.693Zm70.737-320.727c-1.923-41.863-8.525-70.464-18.33-95.375-9.98-25.844-23.359-47.746-45.261-69.648-21.804-21.805-43.707-35.184-69.551-45.28-25.008-9.709-53.513-16.389-95.395-18.213-41.882-2.02-55.26-2.389-162.014-2.389C286.185 0 272.71.368 230.828 2.388c-41.786 1.824-70.271 8.504-95.396 18.213-25.746 10.096-47.648 23.475-69.453 45.28-21.902 21.902-35.281 43.804-45.358 69.648-9.71 24.911-16.31 53.512-18.33 95.375C.466 272.786 0 286.184 0 392.938c0 106.657.466 120.034 2.29 161.916 2.02 41.786 8.622 70.367 18.33 95.395 10.078 25.747 23.457 47.747 45.359 69.551 21.805 21.805 43.707 35.281 69.453 45.359 25.125 9.707 53.61 16.31 95.396 18.232 41.882 1.922 55.357 2.388 162.013 2.388 106.754 0 120.132-.466 162.014-2.388 41.882-1.922 70.387-8.525 95.395-18.232 25.844-10.078 47.747-23.554 69.551-45.359 21.902-21.804 35.281-43.804 45.261-69.551 9.805-25.028 16.407-53.609 18.33-95.395 1.922-41.882 2.388-55.259 2.388-161.916 0-106.754-.466-120.152-2.388-162.034Z"
        fill="url(#b)"
      />
      <path
        d="M392.841 523.789c-72.289 0-130.947-58.563-130.947-130.851 0-72.406 58.658-131.044 130.947-131.044 72.309 0 131.045 58.638 131.045 131.044 0 72.288-58.736 130.851-131.045 130.851Zm0-332.727c-111.433 0-201.682 90.442-201.682 201.876 0 111.337 90.249 201.683 201.682 201.683 111.433 0 201.78-90.346 201.78-201.683 0-111.434-90.347-201.876-201.78-201.876Z"
        fill="url(#c)"
      />
      <defs>
        <linearGradient
          id="a"
          x1={7.087}
          y1={777.654}
          x2={720.333}
          y2={64.412}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD521" />
          <stop offset={0.05} stopColor="#FFD521" />
          <stop offset={0.501} stopColor="#F50000" />
          <stop offset={0.95} stopColor="#B900B4" />
          <stop offset={0.95} stopColor="#B900B4" />
          <stop offset={1} stopColor="#B900B4" />
        </linearGradient>
        <linearGradient
          id="b"
          x1={7.088}
          y1={778.633}
          x2={720.918}
          y2={64.803}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD521" />
          <stop offset={0.05} stopColor="#FFD521" />
          <stop offset={0.501} stopColor="#F50000" />
          <stop offset={0.95} stopColor="#B900B4" />
          <stop offset={0.95} stopColor="#B900B4" />
          <stop offset={1} stopColor="#B900B4" />
        </linearGradient>
        <linearGradient
          id="c"
          x1={7.273}
          y1={778.653}
          x2={720.931}
          y2={64.994}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFD521" />
          <stop offset={0.05} stopColor="#FFD521" />
          <stop offset={0.501} stopColor="#F50000" />
          <stop offset={0.95} stopColor="#B900B4" />
          <stop offset={0.95} stopColor="#B900B4" />
          <stop offset={1} stopColor="#B900B4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SVGFacebook() {
  return (
<svg
      xmlns="http://www.w3.org/2000/svg"
      width="690"
      height="690"
      fill="none"
      viewBox="0 0 690 690"
    >
      <circle cx="345" cy="345" r="345" fill="#00B4FF"></circle>
      <mask
        id="mask0_821_174"
        style={{ maskType: "alpha" }}
        width="690"
        height="690"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <circle cx="345" cy="345" r="345" fill="#00B4FF"></circle>
      </mask>
      <g mask="url(#mask0_821_174)">
        <path
          fill="#fff"
          d="M479.253 444.531l15.289-99.689h-95.647v-64.663c0-27.279 13.337-53.886 56.177-53.886h43.512v-84.87s-39.472-6.735-77.192-6.735c-78.807 0-130.269 47.755-130.269 134.175v75.979h-87.565v99.689h87.565v241.005c17.58 2.762 35.565 4.176 53.886 4.176 18.321 0 36.306-1.414 53.886-4.176V444.531h80.358z"
        ></path>
      </g>
    </svg>
  );
}

function SVGYouTube() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="752"
      height="527"
      fill="none"
      viewBox="0 0 752 527"
    >
      <path
        fill="#E70000"
        d="M736.215 82.194c-8.665-32.37-34.103-57.808-66.473-66.473C611.068 0 375.937 0 375.937 0S140.806 0 82.194 15.72c-32.37 8.666-57.808 34.104-66.473 66.474C0 140.806 0 263.168 0 263.168S0 385.53 15.72 444.143c8.666 32.37 34.104 57.808 66.474 66.473 58.612 15.72 293.743 15.721 293.743 15.721s235.131-.001 293.743-15.721c32.37-8.665 57.808-34.103 66.473-66.473 15.721-58.613 15.721-180.975 15.721-180.975s0-122.362-15.659-180.974z"
      ></path>
      <path
        fill="#FEFEFE"
        d="M300.736 375.936l195.396-112.769-195.396-112.769v225.538z"
      ></path>
    </svg>
  );
}
