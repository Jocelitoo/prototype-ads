import Image from "next/image";
import qrcode from "../../../../public/qrcode.jpg";
import { athletes } from "@/lib/database";
import { Progress } from "@/components/ui/progress";

interface ProductParamsProps {
  params: Promise<{ id: string }>;
}

const Donation = async ({ params }: ProductParamsProps) => {
  const { id } = await params; // Pegar o id enviado como parâmetro

  const athlete = athletes.find((athlete) => {
    if (athlete.id === id) return athlete;
  });

  return (
    <main className="px-4 sm:px-8 lg:px-20 flex flex-col items-center gap-8 my-8 grow">
      <Image src={qrcode} alt="teste" className="size-60" />
      <p>Código pix: dasdasdasdakjfadksakdaspodkapcmapdsad</p>

      <div className="flex items-center justify-center gap-2 w-full">
        <p>R$ {athlete?.currentValue}</p>

        <Progress
          value={(athlete?.currentValue / athlete?.neededValue) * 100}
          className="w-[50%] text-green-300"
        />

        <p>R$ {athlete?.neededValue}</p>
      </div>
    </main>
  );
};

export default Donation;
