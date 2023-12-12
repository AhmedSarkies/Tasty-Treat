import React, { useState } from "react";

import { Container, Row, Col } from "reactstrap";

import { Helmet, CommonSection, ProductCard, Pagination } from "../components";

import products from "../assets/fake-data/products";

import "../styles/all-foods.css";

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const searchedProducts = products.filter((product) => {
    if (searchTerm === "") return product;
    if (product.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return product;
    }
    return false;
  });

  const productsPerPage = 9;
  const visitedPage = pageNumber * productsPerPage;
  const displayPage = searchedProducts.slice(
    visitedPage,
    visitedPage + productsPerPage
  );
  const pageCount = Math.ceil(searchedProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="All Foods">
      <CommonSection title="All Foods" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="12">
              <div className="search__widget d-flex justify-content-between align-items-center">
                <input
                  type="text"
                  id="search"
                  className="w-100"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <label htmlFor="search" className="ri-search-line"></label>
              </div>
            </Col>
            <Col lg="6" md="12" className="mb-3">
              <div className="sorting__widget text-end">
                <select className="w-50">
                  <option>Default</option>
                  <option value="ascending">Alphabetically, A-Z</option>
                  <option value="descending">Alphabetically, Z-A</option>
                  <option value="high-price">High Price</option>
                  <option value="low-price">Low Price</option>
                </select>
              </div>
            </Col>
            {displayPage?.map((product) => (
              <Col
                lg="4"
                md="6"
                sm="6"
                xs="12"
                key={product.id}
                className="gap-5 g-5"
              >
                <ProductCard product={product} />
              </Col>
            ))}
            <div className="pagination__wrapper">
              <Pagination pageCount={pageCount} changePage={changePage} />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;
