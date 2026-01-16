import React, { useState } from "react";
import '../styles.css'; // Ensure the CSS is linked

export default function Dashboard() {
  // States for toggling the button options and showing content
  const [stockOptionsVisible, setStockOptionsVisible] = useState(false);
  const [bankOptionsVisible, setBankOptionsVisible] = useState(false);
  
  const [stockTextVisible, setStockTextVisible] = useState(false);
  const [bankTextVisible, setBankTextVisible] = useState(false);
  const [currentStockTextVisible, setCurrentStockTextVisible] = useState(false);
  
  const [secondOptionTextVisible, setSecondOptionTextVisible] = useState([false, false, false]);

  // Toggle visibility of the stock options
  const toggleStockOptions = () => {
    setStockOptionsVisible(!stockOptionsVisible);
  };

  const toggleBankOptions = () => {
    setBankOptionsVisible(!bankOptionsVisible);
  };

  // Functions to display respective text based on button clicked for the first "Show Options" box
  const showStockText = () => {
    setStockTextVisible(true);
    setBankTextVisible(false);
    setCurrentStockTextVisible(false);
  };

  const showBankText = () => {
    setBankTextVisible(true);
    setStockTextVisible(false);
    setCurrentStockTextVisible(false);
  };

  const showCurrentStockText = () => {
    setCurrentStockTextVisible(true);
    setStockTextVisible(false);
    setBankTextVisible(false);
  };

  // Functions for the second "Show Options" section (with 3 text boxes side by side)
  const showSecondOptionText = (index) => {
    const newArray = [...secondOptionTextVisible];
    newArray[index] = !newArray[index];
    setSecondOptionTextVisible(newArray);
  };

  return (
    <div className="dashboard">
      {/* Sloping images background */}
      <div className="sloped-image" style={{ backgroundImage: 'url(path_to_stock_image1.jpg)' }} />
      <div className="sloped-image" style={{ backgroundImage: 'url(path_to_stock_image2.jpg)' }} />
      <div className="sloped-image" style={{ backgroundImage: 'url(path_to_stock_image3.jpg)' }} />
      <div className="sloped-image" style={{ backgroundImage: 'url(path_to_stock_image4.jpg)' }} />

      {/* First Show Options Box (Stock Options) */}
      <div className="buttons-container">
        <button className="button" onClick={toggleStockOptions}>
          Show Stock Options
        </button>

        {/* Show options when stockOptionsVisible is true */}
        {stockOptionsVisible && (
          <ol className="options-container">
            <li className="option" onClick={showStockText}>
              Stock Market
            </li>
            <li className="option" onClick={showBankText}>
              Bank Account
            </li>
            <li className="option" onClick={showCurrentStockText}>
              Current Stock
            </li>
          </ol>
        )}
      </div>

      {/* First Right-side Box (appears when Option is clicked) */}
      {stockTextVisible && (
        <div className="right-box">
          <h2>Stock Market Information</h2>
          <p>This box shows stock-related data or information.</p>
        </div>
      )}

      {bankTextVisible && (
        <div className="right-box">
          <h2>Bank Account Information</h2>
          <p>This box shows your bank account balance and details.</p>
        </div>
      )}

      {currentStockTextVisible && (
        <div className="right-box">
          <h2>Current Stock Data</h2>
          <p>This box shows current stock data for your portfolio.</p>
        </div>
      )}

      {/* Second Show Options Box (Bank Options) */}
      <div className="buttons-container">
        <button className="button" onClick={toggleBankOptions}>
          Show Bank Options
        </button>

        {/* Show options when bankOptionsVisible is true */}
        {bankOptionsVisible && (
          <ol className="options-container">
            <li className="option" onClick={() => showSecondOptionText(0)}>
              Option 1
            </li>
            <li className="option" onClick={() => showSecondOptionText(1)}>
              Option 2
            </li>
            <li className="option" onClick={() => showSecondOptionText(2)}>
              Option 3
            </li>
          </ol>
        )}
      </div>

      {/* Second Right-side Boxes (appear when second option is clicked) */}
      <div className="side-by-side-boxes">
        {secondOptionTextVisible[0] && (
          <div className="right-box">
            <h2>Second Option 1</h2>
            <p>This is the content for second option 1.</p>
          </div>
        )}

        {secondOptionTextVisible[1] && (
          <div className="right-box">
            <h2>Second Option 2</h2>
            <p>This is the content for second option 2.</p>
          </div>
        )}

        {secondOptionTextVisible[2] && (
          <div className="right-box">
            <h2>Second Option 3</h2>
            <p>This is the content for second option 3.</p>
          </div>
        )}
      </div>
    </div>
  );
}
