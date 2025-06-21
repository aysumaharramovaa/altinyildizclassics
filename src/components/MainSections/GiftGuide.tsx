"use client";
import { useRouter } from "next/navigation";

export default function GiftGuide() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/suit");
  };

  return (
    <div className="w-full">
      <img
        src="/giftguide/gift-guide.jpg"
        alt="Gift Guide"
        className="w-full h-auto rounded-lg shadow-md"
        onClick={handleClick}
      />
    </div>
  );
}
