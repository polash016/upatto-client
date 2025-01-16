"use client";
import React from "react";

const SingleProduct = ({ params }) => {
  const { id } = params;
  return <div className="min-h-screen">SingleProduct: {id}</div>;
};

export default SingleProduct;
