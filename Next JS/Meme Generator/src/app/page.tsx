import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const data: any = await res.json();
  const product = data.data.memes;

  return (
    <main className="flex min-h-screen flex-col  items-center justify-between ">
      <div className="text-2xl w-auto my-10   max-w-5xl flex items-center justify-between font-mono  lg:flex">
        <h1>Meme Generator</h1>
      </div>

      <div className="mb-32 grid text-center  lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {product.map((item: any, id: number) => {
          return (
            <>
              <Link href={`/detail/${item.id}`} key={id}>
                <Image
                  src={item.url}
                  alt={item.name}
                  width={100}
                  className="rounded-lg object-cover h-[250px] w-full"
                />
              </Link>
            </>
          );
        })}
      </div>
    </main>
  );
}
