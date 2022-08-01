// import React, { useState } from "react";
// // npm's
// import { useForm } from "react-hook-form";
// import Modal from "react-modal";
// Modal.setAppElement("#root");

// const SubscribeButton = () => {
//   const [openModal, setOpenModal] = useState(false);
//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const customStyles = {
//     content: {
//       background: "linear-gradient(to right bottom, #4169E1, dodgerblue)",
//       bottom: "auto",
//       // display: 'flex',
//       left: "19%",
//       // marginTop: "100px",
//       position: "relative",
//       padding: "60px",
//       top: "10%",
//       textAlign: "center",
//       width: "60%",
//     },
//     // overlay: {
//     //   backgroundColor: '#fff'
//     // }
//   };

//   return (
//     <div className="subscribe-button-container">
//       <button className="subscribe-button" onClick={() => setOpenModal(true)}>
//         <span>Subscribe!</span>
//       </button>
//       <Modal
//         className="subscribe-modal"
//         isOpen={openModal}
//         onRequestClose={() => setOpenModal(false)}
//         style={customStyles}
//       >
//         <div className="form-container">
//           {/* <i className="fas fa-times-circle"></i> */}
//           {/* <h1>&times;</h1> */}
//           {/* <h4>Exclusive deals just for you!</h4> */}

//           <form className="subscribe-form" onSubmit={handleSubmit(onSubmit)}>
//             <input
//               type="text"
//               name="name"
//               ref={register({ required: true })}
//               placeholder="Name"
//               style={{ width: "50%" }}
//             />
//             {errors.name && "Name is required."}
//             <input
//               type="email"
//               name="email"
//               ref={register({ required: true })}
//               placeholder="Email"
//               style={{ width: "50%" }}
//             />
//             {errors.email && "Email is required."}
//             <input
//               type="text"
//               name="phone"
//               ref={register({ required: true })}
//               placeholder="Phone"
//               style={{ width: "50%" }}
//             />
//             {errors.phone && "Name is required."}
//             <button type="submit">Submit</button>
//           </form>
//         </div>

//         {/* <button onClick={() => setOpenModal(false)}>Close</button> */}
//       </Modal>
//     </div>
//   );
// };

// export default SubscribeButton;
