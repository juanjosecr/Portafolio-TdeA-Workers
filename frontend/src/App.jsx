const services = [
  {
    title: 'Landing pages que convierten',
    description:
      'Sitios claros, rapidos y pensados para que un negocio pequeno genere confianza desde la primera visita.',
  },
  {
    title: 'Sistemas a medida',
    description:
      'Herramientas internas para ventas, agenda, inventario o procesos manuales que hoy les quitan tiempo.',
  },
  {
    title: 'Acompaniamiento cercano',
    description:
      'Trabajo directo, lenguaje simple y una solucion ajustada al presupuesto real del cliente.',
  },
]

const highlights = [
  'Equipo de 4 desarrolladores',
  'Enfoque en microempresas y profesionales',
  'Soluciones web accesibles y efectivas',
]

const process = [
  {
    step: '01',
    title: 'Escuchamos el problema',
    description:
      'Antes de proponer tecnologia, aterrizamos la necesidad del negocio y el alcance real del proyecto.',
  },
  {
    step: '02',
    title: 'Diseinamos una solucion simple',
    description:
      'Priorizamos interfaces claras, entregas rapidas y decisiones tecnicas que no compliquen de mas.',
  },
  {
    step: '03',
    title: 'Construimos con foco en resultados',
    description:
      'Cada iteracion busca ahorrar tiempo, ordenar procesos y abrir oportunidades digitales para el cliente.',
  },
]

const metrics = [
  { value: '4', label: 'desarrolladores empujando la misma vision' },
  { value: '100%', label: 'enfoque en software util y entendible' },
  { value: '1', label: 'equipo cercano para acompanar cada entrega' },
]

function App() {
  return (
    <main className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(244,114,34,0.22),_transparent_32%),radial-gradient(circle_at_80%_0%,_rgba(20,184,166,0.20),_transparent_28%),linear-gradient(180deg,_#fff9f3_0%,_#fffdf8_42%,_#fff_100%)] text-stone-900">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[linear-gradient(135deg,_rgba(251,146,60,0.16),_transparent_55%)]" />
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 sm:px-8 lg:px-12">
        <header className="mb-14 flex items-center justify-between rounded-full border border-stone-200/80 bg-white/75 px-5 py-3 shadow-[0_10px_40px_rgba(20,20,20,0.06)] backdrop-blur">
          <div>
            <p className="font-['Trebuchet_MS',_Verdana,_sans-serif] text-lg font-semibold tracking-[0.18em] text-stone-900 uppercase">
              TdeA Workers
            </p>
            <p className="text-sm text-stone-600">
              Software claro para negocios pequenos
            </p>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-stone-600 md:flex">
            <a className="transition hover:text-stone-950" href="#servicios">
              Servicios
            </a>
            <a className="transition hover:text-stone-950" href="#proceso">
              Proceso
            </a>
            <a className="transition hover:text-stone-950" href="#contacto">
              Contacto
            </a>
          </nav>
        </header>

        <section className="grid flex-1 items-center gap-12 pb-14 pt-4 lg:grid-cols-[1.2fr_0.8fr] lg:py-10">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-semibold text-orange-900">
              Software accesible para microempresas y personas
            </p>
            <h1 className="max-w-3xl font-['Georgia',_'Times_New_Roman',_serif] text-5xl leading-tight text-stone-950 sm:text-6xl lg:text-7xl">
              Construimos soluciones web utiles, claras y al alcance de quien
              necesita avanzar hoy.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-650 text-stone-700">
              Somos un equipo de cuatro desarrolladores enfocado en crear
              productos digitales efectivos para negocios pequenos y clientes
              independientes. Menos promesas vacias, mas software que resuelve.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                href="#contacto"
              >
                Hablemos de tu proyecto
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-950"
                href="#servicios"
              >
                Ver servicios
              </a>
            </div>
            <ul className="mt-10 grid gap-3 text-sm text-stone-700 sm:grid-cols-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-stone-200/80 bg-white/70 px-4 py-4 shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-orange-300/35 blur-2xl" />
            <div className="absolute -right-4 bottom-10 h-32 w-32 rounded-full bg-teal-300/35 blur-2xl" />
            <div className="relative rounded-[2rem] border border-stone-200/80 bg-white/80 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.10)] backdrop-blur">
              <div className="rounded-[1.5rem] bg-stone-950 p-6 text-stone-100">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-300">
                  Vision del estudio
                </p>
                <p className="mt-4 font-['Georgia',_'Times_New_Roman',_serif] text-3xl leading-tight">
                  Hacer que el software bien construido deje de sentirse lejano
                  o costoso.
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-300">
                  Queremos que una microempresa o un profesional tambien pueda
                  acceder a herramientas digitales pensadas con criterio,
                  acompanamiento y resultados medibles.
                </p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4"
                  >
                    <p className="text-3xl font-bold text-stone-950">
                      {metric.value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-600">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="servicios"
          className="rounded-[2rem] border border-stone-200/80 bg-white/80 px-6 py-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] backdrop-blur sm:px-8"
        >
          <div className="mb-8 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">
              Servicios iniciales
            </p>
            <h2 className="mt-3 font-['Georgia',_'Times_New_Roman',_serif] text-3xl text-stone-950 sm:text-4xl">
              Una base simple para empezar a presentar lo que hacemos.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-[1.75rem] border border-stone-200 bg-stone-50 p-6 transition hover:-translate-y-1 hover:bg-white"
              >
                <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-200" />
                <h3 className="text-xl font-semibold text-stone-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="proceso"
          className="grid gap-8 px-1 py-16 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-700">
              Como trabajamos
            </p>
            <h2 className="mt-3 font-['Georgia',_'Times_New_Roman',_serif] text-3xl text-stone-950 sm:text-4xl">
              Primer boceto de una experiencia cercana y profesional.
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-700">
              Esta primera interfaz ya marca la personalidad del proyecto:
              cercana, seria y enfocada en resolver problemas concretos con
              tecnologia bien pensada.
            </p>
          </div>

          <div className="grid gap-4">
            {process.map((item) => (
              <article
                key={item.step}
                className="rounded-[1.75rem] border border-stone-200/80 bg-white px-6 py-6 shadow-[0_12px_35px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-4 inline-flex rounded-full bg-stone-950 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-white">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-stone-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contacto"
          className="mb-6 rounded-[2rem] bg-stone-950 px-6 py-10 text-white shadow-[0_20px_70px_rgba(15,23,42,0.18)] sm:px-8"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">
                Siguiente paso
              </p>
              <h2 className="mt-3 font-['Georgia',_'Times_New_Roman',_serif] text-3xl sm:text-4xl">
                Esta ya puede ser la primera cara del estudio mientras seguimos
                sumando secciones reales.
              </h2>
              <p className="mt-4 text-base leading-8 text-stone-300">
                Despues de esta base, lo siguiente es definir nombre final,
                proyectos a mostrar, testimonios y un formulario conectado al
                backend.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-orange-100"
                href="mailto:hola@tdeaworkers.com"
              >
                hola@tdeaworkers.com
              </a>
              <a
                className="inline-flex items-center justify-center rounded-full border border-stone-600 px-6 py-3 text-sm font-semibold text-white transition hover:border-stone-300"
                href="#"
              >
                Ver siguientes ajustes
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
