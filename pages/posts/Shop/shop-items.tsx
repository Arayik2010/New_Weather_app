import { log } from "console";
import Image from "next/image";
import styles from "@/styles/shop.module.css";
import Link from "next/link";

type ShopItems = {
  shopItem: [];
};
type ShopItem = {
  name: string;
  image: string;
  desc: string;
  price: number;
  id: string;
};

export const getStaticProps = async () => {
  const res = await fetch(" http://localhost:5000/items");
  const propData = await res.json();
  return {
    props: { shopItem: propData },
  };
};

export default function ShopItems({ shopItem }: ShopItems) {

  return (
    <div className={styles.shopitems}>
      <div className={styles.itemcontainer}>
        {shopItem?.map((el: ShopItem) => (

          <Link href={`/posts/Shop/${el.id}`} key={el.id}>
            <div className={styles.burgerCard} key={el.id}>
              <div className={styles.imageContainer}>
                <Image src={el.image} width={200}
                  height={200} alt='burger' />
              </div>
              <div className={styles.text}>
                <h3>{el.name}</h3>
                <p>{el.desc}</p>
              </div>
            </div>

          </Link>





        ))}

      </div>

    </div>
  )
}
