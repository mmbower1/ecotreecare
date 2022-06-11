import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// actions
import { listTrees } from "../../actions/treeActions";
// components
import Sidebar from "../../components/sidebar/Sidebar";

const Search = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  const treesList = useSelector((state) => state.treesReducer);
  const { trees } = treesList;

  useEffect(() => {
    dispatch(listTrees(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      <Sidebar />
      <Row>
        {trees.map((tree) => (
          <Col
            key={tree._id}
            sm={12}
            md={4}
            // lg={4}
            // xl={3}
          >
            {/* <Tree tree={tree} /> */}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Search;
