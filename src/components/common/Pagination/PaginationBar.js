import React, { Component } from "react";
import { Pagination } from "react-bootstrap";

class PaginationBar extends Component {
  render() {
    const pages = []; 
    const  { clicked, count, updatePage } = this.props;
    let clickedNumber = Number(clicked);
    console.log(this.props, "in the pagination", clickedNumber)
    
    for (let i = 1; i < Math.round(count / 8); i++) {
      pages.push(
        <Pagination.Item key={i} onClick={updatePage} active={i=== clickedNumber}>
          {i}
        </Pagination.Item>
      );
    }

    return <Pagination className="pagination" >{pages}</Pagination>; 
  }
}

export default PaginationBar;
