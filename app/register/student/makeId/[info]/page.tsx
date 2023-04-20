//(MASSIVE INFINTE LOOP FOR SOME REASON)
import { use } from "react";
import ids from "../../../../../db/ids.json";
import students from "../../../../../db/students.json";
import * as fs from "fs";
import { redirect } from "next/navigation";

function logId(userInfo: {
  id: string;
  email: string;
  fName: string;
  lName: string;
  password: string;
}): boolean {
  if (ids.includes(userInfo.id as never)) {
    return false;
  }
  fs.writeFile(
    "/workspaces/fbla-project/db/ids.json",
    JSON.stringify([...ids, userInfo.id]),
    (err) => {}
  );
  fs.writeFile(
    "/workspaces/fbla-project/db/students.json",
    JSON.stringify([...students, userInfo]),
    (err) => {}
  );
  return true;
}

export default function makeIdPage({ params }: { params: { info: any } }) {
  let data: any = JSON.parse(decodeURIComponent(params.info));
  let valid = logId(data);
  if (!valid) {
    redirect("/register/student");
  }
  return (
    <div>
      <div className="grid h-screen place-items-center">
        <h1 className="bg-gray-300 p-2 border border-purple-400">
          Your student ID is {data.id};
        </h1>
      </div>
    </div>
  );
}
