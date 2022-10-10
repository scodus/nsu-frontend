import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./styles.css";

const PreLoader = () => {
  // selections here
  const imageCurtain = useRef();
  const imageImg = useRef();
  const nsuTechFest = useRef();
  const loaderRef = useRef();

  useEffect(() => {
    let animation = gsap.timeline();

    // animation 1
    animation.to(imageCurtain.current, {
      ease: "circle.easeOut",
      duration: 2.5,
      scale: 4,
      opacity: 0,
      display: "none",
      delay: 3,
    });

    // animation 2
    animation.to(
      imageImg.current,
      {
        top: "0vh",
        ease: "power4.easeInOut",
        scale: 1,
        duration: 2,
      },
      "-=2.1"
    );

    // animation 3
    animation.to(
      imageImg.current,
      {
        top: "0vh",
        // opacity: "scale(0.5)",
        ease: "power4.easeInOut",
        zIndex: 30,
        scale: 4,
        opacity: 0,
        duration: 9,
        delay: 1.5,
        display: "none",
      },
      "-=0.56"
    );

    //  animation 4
    animation.to(
      nsuTechFest.current,
      {
        bottom: "60px",
        duration: 2,
      },
      "-=12"
    );

    // animation 5
    animation.to(
      nsuTechFest.current,
      {
        transform: "translateY(-250px) scale(0.5)",

        duration: 3,
        color: "#54aedc",
      },
      "-=9"
    );

    // animation 6
    animation.to(
      loaderRef.current,
      {
        opacity: 0,
        display: "none",
        duration: 3.5,
      },
      "-=9"
    );
  }, []);

  return (
    <div className="image" ref={loaderRef}>
      <div className="image-curtain" ref={imageCurtain}>
        <div className="loader">
          <svg
            className="svg-loader"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            style={{ display: "block" }}
            width="400px"
            height="400px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <g style={{ opacity: 0.5 }}>
              <polygon
                stroke="#799b79"
                className="ldio-fpzvie7mduv-st0"
                points="41.5 62 30 62 24.2 72 30 82 41.5 82 47.3 72"
              ></polygon>
              <polygon
                stroke="#799b79"
                className="ldio-fpzvie7mduv-st0"
                points="58.8 72 47.3 72 41.5 82 47.3 92 58.8 92 64.6 82"
              ></polygon>
              <polygon
                stroke="#799b79"
                className="ldio-fpzvie7mduv-st0"
                points="76.2 62 64.6 62 58.8 72 64.6 82 76.2 82 81.9 72"
              ></polygon>
              <polygon
                stroke="#799b79"
                className="ldio-fpzvie7mduv-st0"
                points="41.5 42 30 42 24.2 52 30 62 41.5 62 47.3 52"
              ></polygon>
              <polygon
                stroke="#799b79"
                className="ldio-fpzvie7mduv-st0"
                points="58.8 12 47.3 12 41.5 22 47.3 32 58.8 32 64.6 22"
              ></polygon>
              <polygon
                stroke="#799b79"
                className="ldio-fpzvie7mduv-st0"
                points="58.8 32 47.3 32 41.5 42 47.3 52 58.8 52 64.6 42"
              ></polygon>
              <polygon
                stroke="#799b79"
                className="ldio-fpzvie7mduv-st0"
                points="76.2 22 64.6 22 58.8 32 64.6 42 76.2 42 81.9 32"
              ></polygon>
            </g>
            <g>
              <path
                fill="#2accfc"
                d="M48.3 56.8l-4.4 1.5c-0.9-1.3-1.5-2.7-1.7-4.3l-1.9 0.3c0.5 2.6 1.7 5 3.6 6.9c1.9 1.9 4.3 3.1 6.9 3.6 l0.3-1.9c-1.6-0.3-3-0.9-4.3-1.7L48.3 56.8z"
              ></path>
              <path
                fill="#2accfc"
                d="M57.8 47.2l4.4-1.5c0.9 1.3 1.5 2.7 1.7 4.3l1.9-0.3c-0.5-2.6-1.7-5-3.6-6.9c-1.9-1.9-4.3-3.1-6.9-3.6L55 41.1 c1.6 0.3 3 0.9 4.3 1.7L57.8 47.2z"
              ></path>
              <path
                fill="#2accfc"
                d="M62.2 58.2l-4.4-1.5l1.5 4.4C58 62 56.5 62.6 55 62.9l0.3 1.9c2.6-0.5 5-1.7 6.9-3.6c1.9-1.9 3.1-4.3 3.6-6.9 L64 53.9C63.7 55.5 63.1 56.9 62.2 58.2z"
              ></path>
              <path
                fill="#2accfc"
                d="M43.9 42.8c-1.9 1.9-3.1 4.3-3.6 6.9l1.9 0.3c0.3-1.6 0.9-3 1.7-4.3l4.4 1.5l-1.5-4.4c1.3-0.9 2.7-1.5 4.3-1.7 l-0.3-1.9C48.2 39.7 45.8 40.9 43.9 42.8z"
              ></path>
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="4s"
                keyTimes="0;1"
                values="0 53.064 52;360 53.064 52"
              ></animateTransform>
            </g>
            <g className="ldio-fpzvie7mduv-st2">
              <path
                fill="#2accfc"
                d="M36 61.9c-1.7-3-2.7-6.4-2.7-9.9c0-10.9 8.8-19.7 19.7-19.7v1c-10.3 0-18.8 8.4-18.8 18.8 c0 3.3 0.9 6.5 2.5 9.4L36 61.9z"
              ></path>
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="2s"
                keyTimes="0;1"
                values="360 53.064 52;0 53.064 52"
              ></animateTransform>
            </g>
            <g className="ldio-fpzvie7mduv-st2">
              <path
                fill="#2accfc"
                d="M57 75.3l-0.5-3c9.9-1.7 17.2-10.2 17.2-20.3c0-11.4-9.2-20.6-20.6-20.6S32.5 40.6 32.5 52 c0 1.6 0.2 3.2 0.5 4.7l-3 0.7c-0.4-1.8-0.6-3.6-0.6-5.4c0-13.1 10.6-23.7 23.7-23.7S76.7 38.9 76.7 52 C76.7 63.6 68.4 73.4 57 75.3z"
              ></path>
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1.332s"
                keyTimes="0;1"
                values="0 53.064 52;360 53.064 52"
              ></animateTransform>
            </g>
            <g>
              <path
                fill="#2accfc"
                d="M90.5 45.4c-1.5-8.8-6.2-16.8-13-22.5l0 0c-3.4-2.9-7.3-5.1-11.4-6.6s-8.5-2.3-13-2.3v2.4v1.4v2.4 c3.7 0 7.4 0.6 10.9 1.9l0.8-2.3c0 0 0 0 0 0c3.7 1.4 7.2 3.4 10.3 5.9l1.2-1.5L75 25.8c0 0 0 0 0 0l-1.5 1.8 c5.7 4.8 9.6 11.5 10.9 18.8l3.8-0.7c0 0 0 0 0 0L90.5 45.4z"
              ></path>
              <path
                fill="#2accfc"
                d="M29.7 22l4.7 6.1c3.5-2.8 7.5-4.6 11.9-5.6l-1.7-7.5C39.2 16.2 34.2 18.5 29.7 22z"
              ></path>
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="2s"
                keyTimes="0;1"
                values="360 53.064 52;0 53.064 52"
              ></animateTransform>
            </g>
            <g className="ldio-fpzvie7mduv-st2">
              <path
                fill="#2accfc"
                d="M53.1 92.4v-1c21.8 0 39.5-17.7 39.5-39.5c0-21.8-17.7-39.5-39.5-39.5c-15.8 0-30 9.4-36.2 23.8L15.9 36 c6.4-14.8 21-24.4 37.1-24.4c22.3 0 40.4 18.1 40.4 40.4C93.5 74.3 75.3 92.4 53.1 92.4z"
              ></path>
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1.332s"
                keyTimes="0;1"
                values="0 53.064 52;360 53.064 52"
              ></animateTransform>
            </g>
            <polygon
              fill="#d9534f"
              points="57.4 51.5 53.5 51.5 53.5 47.7 52.6 47.7 52.6 51.5 48.7 51.5 48.7 52.5 52.6 52.5 52.6 56.3 53.5 56.3 53.5 52.5 57.4 52.5 "
            >
              <animate
                attributeName="opacity"
                repeatCount="indefinite"
                dur="1.332s"
                keyTimes="0;0.4;0.5;0.9;1"
                values="0;0;1;1;0"
              ></animate>
            </polygon>
            <g>
              <path
                fill="#2accfc"
                d="M39.7 28.5l0.6 1c3.9-2.2 8.3-3.4 12.8-3.4V25C48.4 25 43.7 26.2 39.7 28.5z"
              ></path>
              <path
                fill="#2accfc"
                d="M28.6 60.6l-1.1 0.4C31.3 71.8 41.6 79 53.1 79v-1.2C42.1 77.9 32.3 70.9 28.6 60.6z"
              ></path>
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="4s"
                keyTimes="0;1"
                values="360 53.064 52;0 53.064 52"
              ></animateTransform>
            </g>
            <g>
              <polyline
                stroke="#39ff39"
                className="ldio-fpzvie7mduv-st3"
                points="35.5 77.5 27.5 89.5 24 89.5"
              ></polyline>
              <rect
                stroke="#39ff39"
                x="7"
                y="86"
                className="ldio-fpzvie7mduv-st4"
                width="17"
                height="7"
              ></rect>
            </g>
            <g>
              <polyline
                stroke="#39ff39"
                className="ldio-fpzvie7mduv-st4"
                points="59 22 69 12 82 12"
              ></polyline>
              <circle
                stroke="#39ff39"
                className="ldio-fpzvie7mduv-st4"
                cx="87"
                cy="12"
                r="5"
              ></circle>
            </g>
          </svg>
          <div>
            <h2 className="loader-title">NSU TECHFEST</h2>
          </div>
        </div>
      </div>
      <div className="nsu-tech-fest" ref={nsuTechFest}>
        NSU TechFest 2.0
      </div>
      <img
        className="imageImg"
        src="/src/assets/background.jpg"
        ref={imageImg}
      />
    </div>
  );
};

export default PreLoader;
