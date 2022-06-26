import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions
import { getReviews } from "../../actions/reviewActions";
// components
import Review from "../review/Review";
// style
import "./Explanation.scss";
// import logo from "../../img/tree-solid.svg";

const Explanation = () => {
  const dispatch = useDispatch();
  const reviewsList = useSelector((state) => state.getReviewReducer);
  const { reviews } = reviewsList;
  console.log("reviews ", reviewsList);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  return (
    <div className="explanation-container">
      <div className="explanation">
        <h1 className="explanation-header">
          {/* <i className="fas fa-angle-double-right" style={{color: 'green'}}></i>&nbsp; */}
          {/* <img src={logo} alt="ecotreecare-logo" className="logo" />
          &nbsp;  */}
          Welcome to American Arbor Tree Care Professionals
          {/* &nbsp;<i className="fas fa-angle-double-left" style={{color: 'green'}}></i> */}
        </h1>
        {/* <br />
        <br />
        <i className="fas fa-angle-double-right" style={{ color: "green" }}></i>
        &nbsp; American Arbor Tree Care Professionals offers a wide variety of
        services to help all clients. We provide top level tree maintenance for
        overgrown trees and trees that need professional care to maintain their
        original sizes, shapes, and health. We understand trees well and know
        how to make sure that they stay healthy in any environment. We can bring
        that kind of expert knowledge to you and perform wonders on your trees
        right before your eyes. */}
        {/* <br /><br /> */}
        {/* American Arbor Tree Care Professionals also specializes in expert landscape management planning. Get the most out of your landscape by taking the time to properly plan any new additions with our expert team of landscape planners. This is a great opportunity for you to know ahead of time that your landscaping plans will go off with out a hitch. Whatever the job, we are the way to go. If you want to get the best tree care in Davis, CA give us a call today. */}
        {/* </p> */}
        <br />
        <ul className="list">
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Cabling and rope
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Previsioned pruning
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Construction impact mitigation
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Soil work applications
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Fertilization, mycorrhizal
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Inventories and arborist reports
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Irrigation retrofits
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Lawn conversions
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Removal and Replacement
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Management plans
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Orchard pruning
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Placement consulting
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Sheet mulching
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Tree protection
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Water conservation
          </li>
          <li className="list-item">
            <i
              className="fas fa-angle-double-right"
              style={{ color: "green" }}
            ></i>
            &nbsp;Worker training
          </li>
        </ul>
        <p className="paragraph">
          <i
            className="fas fa-angle-double-right"
            style={{ color: "green" }}
          ></i>
          &nbsp; We provide excellent tree care services and comprehensive plans
          for landscape management. Tree care is our passion and we provide
          every customer with a hands on maintenance plan that gives you control
          over how your landscape looks. All of our rates are affordable and
          come with the guarantee that we will cut no corners, no matter how
          small or large the project is. No matter what the job, we can help you
          finish it.
        </p>
      </div>
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
};

export default Explanation;
