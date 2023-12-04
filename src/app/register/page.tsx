/* eslint-disable no-console */

'use client';

import { Book, GraduationCap, Hash, Mail, PhoneCall, User } from 'lucide-react';
import { useState } from 'react';

export default function RegisterPage() {
  const [errorMsg, setErrorMsg] = useState(null);

  const [batch, setBatch] = useState(null);
  const [program, setProgram] = useState(null);
  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center pt-nav-height">
      <h1 className="text-gradient mx-auto mt-2 mb-8 text-5xl md:text-8xl">
        Register
      </h1>
      <div className="flex flex-col gap-4 text-2xl text-white md:w-2/3">
        <div>
          <div className="card bg-primary-black shadow-md flex min-w-[20rem] flex-col items-center justify-center gap-8 rounded-2xl py-8 px-4 sm:min-w-[34rem] sm:px-10">
            <form
              action="#"
              method="post"
              className="column mb-4 grid w-full items-start justify-center gap-4 text-black sm:mb-5 sm:grid-cols-2 sm:gap-4"
            >
              <label htmlFor="email" className="font-medium text-white">
                <Mail className="mr-2 mb-1 inline-block" size={20} />
                Email
              </label>
              <input
                className="focus:border-blue-500 border-slate-300 focus:shadow-none w-full rounded-xl border px-1 focus:outline-none"
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />

              <label htmlFor="name" className="font-medium text-white">
                <User className="mr-2 mb-1 inline-block" size={20} />
                Name:
              </label>
              <input
                type="text"
                className="focus:border-blue-500 border-slate-300 focus:shadow-none w-full rounded-xl border px-1 focus:outline-none"
                id="name"
                name="name"
              />
              <label htmlFor="mobile" className="font-medium text-white">
                <PhoneCall className="mr-2 mb-1 inline-block" size={20} />
                Mobile:
              </label>
              <input
                type="text"
                className="focus:border-blue-500 border-slate-300 focus:shadow-none w-full rounded-xl border px-1 focus:outline-none"
                id="mobile"
                name="mobile"
              />
              <label htmlFor="program" className="font-medium text-white">
                <GraduationCap className="mr-2 mb-1 inline-block" size={20} />
                Program:
              </label>
              <select
                className="focus:border-blue-500 border-slate-300 focus:shadow-none w-full rounded-xl border px-1 focus:outline-none"
                id="program"
                name="program"
                onChange={(e) => setProgram(e.target.value)}
              >
                <option value="btech">B.Tech</option>
                <option value="mtech">M.Tech</option>
                <option value="phd">PhD</option>
              </select>
              <label htmlFor="batch" className="font-medium text-white">
                <Book className="mr-2 mb-1 inline-block" size={20} />
                Batch:
              </label>
              <select
                className="focus:border-blue-500 border-slate-300 focus:shadow-none w-full rounded-xl border px-1 focus:outline-none"
                id="batch"
                name="batch"
                onChange={(e) => setBatch(e.target.value)}
              >
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2020">2020</option>
              </select>
              <label htmlFor="index" className="font-medium text-white">
                <Hash className="mr-2 mb-1 inline-block" size={20} />
                Index Number:
              </label>
              <input
                type="text"
                className="focus:border-blue-500 border-slate-300 focus:shadow-none w-full rounded-xl border px-1 focus:outline-none"
                id="index"
                name="index"
              />
              <button
                type="submit"
                className="justify-self-end rounded-xl border border-white px-4 py-2 text-white transition-colors hover:bg-white hover:text-black"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
