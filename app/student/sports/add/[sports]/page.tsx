import * as fs from "fs";
import students from "../../../../../db/students.json";
import logins from "../../../../../db/logins.json";
import { redirect } from "next/navigation";

export default function SportsAddPage({ params }: { params: { data: string } }) {
  var data: any = JSON.parse(decodeURIComponent(params.data));
  var sports = data.data[0];

  let studentInfo: any;
  for (var st of students) {
    let sId = (st as any).id;
    if (sId === data.data[1]) {
      studentInfo = st;
    }
  }
        studentInfo.sports = sports[0];
        fs.writeFile(
          "/home/finnbowman/Desktop/projects/fbla/fbla-project-final/FBLA/db/students.json",
          JSON.stringify([...students, studentInfo]),
          (err) => {}
        );
        return (
          <div>
            Sports added!
          </div>
        );
      }