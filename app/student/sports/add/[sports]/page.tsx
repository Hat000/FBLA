import * as fs from "fs";
import students from "../../../../../db/students.json";
import logins from "../../../../../db/logins.json";
import { redirect } from "next/navigation";

export default function SportsAddPage({ params }: { params: { sports: string } }) {
  var data: any = JSON.parse(decodeURIComponent(params.sports));
  var sports = data.sports;

  let studentInfo: any;
  for (var st of students) {
    let sId = (st as any).id;
    if (sId === data.id) {
      studentInfo = st;
    }
  }
        studentInfo.sports = sports;
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