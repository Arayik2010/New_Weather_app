import { log } from "console";
import Image from "next/image";

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

export default function ShopItem({ shopItem }: ShopItems) {
 
  return(
    <div>
        {shopItem?.map((el:ShopItem) =>(
            <div key={el.id}>
                <p>{el.name}</p>
                <div>
                    <Image src={el.image} width={200} height={200} alt='burger'/>
                </div>

            </div>
        ))}
    </div>
  )
}
