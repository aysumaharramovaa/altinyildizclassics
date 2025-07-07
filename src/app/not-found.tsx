import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-500 mb-6">
          Bu bölüm henüz hazır değil veya sayfa mevcut değil. <br />
          Sitenin bu kısmı üzerinde hala çalışıyoruz.  <br />
          Yakında burada harika bir
          şey olacaktır..
        </p>
        <Link
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
