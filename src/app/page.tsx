import Image from "next/image";
import banner from "../../public/banner.jpg";
import medalha from "../../public/medalha.jpg";
import medalhista1 from "../../public/medalhista1.jpg";
import medalhista2 from "../../public/medalhista2.jpg";
import medalhista3 from "../../public/medalhista3.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Banknote, Medal, Users } from "lucide-react";
import { athletes } from "@/lib/database";
import { Progress } from "@/components/ui/progress";

const Home = () => {
  return (
    <main className="my-4 px-4 space-y-8 sm:px-8 lg:px-20">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center font-bold text-3xl">
          Faça sua doação e participe da história dos futuros medalhistas do
          nosso país!
        </h1>

        <Image src={banner} alt={"teste"} className="w-10/12" />

        <Button
          size={"lg"}
          variant={"outline"}
          asChild
          className="bg-green-300 hover:bg-green-500"
        >
          <Link href={"/atletas"}>Ver atletas</Link>
        </Button>
      </div>

      <div className="bg-slate-300 p-4 rounded-md grid grid-cols-1 items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex  items-center gap-2 bg-white p-4 rounded-md">
          <Medal size={32} className="bg-slate-400 p-1 rounded-full" />

          <div className="">
            <p className="font-bold text-xl">200+</p>
            <p>atletas medalhistas</p>
          </div>
        </div>

        <div className="flex  items-center gap-2 bg-white p-4 rounded-md">
          <Users size={32} className="bg-slate-400 p-1 rounded-full" />

          <div className="">
            <p className="font-bold text-xl">500+</p>
            <p>atletas beneficiados</p>
          </div>
        </div>

        <div className="flex  items-center gap-2 bg-white p-4 rounded-md">
          <Users size={32} className="bg-slate-400 p-1 rounded-full" />

          <div className="">
            <p className="font-bold text-xl">1000+</p>
            <p>doadores</p>
          </div>
        </div>

        <div className="flex  items-center gap-2 bg-white p-4 rounded-md">
          <Banknote size={32} className="bg-slate-400 p-1 rounded-full" />

          <div className="">
            <p className="font-bold text-xl">R$ 600 mil+</p>
            <p>doações</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 ">
        <h2 className="font-bold text-2xl text-center">Sobre nós</h2>

        <div className="grid lg:grid-cols-2">
          <div>
            <Image
              src={medalha}
              alt={"teste"}
              className="aspect-square w-10/12 mx-auto hidden lg:block"
            />
          </div>

          <div className="flex flex-col gap-4 justify-between">
            <p className="text-center lg:text-start">
              No PatrocinaCampeão, acreditamos que todo atleta talentoso merece
              a chance de brilhar, independentemente das suas condições
              financeiras. Somos uma plataforma colaborativa que conecta pessoas
              dispostas a apoiar com jovens esportistas que precisam de recursos
              para custear equipamentos, viagens, inscrições em competições e
              treinamentos essenciais ao seu desenvolvimento. Nossa missão
              envolve: Impulsionar sonhos, Promover inclusão e Estimular
              solidariedade. Queremos ser a principal referência em apoio a
              talentos esportivos no Brasil, criando uma rede de incentivo que
              alcance centenas de atletas por ano. Através de parcerias com
              clubes, federações e empresas, buscamos ampliar nossas
              ferramentas, oferecendo bolsas de treinamento, mentoria e acesso a
              eventos de visibilidade. Junte-se a nós. Seja você um esportista
              em busca de apoio ou um apaixonado por esporte disposto a
              patrocinar um sonho, o PatrocinaCampeão é o lugar certo para fazer
              a diferença. Conheça nossos atletas, compartilhe suas histórias e
              transforme pequenas doações em grandes conquistas!{" "}
            </p>

            <p className="text-center">
              PatrocinaCampeão – Apoiando talentos,
              <span className="font-semibold"> gerando campeões</span>.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-center text-2xl font-bold">Nossos medalhistas</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-col text-center border rounded-md overflow-hidden">
            <Image src={medalhista1} alt={"teste"} className="w-full" />

            <div className=" space-y-4 p-4 bg-slate-200 grow">
              <h3 className="font-bold">
                Roberto, medalhista na competição de basquete em Minas Gerais
              </h3>

              <p>
                Roberto tem 22 anos, é natural de Belo Horizonte (MG) e atua
                como armador no time universitário de basquete. Em sua última
                temporada, conquistou a medalha de bronze na competição estadual
                de Minas Gerais, graças à sua visão de jogo e espírito de
                equipe. Apesar do talento e da dedicação diária aos treinos,
                enfrentou dificuldades financeiras para custear itens essenciais
                — como tênis de qualidade, uniformes e deslocamentos para jogos
                fora da cidade. Através dos doadores do PatrocinaCampeão,
                Roberto pôde pagar suas despesas e competir, se tornando assim
                mais um campeão.
              </p>
            </div>
          </div>

          <div className="flex flex-col text-center border rounded-md overflow-hidden">
            <Image src={medalhista2} alt={"teste"} className="w-full" />

            <div className="space-y-4 p-4 bg-slate-200 grow">
              <h3 className="font-bold">
                Carlos, medalhista na competição de ciclismo em Santa Catarina
              </h3>

              <p>
                Carlos tem 24 anos, nasceu em Florianópolis (SC) e compete na
                modalidade de ciclismo de estrada. Na última disputa do Circuito
                Catarinense, conquistou a medalha de ouro graças à sua
                resistência nas subidas e à estratégia de fuga em grupo. Apesar
                de seu desempenho de destaque, ao longo da história enfrentou
                barreiras financeiras que comprometeram a manutenção da sua
                bicicleta, a compra de acessórios de segurança e a participação
                em provas fora do estado. Através da doações, pôde se tornar um
                campeão
              </p>
            </div>
          </div>

          <div className="flex flex-col text-center border rounded-md overflow-hidden">
            <Image src={medalhista3} alt={"teste"} className="w-full" />

            <div className="space-y-4 p-4 bg-slate-200 grow">
              <h3 className="font-bold">
                Lucas, medalhista na competição de esgrima em São Paulo
              </h3>

              <p>
                Lucas tem 23 anos, nasceu em São Paulo (SP) e compete na
                modalidade de esgrima no florete. No último Campeonato Paulista
                Universitário, conquistou a medalha de bronze após vitórias
                duras e decisões por diferença mínima de pontos. Apesar da
                técnica apurada e do espírito competitivo, Lucas enfrentou
                restrições financeiras que limitaram o acesso a equipamentos de
                ponta, sessões de coaching especializadas e deslocamentos para
                torneios fora do Estado. Através da doações, pôde se tornar um
                campeão
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl text-center font-bold">Atletas</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {athletes.map((athlete, index) => {
            if (index < 3) {
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
                        value={
                          (athlete.currentValue / athlete.neededValue) * 100
                        }
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
            }
          })}
        </div>
      </div>
    </main>
  );
};

export default Home;
