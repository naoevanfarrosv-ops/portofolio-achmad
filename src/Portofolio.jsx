import React from "react";

// Single-file React portfolio component ready to drop into a Vite/CRA/Next app.
// Styling expects Tailwind CSS to be installed and configured in the project.

export default function Portfolio() {
  // Replace these sample values with your real info and images.
  const profile = {
    name: "Achmad Naoevan Farros",
    title: "Building Modeling Designer",
    location: "Surabaya, Indonesia",
    intro:
      "Lulusan SMK Negeri 3 Surabaya dengan spesialisasi Desain Permodelan dan Informasi Bangunan (DPIB). Menggabungkan pemahaman teknis konstruksi dan kemampuan desain untuk menghadirkan solusi yang rapi, terukur, dan siap bangun. Dan senantiasa berkomitmen untuk terus belajar, beradaptasi dengan tantangan, dan memberikan hasil terbaik dalam setiap proyek yang saya kerjakan.",
    avatar: "/avatar.jpg", // put your avatar at public/avatar.jpg or an external URL
    email: "naoevanfarros.v@gmail.com",
    phone: "+62 858-7615-1937",
    linkedin: "https://www.linkedin.com/in/naoevan-farros-692287271?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    
    website: "#"
  };

  const projects = [
    {
      id: 1,
      title: "Desain 3D Model  - Tender Komplek BNN",
      summary: "Pemodelan siteplan dan 3D, koordinasi clash detection, dan output gambar kerja.",
      thumb: "Proj1.png",
      tags: ["Lumion","Revit","Render"]
    },
    {
      id: 2,
      title: "Render Malam - Rumah Modern",
      summary: "Render realistis malam hari, pengaturan pencahayaan, dan material detail.",
      thumb: "Proj2.jpg",
      tags: ["3D Render","Skethcup","Visualization"]
    },
    {
      id: 3,
      title: "Floorplan",
      summary: "Penyusunan DED,dengan menggunakan sistem BIM.",
      thumb: "Proj3.jpg",
      tags: ["Revit","Shop Drawing","Execution"]
    }
  ];

  const experience = [
    {
      role: "Intern BIM Technician",
      company: "PT. Konstruksi Nusantara (Magang)",
      period: "Feb 2024 — Jul 2024",
      details:
        "Terlibat dalam pemodelan as-built, memberi dukungan koordinasi MEP, dan membantu pembuatan drawing kerja untuk satu klien residensial."
    },
    {
      role: "Freelance BIM & Render",
      company: "Client personal projects",
      period: "2023 — sekarang",
      details:
        "Mengerjakan beberapa proyek konsep rumah tinggal and visualisasi untuk klien lokal."
    }
  ];

  const certificates = [
    { name: "Sertifikat Revit Dasar", issuer: "BNSP / Pelatihan Lokal", year: 2023 },
    { name: "Pelatihan BIM Coordination", issuer: "Kursus XYZ", year: 2024 }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">{profile.name}</h1>
          <p className="text-sm text-gray-600">{profile.title} — {profile.location}</p>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#certificates" className="hover:underline">Certificates</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto p-6 grid gap-8">
        {/* Hero / Profile */}
        <section className="bg-white rounded-2xl shadow-sm p-6 flex gap-6 items-center">
          <img src={profile.avatar} alt="avatar" className="w-28 h-28 rounded-lg object-cover shadow" />
          <div>
            <h2 className="text-xl font-bold">{profile.name}</h2>
            <p className="text-sm text-gray-600 mb-3">{profile.title}</p>
            <p className="text-sm leading-relaxed">Lulusan SMK Negeri 3 Surabaya dengan spesialisasi Desain Permodelan dan Informasi Bangunan (DPIB). Menggabungkan pemahaman teknis konstruksi dan kemampuan desain untuk menghadirkan solusi yang rapi, terukur, dan siap bangun. Dan senantiasa berkomitmen untuk <span className="font-bold">terus belajar</span>, <span className="font-bold">beradaptasi</span> dengan tantangan, dan <span className="font-bold">memberikan hasil terbaik</span> dalam setiap proyek yang saya kerjakan.</p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a href="cv naoevan.pdf" download className="text-sm px-4 py-2 border rounded-lg hover:bg-gray-100">Download CV (PDF)</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 border rounded-lg hover:bg-gray-100">LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-sm px-4 py-2 border rounded-lg hover:bg-gray-100">GitHub</a>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Selected Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <article key={p.id} className="border rounded-lg overflow-hidden bg-gray-50">
                <img className="w-full h-40 object-cover" src={p.thumb} alt={p.title} />
                <div className="p-4">
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{p.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 border rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience & Certificates */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div id="experience" className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Experience</h3>
            <ol className="space-y-4">
              {experience.map((e, i) => (
                <li key={i}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{e.role}</h4>
                      <p className="text-sm text-gray-600">{e.company}</p>
                    </div>
                    <div className="text-xs text-gray-500">{e.period}</div>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">{e.details}</p>
                </li>
              ))}
            </ol>
          </div>

          <div id="certificates" className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Certificates</h3>
            <ul className="space-y-3">
              {certificates.map((c, i) => (
                <li key={i} className="text-sm">
                  <div className="font-medium">{c.name}</div>
                  <div className="text-xs text-gray-600">{c.issuer} — {c.year}</div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Resume / CV quick view */}
        <section className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Resume (Ringkasan)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold">Education</h4>
              <p className="text-sm text-gray-600">SMK Negeri 3 Surabaya — DPIB (Desain Permodelan dan Informasi Bangunan)</p>

              <h4 className="font-semibold mt-4">Skills</h4>
              <ul className="text-sm list-disc ml-5 mt-2">
                <li>Revit / BIM modeling</li>
                <li>Autocad / Shop drawings</li>
                <li>3D visualization (Lumion / Vray)</li>
                <li>Clash detection & coordination</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold">Tools</h4>
              <p className="text-sm">Autodesk Revit, AutoCAD, Navisworks, Lumion, SketchUp, Microsoft Office</p>

              <h4 className="font-semibold mt-4">Languages</h4>
              <p className="text-sm">Bahasa Indonesia (native), English (basic professional)</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-white rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">Email: <a href={`mailto:${profile.email}`} className="underline">{profile.email}</a></p>
          <p className="text-sm">Phone: {profile.phone}</p>

          <form className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input placeholder="Nama" className="p-2 border rounded" />
            <input placeholder="Email" className="p-2 border rounded" />
            <input placeholder="Subject" className="p-2 border rounded sm:col-span-2" />
            <textarea placeholder="Pesan" className="p-2 border rounded sm:col-span-2 h-28" />
            <button type="button" className="sm:col-span-2 py-2 rounded bg-gray-100">Send Message</button>
          </form>
        </section>

        <footer className="text-center text-xs text-gray-500 py-6">© {new Date().getFullYear()} {profile.name} — Portfolio</footer>
      </main>
    </div>
  );
}
