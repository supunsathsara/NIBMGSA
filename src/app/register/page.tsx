/* eslint-disable no-console */

'use client';

import { Book, GraduationCap, Hash, Mail, PhoneCall, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '@lib/supabaseClient';

export default function RegisterPage() {
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isUpdated, setIsUpdated] = useState(false);

  const [program, setProgram] = useState('');
  const [programList, setProgramList] = useState<{ value: number; label: string }[]>([]);
  const [batch, setBatch] = useState('');
  const [batchList, setBatchList] = useState<{ value: number; label: string }[]>([]);

  // Fetch program list
  useEffect(() => {
    async function fetchProgramList() {
      const { data, error } = await supabase
        .from('programs')
        .select('id,name')
        .order('id', { ascending: true });
      if (error) {
        setErrorMsg(error.message);
        console.log(error);
        return;
      }
      const newProgramList = data.map((program) => ({
        value: program.id,
        label: program.name
      }));
      setProgramList(newProgramList);
    }
  
    fetchProgramList();
    console.log(programList);
  }, []);

  // Fetch batch list
  useEffect(() => {
    async function fetchBatchList() {
      const { data, error } = await supabase
        .from('batches')
        .select('id,name')
        .eq('program', program)
        .order('id', { ascending: true });
      if (error) {
        setErrorMsg(error.message);
        console.log(error);
        return;
      }
      const newBatchList = data.map((batch) => ({
        value: batch.id,
        label: batch.name
      }));
      setBatchList(newBatchList);
    }
    
    if(program){
      fetchBatchList();
      console.log(batchList);
    } 
  }, [program]);

  // Handle form submit
  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    const mobile = formData.get('mobile') as string;
    const index = formData.get('index') as string;
    const { data, error } = await supabase
      .from('students')
      .insert([
        { email, name, mobile, "index_no":index, batch }
      ]);
    if (error) {
      setErrorMsg(error.message);
      setIsUpdated(false);
      setSuccessMsg('');
      console.log(error);
      return;
    }
    setSuccessMsg('Successfully registered');
    setIsUpdated(true);
    setErrorMsg('');
  }

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center pt-nav-height">
      <h1 className="text-gradient mx-auto mt-2 mb-8 text-5xl md:text-8xl">
        Register
      </h1>
      <div className="flex flex-col gap-4 text-2xl text-white md:w-2/3">
        <div>
          <div className="card bg-primary-black shadow-md flex min-w-[20rem] flex-col items-center justify-center gap-8 rounded-2xl py-8 px-4 sm:min-w-[34rem] sm:px-10">
            <form
              onSubmit={handleFormSubmit}
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
                value={program}
                onChange={(e) => setProgram(e.target.value)}
              >
                <option value="" className="text-sm">Please select Program</option>
            {programList && programList.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
              </select>
              <label htmlFor="batch" className="font-medium text-white">
                <Book className="mr-2 mb-1 inline-block" size={20} />
                Batch:
              </label>
              <select
                className="focus:border-blue-500 border-slate-300 focus:shadow-none w-full rounded-xl border px-1 focus:outline-none"
                id="batch"
                name="batch"
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
              >
                <option value="">Please select Batch</option>
            {batchList
              && batchList.map((Batch) => (
                <option key={Batch.value} value={Batch.value}>
                  {Batch.label}
                </option>
              ))}
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
              { !isUpdated && (
                <button
                type="submit"
                className="justify-self-end rounded-xl border border-white px-4 py-2 text-white transition-colors hover:bg-white hover:text-black"
              >
                Register
              </button>
              )}
              
            </form>
            {errorMsg && (
              <div className="text-red-500 text-md">{errorMsg}</div>
            )}
            {successMsg && (
              <div className="text-green-500 text-md">{successMsg}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
