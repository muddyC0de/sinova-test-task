import { Container } from "@/shared/components";
import { Card } from "@/shared/components/Card";
import { shuffleArray } from "@/shared/lib";
import { getCats, getDogs } from "@/shared/services/breeds";
import Link from "next/link";

export default async function Home() {
  const dogs = await getDogs();

  const cats = await getCats();

  return (
    <Container>
      <div className="grid px-4 md:px-4 lg:px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
