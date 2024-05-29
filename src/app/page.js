// import image from "../app/github.png";

export default function Home() {
  return (
    <main>
      <header>
        <nav>
          <a href="#"><p>About</p></a>
          <a href="#"><p>Projects</p></a>
          <a href="#"><p>Contact</p></a>
        </nav>
      </header>
        <article>
          <h2 className="aboutHeading">About</h2>
          <h3 className="nameHeading">Hi, I'm Lyle Patterson.</h3>
          <p className="personalDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at convallis sem. Sed commodo ultricies maximus. Aliquam consequat in ante sed blandit. 
          Suspendisse eu ipsum in lectus dignissim hendrerit id vitae erat.</p>
        </article>
        <article>
          <h2>Projects</h2>
          <section className="project">
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at convallis sem. Sed commodo ultricies maximus. Aliquam consequat in ante sed blandit. </p>
          </section>
          <section className="project">
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at convallis sem. Sed commodo ultricies maximus. Aliquam consequat in ante sed blandit. </p>
          </section>
          <section className="project">
            <h3>Project 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at convallis sem. Sed commodo ultricies maximus. Aliquam consequat in ante sed blandit. </p>
          </section>
          <section className="project">
            <h3>Project 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at convallis sem. Sed commodo ultricies maximus. Aliquam consequat in ante sed blandit. </p>
          </section>

        </article>
        <footer>
            <h2>Contact me</h2>
            <section className="contactImages">
              <img src="/linkedin-icon-2048x2048-tillvbc0.png" alt=""></img>
              <img src="/gmail.png" alt=""></img>
              <img src="/github.png" alt=""></img>
            </section>
        </footer>
    </main>
  );
}
