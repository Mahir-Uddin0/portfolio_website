import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css"; 
import Link from 'next/link'
 

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section id="hero" className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img src="/images/profile.jpg" alt="profile" className="w-44 h-44 rounded-full object-cover shadow-lg border-4 border-white" />
        </div>

        <div>
          <h1 className="text-4xl font-bold">Md. Mahir Uddin</h1>
          <p className="mt-2 text-lg text-gray-600">Master's Student (Data Science) • ML & AI Enthusiast</p>
          <p className="mt-4 text-gray-700 max-w-xl">Short 2-line intro, what you do, and what you want.</p>

          <div className="mt-6 flex gap-4">
            <a href="/resume.pdf" className="px-5 py-2 rounded-md bg-indigo-600 text-white">Download Resume</a>
            <Link
              href="/about"
              className="px-5 py-2 rounded-md border text-gray-700 hover:text-indigo-600"
            >
              About
            </Link>

          </div>
        </div>
      </section>
    </main>
  )
}

