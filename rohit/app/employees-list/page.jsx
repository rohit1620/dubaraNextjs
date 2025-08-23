import Link from "next/link";
import Delete from "../components/Delete";

const getEmployees = async () => {
  let data = await fetch("http://localhost:3000/api/employee");
  data = await data.json();
  return data;
};

const EmployeesList = async () => {
  let datas = await getEmployees();
  return (
    <>
      <h1>Employees list page</h1>
      {datas.map((el, i) => (
        <div key={i}>
          <h3>{el.name}</h3>
          <Delete id={el.empId} />
          <Link href={`/employees-list/${el.empId}/update`}>Edit</Link>
        </div>
      ))}
    </>
  );
};

export default EmployeesList;
