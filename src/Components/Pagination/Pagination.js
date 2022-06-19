import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useInit } from "../../Constants/useInit";
import { useSide } from "../../Constants/useSide";
import { useDispatch } from "react-redux";
import { setPageNumber } from "../../store/slices/sideSlice";

const Pagination = () => {
  const{info} = useInit();
  const{pageNumber} = useSide();
  const dispatch = useDispatch();
  let pageChange = (data) => {
    dispatch(setPageNumber({
     pageNumber: data.selected + 1
    }));
    document.documentElement.scrollTop = 0;
  };

  const [width, setWidth] = useState(window.innerWidth);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  

  return (
    <>
      <style >
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center my-4 gap-3"
        nextLabel="Next"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev"
        previousClassName="btn btn-light fs-5 prev"
        nextClassName="btn btn-light fs-5 next"
        activeClassName="active"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        pageCount={Math.ceil(info?.pages)}
        onPageChange={pageChange}
        pageClassName="page-item"
        pageLinkClassName="page-link"
      />
    </>
  );
};

export default Pagination;