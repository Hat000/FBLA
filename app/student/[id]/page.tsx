"use client";
import SignInPopup from "../../(misc)/SignInPopup";
import students from "../../../db/students.json";
import type student from "../../(misc)/student";

function StudentPage({ params }: { params: { id: string }}) {
  const userLoggedIn = true;
  let studentInfo: any;
  for (var st of students) {
    let sId = (st as any).id;
    if (sId === params.id) {
      studentInfo = st;
    }
  }
  if (!userLoggedIn) {
    return <SignInPopup />;
  }
  return (<div className="grid h-screen justify-center">
    <h1>{studentInfo?.lName}, {studentInfo?.fName}</h1>
    <h1> points</h1>
    <button> Log Out</button>
  </div>);
}

export default StudentPage;
