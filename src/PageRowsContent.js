import React from "react";
import TextBox from "./components/TextBox";
import calligraphy from "./images/calligraphy_blue.jpg";
import brushes from "./images/brushes.jpg";
import foxPaint from "./images/fox_paint.jpg";
import handShake from "./images/handshake.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MainRowsContent = [
  {
    id: "1",
    colsContent: [
      {
        colId: "1",
        sizeColumn: "6",
        content: <img src={handShake} alt="imagen de un apretón de manos" />
      },
      {
        colId: "2",
        sizeColumn: "1",
        content: <FontAwesomeIcon icon="guitar" size="4x" />
      },
      {
        colId: "3",
        sizeColumn: "4",
        content: (
          <TextBox
            title="Lorem ipsum dolor sit amet dolor sit amet"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit euismod volutpat. Phasellus mollis augue at odio finibus, quis tristique eros mollis. Sed lacus mi, rhoncus sed laoreet in, sodales ut risus. Ut nunc nisi, viverra eu tincidunt sit amet, posuere et felis"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              blandit euismod volutpat. Phasellus mollis augue at odio finibus,
              quis tristique eros mollis. Sed lacus mi, rhoncus sed laoreet in,
              sodales ut risus. Ut nunc nisi, viverra eu tincidunt{" "}
            </p>
          </TextBox>
        )
      },
      {
        colId: "4",
        sizeColumn: "1",
        content: <FontAwesomeIcon icon="camera" size="4x" />
      }
    ]
  },
  {
    id: "2",
    colsContent: [
      {
        colId: "1",
        sizeColumn: "5",
        content: (
          <TextBox
            title="Lorem ipsum dolor sit amet"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In blandit euismod volutpat. Phasellus mollis augue at odio finibus, quis tristique eros mollis. Sed lacus mi, rhoncus sed laoreet in, sodales ut risus. Ut nunc nisi, viverra eu tincidunt sit amet, posuere et felis."
            titleType={3}
          />
        )
      },
      {
        colId: "2",
        sizeColumn: "7",
        content: (
          <img src={calligraphy} alt="imagen de una hoja con caligrafía" />
        )
      }
    ]
  },
  {
    id: "3",
    colsContent: [
      {
        colId: "1",
        sizeColumn: "5",
        content: (
          <TextBox
            title="Intercambia conocimientos"
            text="Quieres aprender fotografia, utilizar herramientas de software para el diseño, etc... Y tienes conocimientos que comartir"
            titleType={3}
          />
        )
      },
      {
        colId: "2",
        sizeColumn: "7",
        content: <img src={brushes} alt="imagen de pinceles" />
      }
    ]
  },
  {
    id: "4",
    colsContent: [
      {
        colId: "1",
        sizeColumn: "5",
        content: (
          <TextBox
            title="Intercambia conocimientos"
            text="Quieres aprender fotografia, utilizar herramientas de software para el diseño, etc... Y tienes conocimientos que comartir"
            titleType={3}
          />
        )
      },
      {
        colId: "2",
        sizeColumn: "7",
        content: <img src={foxPaint} alt="imagen de una pintura de un zorro" />
      }
    ]
  }
];
