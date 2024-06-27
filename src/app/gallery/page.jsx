import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen px-12 py-24">
      <h6 className="text-3xl mb-12">Gallery Page</h6>
      <div className="grid grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]?.map((img) => (
          <Image
            src={`/images/${img}${img === 9 ? ".jpeg" : ".jpg"}`}
            key={img}
            alt="images"
            height={"1080"}
            width={"1920"}
          />
        ))}
      </div>
      {/* <Image src="/images/10.jpg" alt="" height={"1080"} width={"1920"} /> */}
    </div>
  );
};

export default page;
