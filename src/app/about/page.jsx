import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "About",
  description: "About page",
  keywords: ["about", "us", "page"],
};

const page = async () => {
  return (
    <div
      className={` ${dancingScript.className} min-h-96 bg-gray-100 px-12 py-24`}
    >
      <h6 className="text-3xl text-center font-semibold text-red-400">
        About Us
      </h6>
    </div>
  );
};

export default page;
