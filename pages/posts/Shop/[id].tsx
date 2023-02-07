import Image from "next/image";
import styles from "@/styles/shop.module.css";

type ShopElemItem = {
  shopItem: ShopElem;
};

type ShopElem = {
  name: string;
  image: string;
  desc: string;
  price: number;
  id: string;
};

export const getStaticPaths = async () => {
  const res = await fetch(" http://localhost:5000/items");
  const propData = await res.json();

  const paths = propData.map((elem: ShopElem) => {
    return {
      params: { id: elem.id },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:5000/items/${id}`);
  const propData = await res.json();
  return {
    props: { shopItem: propData },
  };
};

export default function ShopItem({ shopItem }: ShopElemItem) {
  return (
    <div className={styles.shopitems}>
      <div className={styles.burgerCard}>
        <h1>Our Product</h1>
        <div className={styles.imageContainer}>
          <Image src={shopItem.image} width={200} height={200} alt="burger" />
        </div>
        <div>
          <h3>{shopItem.name}</h3>
          <p>{shopItem.desc}</p>
        </div>
      </div>
    </div>
  );
}
