import { useParams, useSearchParams } from "react-router";

export default function Product() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const { id } = params;
  const year = searchParams.get("year");
  const location = searchParams.get("location");

  console.log(year, location);

  return <div>Product {id}</div>;
}
