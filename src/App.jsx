import { useState } from "react";
import "./App.css";

export default function App() {
  const [transportation, setTransportation] = useState("");
  const [usage, setUsage] = useState("");
  const [comment, setComment] = useState("");
  const [level, setLevel] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [formData, setFormData] = useState(false);

  const formHandler = (event) => {
    event.preventDefault();

    if (agreement) {
      setFormData(true);
    }
  };

  return (
    <main>
      <form onSubmit={formHandler}>
        <h1>Transportation preference Form</h1>
        <label>Prefered Mode of Transportation</label>
        <select
          required
          onChange={(event) => setTransportation(event.target.value)}
          value={transportation}
        >
          <option value="">Select</option>
          <option value="Car">Car</option>
          <option value="Bus">Bus</option>
          <option value="Train">Train</option>
          <option value="Bicycle">Bicycle</option>
          <option value="Walk">Walk</option>
        </select>
        <br />
        <br />
        <label>Frequency of Usage: </label>
        <select
          required
          onChange={(event) => setUsage(event.target.value)}
          value={usage}
        >
          <option value="">Select</option>
          <option value="Dialy">Dialy</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Occasionally">Occasionally</option>
        </select>
        <br />
        <br />
        <label>Comments (if any): </label>
        <br />
        <textarea
          rows="5"
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <br />
        <br />
        <label>Experience Level</label>
        <br />
        <input
          type="radio"
          value="Beginner"
          name="level"
          onChange={(event) => setLevel(event.target.value)}
        />{" "}
        Beginner <br />
        <input
          onChange={(event) => setLevel(event.target.value)}
          type="radio"
          value="Intermediate"
          name="level"
        />{" "}
        Intermediate <br />
        <input
          type="radio"
          value="Advanced"
          name="level"
          onChange={(event) => setLevel(event.target.value)}
        />{" "}
        Advanced <br />
        <br />
        <input
          type="checkbox"
          onChange={(event) => setAgreement(event.target.checked)}
        />{" "}
        I agree to the terms and conditions.
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <div>
          <h2>Submitted Details</h2>
          <p>Prefered Mode of Transportation: {transportation}</p>
          <p>Frequency of Usage: {usage}</p>
          <p>Comment: {comment === "" ? "none" : comment}</p>
          <p>Experience Level: {level}</p>
        </div>
      )}
    </main>
  );
}
