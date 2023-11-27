export default function Home() {
  return (
    <main className="h-screen mx-auto text-center pt-32 px-5 bg-gray-900">
      <header>
        <h1 className="text-4xl font-bold mb-6">Welcome to MyNameIsQusai.com!</h1>
        <p className="text-xl mb-8">🚧 My website is under construction, but great things are on the way!</p>
      </header>

      <section className="mb-6">
        <article className="max-w-[750px] mx-auto mb-6">
          <p>Hi, I'm Qusai, a full stack web developer with a passion for coding and innovation. I'm currently working on creating a space where I can share my knowledge, projects, and insights from my journey in the tech world.</p>
        </article>

        <aside>
          <p className="font-semibold">🌟 What to Expect:</p>
          <ul className="list-disc list-inside mb-6 text-left inline-block">
            <li>TL;DRs on the latest coding trends and techniques for full stack developers.</li>
            <li>Showcase of my projects and collaborations.</li>
            <li>Resources and tips for fellow developers on .Net, React, Vue & Typescript.</li>
            <li>And much more for the modern web developer!</li>
          </ul>
        </aside>
      </section>

      <footer>
        {/* Footer content like social media links, contact info, etc., can go here */}
      </footer>
    </main>
  )
}
