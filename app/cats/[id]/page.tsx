import { Container } from "@/shared/components";
import axios from "axios";

export default async function CatPage({ params }: { params: { id: string } }) {
  const { data } = await axios.get(
    "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=" +
      params.id,
    {
      headers: {
        "x-api-key":
          "live_9QSdBoRmx3U5ykKjEI09Qm2h8xmuyGCAOCyIZdoqBon7obnaqYweugQ9l0RVrUks",
      },
    }
  );
  return (
    <Container>
      <div>
        <h1 className="text-4xl mb-4 font-bold">{data[0].breeds[0].name}</h1>
      </div>
      <p className="text-gray-400">Country: {data[0].breeds[0].origin}</p>
      <p className="text-gray-400">
        Temperament: {data[0].breeds[0].temperament}
      </p>
      <p className="text-gray-400">Life span: {data[0].breeds[0].life_span}</p>

      <div className="flex flex-wrap gap-3 mt-4">
        {data.map((item: any) => (
          <img
            key={item.id}
            src={item.url}
            alt={item.breeds[0].name}
            className="w-[400px] rounded-md h-[400px] object-cover"
          />
        ))}
      </div>
    </Container>
  );
}
