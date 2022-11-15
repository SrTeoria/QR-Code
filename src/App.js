import image from "./image-qr-code.png"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <figure className="qrCard">
        <img className="qrImage" src={image} alt="qrImage" />
        <figcaption className="qrDescription">
          <h2>Improve your front-end skills by building proyjects</h2>
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </figcaption>
      </figure>
    </div>
  );
}

export default App;
