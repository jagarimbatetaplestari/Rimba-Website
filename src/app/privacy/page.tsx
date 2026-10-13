"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Calendar, Lock } from "lucide-react";
import { LEGAL_CONTENT } from "@/lib/legal/legalContent";

export default function PrivacyPolicyPage() {
  const [lang, setLang] = useState<"id" | "en">("id");
  const doc = LEGAL_CONTENT[lang].privacy;

  return (
    <div
      className="min-h-screen w-full bg-[#05140D] text-[#E8F5EE] flex flex-col items-center p-4 sm:p-6 md:p-8 font-sans relative overflow-x-hidden selection:bg-[#187557] selection:text-white"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 0%, rgba(24, 117, 87, 0.28) 0%, rgba(5, 20, 13, 0.95) 75%)",
      }}
    >
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]" />

      <main className="relative z-10 w-full max-w-[720px] flex flex-col gap-6 pt-4 pb-16">
        {/* Top Header Navigation */}
        <div className="flex items-center justify-between w-full">
          <Link
            href="/"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold text-white/90 backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4 stroke-[2]" />
            <span>{lang === "en" ? "Back to Sanctuary" : "Kembali ke Beranda"}</span>
          </Link>

          <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-full border border-white/15 backdrop-blur-md">
            <button
              type="button"
              onClick={() => setLang("id")}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                lang === "id"
                  ? "bg-[#187557] text-white shadow-xs"
                  : "text-white/60 hover:text-white"
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all ${
                lang === "en"
                  ? "bg-[#187557] text-white shadow-xs"
                  : "text-white/60 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Title Header Card */}
        <div className="flex flex-col gap-3 p-6 sm:p-8 rounded-[32px] bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#187557]/20 text-[#34D399] flex items-center justify-center shrink-0 border border-[#187557]/30">
              <Shield className="w-6 h-6 stroke-[2]" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {doc.title}
              </h1>
              <div className="flex items-center gap-2 text-xs text-white/50 mt-1">
                <Calendar className="w-3.5 h-3.5 stroke-[1.8]" />
                <span>
                  {lang === "en" ? "Last updated:" : "Pembaruan terakhir:"}{" "}
                  {doc.lastUpdated}
                </span>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/10 my-2" />

          <p className="text-sm text-emerald-100/90 leading-relaxed font-medium bg-[#187557]/15 p-4 rounded-2xl border border-[#187557]/25">
            {doc.summary}
          </p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-4">
          {doc.sections.map((section) => (
            <div
              key={section.id}
              className="p-5 sm:p-6 rounded-[24px] bg-white/[0.025] border border-white/[0.08] backdrop-blur-lg flex flex-col gap-3"
            >
              <h2 className="text-base font-bold text-[#34D399] flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>{section.title}</span>
              </h2>
              <div className="flex flex-col gap-2.5 text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal">
                {section.content.map((paragraph, idx) => {
                  const bulletMatch = paragraph.match(/^•\s*([^:]+):\s*(.+)$/);
                  if (bulletMatch) {
                    const [, label, text] = bulletMatch;
                    return (
                      <div key={idx} className="flex items-start gap-2.5 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] mt-2 shrink-0" />
                        <p className="leading-relaxed">
                          <strong className="font-semibold text-white">{label}: </strong>
                          <span className="text-white/80">{text}</span>
                        </p>
                      </div>
                    );
                  }
                  if (paragraph.startsWith("• ")) {
                    return (
                      <div key={idx} className="flex items-start gap-2.5 py-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] mt-2 shrink-0" />
                        <p className="leading-relaxed text-white/80">{paragraph.slice(2)}</p>
                      </div>
                    );
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer info & deletion link */}
        <div className="p-6 rounded-[24px] bg-white/[0.02] border border-white/5 text-center text-xs text-white/50 flex flex-col items-center gap-3">
          <p>
            {lang === "en"
              ? "Need to permanently delete your account & saved data?"
              : "Ingin menghapus akun & data suaka Anda secara permanen?"}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/delete-account"
              className="text-rose-400 hover:text-rose-300 font-semibold underline underline-offset-4"
            >
              {lang === "en" ? "Request Account Deletion" : "Permintaan Hapus Akun"}
            </Link>
            <span>·</span>
            <Link
              href="/terms"
              className="text-[#34D399] hover:underline underline-offset-4"
            >
              {lang === "en" ? "Terms of Service" : "Ketentuan Layanan"}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
