import React from "react";
import Link from "next/link";

const Employees = () => {
  return (
    <div>
      <Link href="/employees/kishan">Kishan</Link> <br />
      <Link href="/employees/shubham">Shubaham</Link> <br />
      <Link href="/employees/vikash">Vikash</Link> <br />
      <Link href="/employees/rohit">Rohit</Link>
    </div>
  );
};

export default Employees;
