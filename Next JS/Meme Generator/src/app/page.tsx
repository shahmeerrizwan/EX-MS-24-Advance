import Image from "next/image";
import Link from "next/link";
import styles from './Home.module.css';
import Footer from "@/Components/Footer";

export default async function Home() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const data: any = await res.json();
  const product = data.data.memes;

  return (
    <>
    <main className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Meme Generator</h1>
        <p className={styles.headerDescription}>
          Browse through the funniest memes and generate your own!
        </p>
      </div>

      <div className={styles.grid}>
        {product.map((item: any, id: number) => (
          <div key={id} className={styles.memeCard}>
            <Link href={`/detail/${item.id}`}>
                <Image
                  src={item.url}
                  alt={item.name}
                  width={500}
                  height={500}
                  className={styles.memeImage}
                />
                <div className={styles.overlay}>
                  <span>View Details</span>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
      <Footer/>
      </>
  );
}
