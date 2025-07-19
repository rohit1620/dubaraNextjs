import Image from "next/image";
import Img from "/public/next.svg";

const ImageOptimization = () => {
  return (
    <div>
      <h1>This is image optimization component</h1>
      {/* <Image src={Img} alt="next js image" height={100} width={600} /> */}
      {/* <img src={Img.src} alt="src Nextjs"  /> */}
      <Image
        src="https://lh3.googleusercontent.com/gps-cs-s/AC9h4noSgA40UUuUAAhjCymev1lqTrsojF6c4qUHD7-IhHKfMUiwRjYZqws0E6JKKC7djsOXLI21ziOZJGhnWgwkHexKGSxOH3E9WiMgXulI_IwBhrxj2SFnbSFa4MUFNXnDALUgGRbO=s680-w680-h510-rw"
        alt="internet Image"
        width={400}
        height={400}
      />
    </div>
  );
};

export default ImageOptimization;
