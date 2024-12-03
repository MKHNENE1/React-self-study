import { useParams } from "react-router";

export default function Product() {
  const params = useParams();
  const { id } = params;
  console.log(params);

  return <div>Product {id}</div>;
}
