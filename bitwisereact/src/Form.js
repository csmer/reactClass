import { useState, useEffect } from "react";
import ToFromInputs from "./components/ToFromInputs";

export default function Form() {
    const [to, setTo] = useState("");

    function handleSubmit() {
        // do something
    }

    return (
        <>
          <form onSubmit={handleSubmit}>
            <ToFromInputs to={to} setTo={setTo} />
          </form>
        </>
      );
}