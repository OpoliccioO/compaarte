import React, { forwardRef } from "react";
import { MainRowsContent } from "../../PageRowsContent";
import AnimateSection from "../AnimateSection";
import SectionCooperation from "./SectionCooperation";
import SectionShare from "./SectionShare";

const rows = MainRowsContent;

const MainContent = props => {
  return (
    <main id="main-container">
      <AnimateSection>
        {({ animateShare }) => {
          return (
            <>
              <SectionShare animateShare={animateShare} />
              <SectionCooperation />
            </>
          );
        }}
      </AnimateSection>
    </main>
  );
};

/*
      {MainRowsContent.map(row => {
        const { id, colsContent } = row;
        return <RowContent key={id} colsContent={colsContent} />;
      })}
      */

export default MainContent;
