import { Container } from "@/shared/components";
import axios from "axios";

export default async function DogPage({ params }: { params: { id: string } }) {
  const { data } = await axios.get(
    "https://api.thedogapi.com/v1/images/search?limit=10&breed_ids=" +
      params.id,
    {
      headers: {
        "x-api-key":
          "live_L2X759mQRgukeiyBqm85q3hxHOG8fMKRNlNb2nltEPv0MjzqGDdr7e1Wkhn8i7um",
      },
    }
  );
  return (
    <Container className="px-4 md:px-4 lg:px-4">
      <div>
        <h1 className="text-4xl mb-4 font-bold">{data[0].breeds[0].name}</h1>
      </div>
      <p className="text-gray-400">Bred for: {data[0].breeds[0].bred_for}</p>
      <p className="text-gray-400">
        Temperament: {data[0].breeds[0].temperament}
      </p>
      <p className="text-gray-400">Life span: {data[0].breeds[0].life_span}</p>

      <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-4">
        {data.map((item: any) => (
          <img
            key={item.id}
            src={item.url}
            alt={item.breeds[0].name}
            className="w-full mt-3 rounded-md h-[400px] object-cover"
          />
        ))}
      </div>
    </Container>
  );
}
