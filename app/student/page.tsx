"use client";
import students from "../../db/students.json";
import logins from "../../db/logins.json";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { destroyCookie, parseCookies } from "nookies";

function StudentPage({ params }: { params: { id: string }}) {
  const router = useRouter();
  const [sport, setSport] = useState("");
  const [club, setClub] = useState("");
  console.log(parseCookies().studentId);
  console.log(parseCookies().loginKey);

  let studentInfo: any;
  for (var st of students) {
    let sId = (st as any).id;
    if (sId === parseCookies().studentId) {
      studentInfo = st;
    }
  }

  for (var lg of logins) {
    if (lg[0] === parseCookies().studentId) { 
      if (lg[1] === parseCookies().loginKey) {
        return (
        <div className="grid h-screen justify-center">
          <h1>{studentInfo?.lName}, {studentInfo?.fName}</h1>
          <h1>Grade: {studentInfo?.grade}</h1>
          <h1>Points: {studentInfo?.points}</h1>
          <h2>Sports:</h2>
          <Link href={"/student/sports"}>Add sports</Link>
          {studentInfo?.sports.map((sport: string) => {
            <span><h2>{sport}</h2></span>
          })}
          <h2>Clubs:</h2>
          {studentInfo?.clubs.map((club: string) => {
            <span><h2>{club}</h2></span>
          })}
          <button onClick={() => {
            destroyCookie(null, "loginKey");
            destroyCookie(null, 'studentId');
            router.push("/");
          }}>Log Out</button>
        </div>
      );
      }
    }
  }
  
  router.push("/login/student");
  return <></>;
}

export default StudentPage;
