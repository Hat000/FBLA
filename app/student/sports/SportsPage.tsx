"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import students from "../../../db/students.json";
import logins from "../../../db/logins.json";
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export default function SportsPage() {
  const router = useRouter();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const cookies = parseCookies()
  console.log(cookies);


  // let studentInfo: any;
  // for (var st of students) {
  //   let sId = (st as any).id;
  //   if (sId === nookies("")) {
  //     studentInfo = st;
  //   }
  // }

  // for (var lg of logins) {
  //   if (lg[0] === window.localStorage.getItem("studentId")) { 
  //     if (lg[1] === window.localStorage.getItem("loginKey")) {
        return (
          <div className="flex w-screen justify-center">
            <div className="flex-col">
              <span className="flex flex-row">
                <h2>Football</h2>
                <input type="checkbox"
                  onChange={() => setIsChecked1((ch) => !ch)}
                />
              </span>
              <span className="flex flex-row">
                <h2>Soccer</h2>
                <input type="checkbox"
                  onChange={() => setIsChecked2((ch) => !ch)}
                />
              </span>
                <h2>Baseball</h2>
                <input type="checkbox"
                  onChange={() => setIsChecked3((ch) => !ch)}
                />
              <span className="flex flex-row">
                <h2>Basketball</h2>
                <input type="checkbox"
                  onChange={() => setIsChecked4((ch) => !ch)}
                />
              </span>
                <h2>Tennis</h2>
                <input type="checkbox"
                  onChange={() => setIsChecked5((ch) => !ch)}
                />
              <span className="flex flex-row">
                <h2>Cross County/Track</h2>
                <input type="checkbox"
                  onChange={() => setIsChecked6((ch) => !ch)}
                />
              </span>
              <button onClick={() => {
                let sports = [];
                if (isChecked1) {
                  sports.push("Football");
                }
                if (isChecked2) {
                  sports.push("Soccer");
                }
                if (isChecked3) {
                  sports.push("Baseball");
                }
                if (isChecked4) {
                  sports.push("Basketball");
                }
                if (isChecked5) {
                  sports.push("Tennis");
                }
                if (isChecked6) {
                  sports.push("Cross County/Track");
                }

                router.push(`/student/sports/add/${JSON.stringify(sports)}`)
              }}>Save choices</button>
            </div>
          </div>
        );

  router.push("/login/student");
   return <></>;
}