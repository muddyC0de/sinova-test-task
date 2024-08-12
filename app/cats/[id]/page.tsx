import { Container } from "@/shared/components";
import axios from "axios";

export default async function CatPage({ params }: { params: { id: string } }) {
  const { data } = await axios.get(
    `https://api.thecatapi.com/v1/images/search?limit=10&timestamp=${new Date()}&breed_ids=` +
      params.id,
    {
      headers: {
        "x-api-key":
          "live_9QSdBoRmx3U5ykKjEI09Qm2h8xmuyGCAOCyIZdoqBon7obnaqYweugQ9l0RVrUks",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Expires: "0",
      },
    }
  );
  return (
    <Container className="px-4 md:px-4 lg:px-4">
      <div>
        <h1 className="text-4xl mb-4 font-bold">{data[0].breeds[0].name}</h1>
      </div>
      <p className="text-gray-400">Country: {data[0].breeds[0].origin}</p>
      <p className="text-gray-400">
        Temperament: {data[0].breeds[0].temperament}
      </p>
      <p className="text-gray-400">
        Life span: {data[0].breeds[0].life_span} years
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
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
