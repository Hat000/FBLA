"use client";
import SignInPopup from "../../(misc)/SignInPopup";
import students from "../../../db/students.json";
import type student from "../../(misc)/student";

function StudentPage({ params }: { params: { id: string }}) {
  const userLoggedIn = true;
  let studentInfo: student | undefined;
  for (var student of students) {
    console.log(student.id);
    console.log(params.id);
    console.log(student.id === params.id)
    if (student.id === params.id) {
      studentInfo = student;
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
