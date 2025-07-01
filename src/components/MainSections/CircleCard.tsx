"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
const giftGuideData = [
  { src: "/circlecard/circlecard1.png" },
  { src: "/circlecard/circlecard2.png" },
  { src: "/circlecard/circlecard3.png" },
  { src: "/circlecard/circlecard4.png" },
  { src: "/circlecard/circlecard5.png" },
  { src: "/circlecard/circlecard6.png" },
  { src: "/circlecard/circlecard7.png" },
];

export default function CircleCard() {
   const router = useRouter();
      const handleClick = () => {
      router.push("/suit");
    };
  return (
    <div className="flex flex-wrap flex-col sm:flex-row justify-center items-center gap-4 p-4">
      {giftGuideData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center space-y-1 w-40"
        >
          <div className="relative w-40 h-40">
            <Image
              src={item.src}
              alt={`Hediye Kart ${index + 1}`}
              layout="fill"
              objectFit="contain"
              onClick={handleClick}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
