import React, { useRef, useState } from "react";
import clamp from "lodash-es/clamp";
import { useSpring, useSprings, animated, config } from "react-spring";
import { useDrag, useGesture } from "react-use-gesture";
import pen from "../../images/calligraphy_blue.jpg";
import brushes from "../../images/brushes.jpg";
import fox from "../../images/fox_paint.jpg";

const pages = [pen, brushes, fox];
const imageStyle = [
  {
    background: "#c4c3becf",
    color: "#211652"
    /*position: "relative",
    left: "65%"*/
  },
  { background: "#162425a3", color: "#e0eceb" },
  { background: "#bcbfc4c7", color: "#1a191e" }
];

const backgroundInLeft = ["#2b445238", "#2b4452", "#2b4452"];
const backgroundInRight = ["#2b4452", "#2b4452", "#2b445238"];

function CarrouselCooperation() {
  const index = useRef(0);
  const [{ left, right, p }, setHeader] = useSpring(() => ({
    left: "#2b445238",
    right: "#2b4452",
    p: "1.25rem",
    config: config.slow
  }));

  const [props, set] = useSprings(pages.length, i => ({
    x: i * window.innerWidth,
    sc: 1,
    display: "block"
  }));

  const bind = useGesture({
    onDrag: ({
      down,
      delta: [xDelta],
      direction: [xDir],
      distance,
      cancel
    }) => {
      if (down && distance > window.innerWidth / 5) {
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            pages.length - 1
          ))
        );
        setHeader({
          left: backgroundInLeft[index.current],
          right: backgroundInRight[index.current]
        });
      }
      set(i => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
        return { x, sc, display: "block" };
      });
    },
    onHover: ({ hovering }) =>
      setHeader(hovering ? { p: "1.6rem" } : { p: "1.25rem" })
  });

  return (
    <>
      <div className="header-spring-carrousel">
        <animated.p style={{ fontSize: p }}>
          Arrastra las imágenes a los lados
        </animated.p>
        <animated.div style={{ background: left }}></animated.div>
        <animated.div style={{ background: right }}></animated.div>
      </div>

      {props.map(({ x, display, sc }, i) => (
        <animated.div
          {...bind()}
          key={i}
          style={{
            display,
            transform: x.interpolate(x => `translate3d(${x}px,0,0)`)
          }}
          className="spring-carrousel"
        >
          <animated.div
            style={{
              transform: sc.interpolate(s => `scale(${s})`),
              backgroundImage: `url(${pages[i]})`
            }}
          >
            <div style={imageStyle[i]}>
              <h3 style={{ marginBottom: "10%" }}>
                Ut nunc nisi, viverra eu tincidunt
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                blandit euismod volutpat. Phasellus mollis augue at odio
                finibus, quis tristique eros mollis. Sed lacus mi, rhoncus sed
                laoreet in, sodales ut risus.
              </p>
            </div>
          </animated.div>
        </animated.div>
      ))}
    </>
  );
}

export default CarrouselCooperation;

/*

const bind = useDrag(
    ({ down, delta: [xDelta], direction: [xDir], distance, cancel }) => {
      if (down && distance > window.innerWidth / 5) {
        cancel(
          (index.current = clamp(
            index.current + (xDir > 0 ? -1 : 1),
            0,
            pages.length - 1
          ))
        );
        setIndicator({
          left: backgroundInLeft[index.current],
          right: backgroundInRight[index.current]
        });
      }
      set(i => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * window.innerWidth + (down ? xDelta : 0);
        const sc = down ? 1 - distance / window.innerWidth / 2 : 1;
        return { x, sc, display: "block" };
      });
    }
  );
*/
