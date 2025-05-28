import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 space-y-8 bg-slate-200 sm:px-8 lg:px-20 ">
      <p className="text-center text-xl font-bold">PatrocinaCampeão</p>

      <nav>
        <ul className="flex gap-4 justify-center">
          <li>
            <Link
              href={"#"}
              className="border border-black py-2 px-4 rounded-md hover:bg-slate-100"
            >
              Instagram
            </Link>
          </li>

          <li>
            <Link
              href={"#"}
              className="border border-black py-2 px-4 rounded-md hover:bg-slate-100"
            >
              Facebook
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
