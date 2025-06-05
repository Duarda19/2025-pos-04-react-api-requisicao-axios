"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Página Inicial</h1>
      <Link href="/tarefas" className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"> Ver Tarefas :)</Link>
    </main>
  );
}