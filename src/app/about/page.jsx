import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const getTime = async () => {
  const res = await fetch("http://localhost:3000/time", {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  return data.currentTime;
};

export const metadata = {
  title: "About",
  description: "About page",
  keywords: ["about", "us", "page"],
};

const page = async () => {
  const currentTime = await getTime();
  return (
    <div
      className={` ${dancingScript.className} min-h-96 bg-gray-100 px-12 py-24`}
    >
      <h6 className="text-3xl text-center font-semibold text-red-400">
        About Us
      </h6>
      <h3 className="text-3xl text-red-400 mt-12">
        The current time is: {currentTime}
      </h3>
    </div>
  );
};

export default page;
