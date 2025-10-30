import { food101Data } from "@/app/data/items-database";
import { DetailedViewLocalDataComponent } from "@/app/components/detailedViewLocalDataComponent";
type PageProps = {
  params: Promise<{ slug: string }>
};
const DetailedView = async ({ params }: PageProps) => {
  const {slug} = await params;
  const foodItemObject = food101Data.find((item) => item.title === slug);

  if(!foodItemObject) {
    throw Error("Food item not found");
  }

  console.log("prem -> ", foodItemObject)

  return (
    <>
      {/* <DetailedViewComponent name={slug}/> */}
      <DetailedViewLocalDataComponent name={slug} data={foodItemObject} />
    </>
  );
};

export default DetailedView;
