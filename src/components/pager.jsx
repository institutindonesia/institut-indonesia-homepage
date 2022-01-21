import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Pager = ({ pageContext }) => {
  // console.log(pageContext);
  const { previousPagePath, nextPagePath } = pageContext;
  return (
    
    <nav className="pager-nav">
      <div className="pager-prev-div">
        {previousPagePath && (
            <Link to={`${previousPagePath}/`} aria-label="previous">
              <FontAwesomeIcon icon="chevron-circle-left"/>
              <h4>halaman sebelumnya </h4>
            </Link>
        )}
      </div>
      <div className="pager-next-div">
        {nextPagePath && (
          <Link to={`${nextPagePath}/`}  aria-label="next">
              <h4>halaman berikutnya</h4> 
              <FontAwesomeIcon icon="chevron-circle-right"/>
              
            </Link>
        )}
      </div>
    </nav>
  );
};

export default Pager;