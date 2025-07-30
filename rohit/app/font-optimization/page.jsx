import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "900",
  subsets: ["latin"],
  display: "swap",
});
const FontOptimization = () => {
  return (
    <div>
      {/* <h1 style={{ fontFamily: "Poppins" }}>Font optimization techniq</h1> */}
      <h1 className={poppins.className}>Font optimization techniq</h1>
    </div>
  );
};

export default FontOptimization;
