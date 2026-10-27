"use client";
import { useRouter } from "next/navigation";
import { Store, Sparkles, ArrowRight, CheckCircle2, Smartphone } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();

  const handleOpenApp = () => {
    window.location.href = "http://localhost:3000"; // Enlace a tu aplicación principal
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-emerald-500 selection:text-black font-sans overflow-x-hidden">
      
      {/* HEADER / NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#121212]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-emerald-500 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-emerald-500/20">
              Y
            </div>
            <span className="text-xl font-extrabold tracking-tight">Yapa</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={handleOpenApp}
              className="px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-extrabold text-sm transition-all shadow-lg shadow-emerald-500/25 active:scale-95 flex items-center gap-2"
            >
              <Smartphone size={16} /> Abrir Web App
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-28 px-6 max-w-5xl mx-auto text-center" id="inicio">
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[140px]" />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles size={14} /> Exclusivo para la comunidad UTP — Lima Sur
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6">
          Compra y vende dentro de tu campus, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">entre clases.</span>
        </h1>

        <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto font-normal mb-10 leading-relaxed">
          Olvídate de coordinar entregas fuera de la universidad. Encuentra snacks, tecnología, apuntes y ropa de compañeros confiables sin salir de la UTP.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={handleOpenApp}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-extrabold text-base transition-all shadow-xl shadow-emerald-500/25 active:scale-95 flex items-center justify-center gap-3"
          >
            <Smartphone size={20} /> Entrar a la App Web <ArrowRight size={18} />
          </button>
          <button 
            onClick={handleOpenApp}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1E1E1E] hover:bg-white/10 border border-white/10 text-white font-bold text-base transition-all active:scale-95"
          >
            Quiero vender mis productos
          </button>
        </div>
        <p className="text-xs text-neutral-500 mt-4">✨ No requiere descargas pesadas. Funciona directo en tu celular y puedes agregarla a tu pantalla de inicio.</p>
      </section>

      {/* FEATURED MOCKUP */}
      <section className="px-6 pb-28 max-w-4xl mx-auto">
        <div className="relative rounded-[32px] border border-white/10 bg-[#1A1A1A] p-3 sm:p-6 shadow-2xl overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#121212] border border-white/5 space-y-3">
              <div className="h-32 rounded-xl bg-neutral-800 flex items-center justify-center text-xs text-neutral-500 font-bold uppercase">Snacks & Chocotejas</div>
              <h3 className="font-bold text-sm">Chocotejas artesanales variadas</h3>
              <p className="text-emerald-400 font-extrabold text-base">S/ 1.00</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#121212] border border-white/5 space-y-3">
              <div className="h-32 rounded-xl bg-neutral-800 flex items-center justify-center text-xs text-neutral-500 font-bold uppercase">Tecnología</div>
              <h3 className="font-bold text-sm">Audífonos Bluetooth TWS</h3>
              <p className="text-emerald-400 font-extrabold text-base">S/ 35.00</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#121212] border border-white/5 space-y-3">
              <div className="h-32 rounded-xl bg-neutral-800 flex items-center justify-center text-xs text-neutral-500 font-bold uppercase">Apuntes & Libros</div>
              <h3 className="font-bold text-sm">Calculadora Científica Casio</h3>
              <p className="text-emerald-400 font-extrabold text-base">S/ 45.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-24 px-6 bg-[#161616] border-y border-white/5" id="funcionamiento">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase mb-3">ASÍ FUNCIONA YAPA</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">Tan rápido como cambiar de salón</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-[#1E1E1E] border border-white/5 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-black text-lg">1</div>
              <h3 className="text-xl font-bold">1. Entra desde tu navegador</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">Abre la app web en tu celular o PC e inicia sesión con tu cuenta institucional de la UTP.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#1E1E1E] border border-white/5 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-black text-lg">2</div>
              <h3 className="text-xl font-bold">2. Publica o encuentra</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">Sube foto, precio y sabores de lo que vendes en menos de 1 minuto, o explora las categorías.</p>
            </div>
            <div className="p-8 rounded-3xl bg-[#1E1E1E] border border-white/5 space-y-4">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-black text-lg">3</div>
              <h3 className="text-xl font-bold">3. Coordinen en el receso</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">Contáctense directamente y hagan la entrega en la puerta del pabellón o cafetería.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="py-24 px-6 max-w-5xl mx-auto" id="beneficios">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-xs font-bold tracking-[0.2em] text-emerald-400 uppercase">VENTA SEGURA ENTRE ESTUDIANTES</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Hecho por universitarios, para universitarios.</h3>
            <p className="text-neutral-400 leading-relaxed">
              Sabemos lo tedioso que es coordinar envíos externos o arriesgarse con desconocidos. Con Yapa, cada usuario pertenece oficialmente al campus de Lima Sur.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-center gap-3 text-sm font-semibold"><CheckCircle2 className="text-emerald-400" size={18} /> Cero costos ocultos ni comisiones por venta</li>
              <li className="flex items-center gap-3 text-sm font-semibold"><CheckCircle2 className="text-emerald-400" size={18} /> Conexión directa mediante WhatsApp</li>
              <li className="flex items-center gap-3 text-sm font-semibold"><CheckCircle2 className="text-emerald-400" size={18} /> Interfaz ultrarrápida y modo oscuro nativo</li>
            </ul>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-600/20 to-teal-900/10 border border-emerald-500/20 flex flex-col justify-center items-center text-center space-y-6">
            <div className="h-20 w-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
              <Store size={36} />
            </div>
            <div>
              <h4 className="text-2xl font-bold">¿Tienes un emprendimiento?</h4>
              <p className="text-sm text-neutral-400 mt-2 max-w-xs">Activa tu cuenta de vendedor en segundos y escala tus ventas en todo el campus.</p>
            </div>
            <button 
              onClick={handleOpenApp}
              className="px-6 py-3 rounded-xl bg-emerald-500 text-neutral-950 font-extrabold text-sm hover:bg-emerald-400 transition"
            >
              Comenzar a vender
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER PROFESIONAL CON NAVEGACIÓN */}
      <footer className="border-t border-white/10 bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-xl bg-emerald-500 flex items-center justify-center text-black font-black text-sm">
                Y
              </div>
              <span className="font-extrabold tracking-tight text-lg">Yapa — Campus Marketplace</span>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              La plataforma independiente creada por estudiantes de Ingeniería para conectar emprendedores y compradores dentro de UTP Lima Sur de forma rápida y segura.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Navegación</h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li><a href="#inicio" className="hover:text-emerald-400 transition">Inicio</a></li>
              <li><a href="#funcionamiento" className="hover:text-emerald-400 transition">Cómo Funciona</a></li>
              <li><a href="#beneficios" className="hover:text-emerald-400 transition">Beneficios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Plataforma</h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li><button onClick={handleOpenApp} className="hover:text-emerald-400 transition text-left">Abrir Web App</button></li>
              <li><button onClick={handleOpenApp} className="hover:text-emerald-400 transition text-left">Panel de Vendedor</button></li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-neutral-500">
          <p>© 2026 Yapa Project. Iniciativa independiente desarrollada por estudiantes universitarios (No oficial de la institución).</p>
          <p className="flex items-center gap-1">Diseñado con 💚 para la comunidad UTP</p>
        </div>
      </footer>

    </div>
  );
}