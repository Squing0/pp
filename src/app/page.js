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
          <h2 class="aboutHeading">About</h2>
          <h3 class="nameHeading">Hi, I'm Lyle Patterson.</h3>
          <p class="personalDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at convallis sem. Sed commodo ultricies maximus. Aliquam consequat in ante sed blandit. 
          Suspendisse eu ipsum in lectus dignissim hendrerit id vitae erat.</p>
        </article>
        <article>
          <h2>Projects</h2>
          <section class="project">
            <h3>Project 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at convallis sem. Sed commodo ultricies maximus. Aliquam consequat in ante sed blandit. </p>
          </section>
          <section class="project">
            <h3>Project 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at convallis sem. Sed commodo ultricies maximus. Aliquam consequat in ante sed blandit. </p>
          </section>
          <section class="project">
            <h3>Project 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at convallis sem. Sed commodo ultricies maximus. Aliquam consequat in ante sed blandit. </p>
          </section>
          <section class="project">
            <h3>Project 4</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at convallis sem. Sed commodo ultricies maximus. Aliquam consequat in ante sed blandit. </p>
          </section>

        </article>
        <footer>
          <section>
            <h2>Contact me</h2>
            <img src="./linkedin-icon-2048x2048-tillvbc0.png"></img>
            <img src="./gmail.png"></img>
            <img src="./github.png"></img>
          </section>
        </footer>
    </main>
  );
}
