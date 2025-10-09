'use client'
import React from "react";
import { DetailedViewComponent } from "../../components/detailedView";
type PageProps = {
  params: {
    slug: string; // 'slug' matches the name of our dynamic folder [slug]
  };
}
const DetailedView = ({ params }: PageProps) => {
  const slug = params.slug;

  return (
    <>
      <DetailedViewComponent name={slug} />
    </>
  );
};

export default DetailedView;
