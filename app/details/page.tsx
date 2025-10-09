"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import { DetailedViewComponent } from "../components/detailedView";
const DetailedView = () => {
  const params = useSearchParams();
  const name = params.get("name");

  return (
    <>
      <DetailedViewComponent name={name} />
    </>
  );
};

export default DetailedView;
