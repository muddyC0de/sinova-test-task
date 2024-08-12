import { Container } from "@/shared/components";
import { Card } from "@/shared/components/Card";
import axios from "axios";
import Link from "next/link";

export default async function Home() {
  const { data: dogs } = await axios.get(
    "https://api.thedogapi.com/v1/images/search?limit=10&has_breeds=1",
    {
      headers: {
        "x-api-key":
          "live_L2X759mQRgukeiyBqm85q3hxHOG8fMKRNlNb2nltEPv0MjzqGDdr7e1Wkhn8i7um",
      },
    }
  );

  const { data: cats } = await axios.get(
    "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1",
    {
      headers: {
        "x-api-key":
          "live_9QSdBoRmx3U5ykKjEI09Qm2h8xmuyGCAOCyIZdoqBon7obnaqYweugQ9l0RVrUks",
      },
    }
  );

  const shuffleArray = (array: []) => {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  };
  return (
    <Container>
      <div className="flex flex-wrap gap-8 mt-6">
        {shuffleArray(cats.concat(dogs)).map((item: any, i: number) => (
          <Link
            key={item.id}
            href={
              item.breeds[0].dog_friendly
                ? "/cats/" + item.breeds[0].id
                : "/dogs/" + item.breeds[0].id
            }
          >
            <Card
              isDog={item.breeds[0].dog_friendly ? false : true}
              title={item.breeds[0].name}
              imageUrl={item.url}
            />
          </Link>
        ))}
      </div>
    </Container>
  );
}
