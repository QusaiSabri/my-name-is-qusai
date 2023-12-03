import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen mx-auto text-center pt-32 px-28 flex flex-col md:flex-row justify-center gap-24">
      <section className="mb-6">
        <article className="max-w-[750px] mx-auto mb-6">

        </article>

        <aside>
          <p className="font-semibold">🌟 What to Expect:</p>
          <ul className="list-disc list-inside mb-6 text-left inline-block">
            <li>TL;DRs on the latest coding trends and techniques for full stack developers.</li>
            <li>Resources and tips for fellow developers on .Net, React, Vue & Typescript.</li>
            <li>And much more for the modern web developer!</li>
          </ul>
        </aside>
      </section>
      <header className="">
        <div className="text-3xl mb-6 font-thin">Welcome to my website!</div>
        <h1 className="text-5xl font-bold mb-6 ">My name is Qusai!</h1>
        <p className="text-3xl mb-6">I&apos;m a full stack web developer</p>
        <Image className="rounded-full mb-6 mx-auto" src="https://media.licdn.com/dms/image/D5603AQF0-pv8FN7eeg/profile-displayphoto-shrink_800_800/0/1672940852639?e=1706745600&v=beta&t=a8_IoK5JQVpiAjVCbL8bVMkH3-oHEjUlYetkCFQ5oIo" alt="Qusai Sabri" width="200" height="200" />
        <p className="text-xl max-w-xl">This website is a space where I can share my knowledge, projects, and insights from my journey in the tech world.</p>
      </header>
      <footer>
      </footer>
    </main>
  )
}
