import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { athletes } from "@/lib/database";
import Image from "next/image";
import Link from "next/link";

const Athletes = () => {
  return (
    <main className="my-8 px-4 sm:px-8 lg:px-20">
      <div className="space-y-4">
        <h2 className="text-2xl text-center font-bold">Atletas</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {athletes.map((athlete, index) => {
            return (
              <div
                key={index}
                className="flex flex-col border overflow-hidden rounded-md"
              >
                <div className="aspect-square overflow-hidden relative w-full">
                  <Image
                    src={athlete.image}
                    alt={"teste"}
                    fill
                    className="w-full h-full object-fill"
                  />
                </div>

                <div className="flex flex-col items-center text-center gap-4 p-4 ">
                  <p>{athlete.description}</p>

                  <div className="flex items-center justify-center gap-2 w-full">
                    <p>R$ {athlete.currentValue}</p>

                    <Progress
                      value={(athlete.currentValue / athlete.neededValue) * 100}
                      className="w-[60%] text-green-300"
                    />

                    <p>R$ {athlete.neededValue}</p>
                  </div>

                  <Button
                    size={"lg"}
                    variant={"outline"}
                    asChild
                    className="bg-green-300 hover:bg-green-500"
                  >
                    <Link href={`/doar/${athlete.id}`}>Faça sua doação</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Athletes;
