import { DetailedViewComponent } from "../../components/detailedView";
type PageProps = {
  params: Promise<{ slug: string }>

};
const DetailedView = async ({ params }: PageProps) => {
  const {slug} = await params;

  return (
    <>
      <DetailedViewComponent name={slug} />
    </>
  );
};

export default DetailedView;
