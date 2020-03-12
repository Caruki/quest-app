// import React from "react";
// import "./Form.css";

// export default function Form(props) {

//   function handleInputChange(event) {
//     const target = event.target;
//     const value = target.name === 'question' ? target.value :
//   };

//   function handleSubmit(event) {
//     alert("A question was submitted " + state.value);
//     event.preventDefault();
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         className="inputQuestion"
//         type="text"
//         placeholder="Enter your question"
//         value={state.question}
//         onChange={handleInputChange}
//       />
//       <input
//         className="inputAnswerOpt"
//         type="text"
//         placeholder="Answer Option 1"
//         value={state.option1}
//         onChange={handleInputChange}
//       />
//       <input
//         className="inputAnswerOpt"
//         type="text"
//         placeholder="Answer Option 2"
//         value={state.option2}
//         onChange={handleInputChange}
//       />
//       <input
//         className="inputAnswerOpt"
//         type="text"
//         placeholder="Answer Option 3"
//         value={state.option3}
//         onChange={handleInputChange}
//       />

//       <input type="submit" value="Submit" />
//     </form>
//   );
// }
