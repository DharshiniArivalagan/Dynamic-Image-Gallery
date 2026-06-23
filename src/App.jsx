import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import imageData from "./data/imageData";

/**
 * App — Root component.
 *
 * Reads the image data array and passes it down to child components via props.
 * Uses React Fragments (<></>) to avoid adding extra wrapping DOM elements.
 */
const App = () => {
  return (
    <>
      <Header imageCount={imageData.length} />
      <main>
        <Gallery images={imageData} />
      </main>
      <Footer />
    </>
  );
};

export default App;
