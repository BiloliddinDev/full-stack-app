import { Title } from "@mantine/core";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Full-Stack-App</title>
      </Head>
      <div className="h-screen bg-slate-500">
        <h1 className="text-center pt-[100px] text-white text-[40px] hover:text-gray-400">
          Full-Stack-App
        </h1>
        <div className="flex flex-col justify-center gap-[50px] mt-[150px] px-[500px] text-center">
          <Link href={"/dashbord"}>
            <div className="bg-slate-300  py-[50px] rounded-xl text-[30px] hover:bg-slate-200 cursor-pointer">
              Dashboard
            </div>
          </Link>
          <div className="bg-slate-300 py-[50px] rounded-xl text-[30px] hover:bg-slate-200 cursor-pointer">
            Ecommer Shop market
          </div>
        </div>
      </div>
    </>
  );
}
