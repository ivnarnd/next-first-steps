import { NavBar } from "../components";

export default function GeneralLayout({children}: {children: React.ReactNode;}) {
  //children lo que hara es traer lo que le subsigue al archivo layout en el directorio
  //en este caso el page de about
  return (
    <>
      <NavBar/>
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola Mundo</span>
        {children}
      </main>
    </>
  );
}