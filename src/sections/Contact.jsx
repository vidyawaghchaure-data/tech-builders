import { ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="glass rounded-3xl p-8 sm:p-12 text-center">

          <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
            <Mail className="text-cyan-300" />
          </div>

          <p className="text-cyan-400 text-xs tracking-[.3em] mt-7">
            07 // ESTABLISH CONNECTION
          </p>

          <h2 className="font-display text-4xl sm:text-5xl font-bold mt-4">
            Have an idea?
          </h2>

          <p className="text-slate-500 max-w-xl mx-auto mt-5 leading-7">
            Let's turn it into something real. Tech Builders is always
            ready for the next mission.
          </p>

          <a
            href="mailto:techbuilders@example.com"
            className="inline-flex items-center gap-2 mt-8 bg-cyan-300 text-slate-950 px-6 py-3.5 rounded-xl font-semibold hover:bg-cyan-200 transition"
          >
            Start a Conversation
            <ArrowRight size={17} />
          </a>

        </div>
      </div>
    </section>
  );
}