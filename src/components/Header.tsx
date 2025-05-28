"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

export const Header = () => {
  return (
    <header className="sticky left-0 right-0 top-0 z-50 bg-slate-200 p-4 flex justify-between items-center sm:px-8 lg:px-20">
      <Link href={"/"}>PatrocinaCampeão</Link>

      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button size={"icon"} variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Navegação</SheetTitle>
          </SheetHeader>

          <div className="grid gap-4 py-4">
            <SheetClose className="border text-start rounded-md hover:bg-green-300">
              <Link href={"/"} className="flex p-2">
                Atletas
              </Link>
            </SheetClose>

            <SheetClose className="border text-start rounded-md hover:bg-green-300">
              <Link href={"/"} className="flex p-2">
                Sou um atleta
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Button
        size={"lg"}
        variant={"outline"}
        asChild
        className="hidden lg:flex"
      >
        <Link href={"/registrar"} className="bg-green-300 hover:bg-green-500">
          Sou um atleta
        </Link>
      </Button>
    </header>
  );
};
