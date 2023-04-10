let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.Navbar');
menuIcon.onclick = () => {
  menuIcon. classList.toggle('bx-x') ;
  navbar. classList.toggle('active');
};
let sections = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id +']' ).classList.add('active');
          });
      }
  });
  let header= document.querySelector('header') ;
  header.classList.toggle('sticky',window.scrollY > 100);
  menuIcon.classlist.remove('bx-x');
  navbar.classList.toggle('active');
  };
// scroll reveal
ScrollReveal({ 
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay:200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { 
 origin:'right'});
const typed = new Typed('.multiple-text' , { strings:[ 'Frontend Developer','YouTuber','Blogger'],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true}
);
/*<main class="projects-container">
    <span class="projects-heading">Projects</span>
    <section id="projects" class="all-projects">
      <!--___________ Project 1st card_____________ -->
      <div class="projects-01 project">
        <!-- <img src="./images/projects/Project1.png" alt="" /> -->
        <!-- <div class="project-number"> -->
        <div class="project-number-right">01</div>
        <!-- </div> -->
        <div class="skills-img-text">
          <div class="flex">
            <div class="skills-img">
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/HTML.png" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Javascript.svg" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Express.png" alt="" />
              <img
                class="img"
                src="https://code-help-porfolio-website.netlify.app/images/stack/NextJsCircle.png"
                alt=""
              />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Tailwind.png" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/NodeJs.svg" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/MongoDB.svg" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Typescript.svg" alt="" />
              <img class="img" src=".https://code-help-porfolio-website.netlify.app/images/stack/Bootstrap.svg" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/HTML.png" alt="" />
            </div>
            <div class="car-text">
              <span>Tint & Orange</span>

              <p>
                Its is a car modification copany which provide you sheets to
                protect your car from scratch
              </p>

              <div class="button-container">
                <button class="button">Read More</button>
                <img src="https://code-help-porfolio-website.netlify.app/images/stack/Github.svg" alt="" />
                <img src="https://code-help-porfolio-website.netlify.app/images/stack/Git.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--___________ Project 2nd card_____________ -->
      <div class="project-02 projects-01 project">
        <div class="project-number-right number-left">02</div>

        <div class="skills-img-text">
          <div class="flex flex-move-right">
            <div class="skills-img">
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/HTML.png" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Javascript.svg" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Express.png" alt="" />
              <img
                class="img"
                src="https://code-help-porfolio-website.netlify.app/images/stack/NextJsCircle.png"
                alt=""
              />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Tailwind.png" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/NodeJs.svg" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/MongoDB.svg" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Typescript.svg" alt="" />
              <img class="img" src=".https://code-help-porfolio-website.netlify.app/images/stack/Bootstrap.svg" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/HTML.png" alt="" />
            </div>
            <div class="car-text">
              <span>Tint & Orange</span>

              <p>
                Its is a car modification copany which provide you sheets to
                protect your car from scratch
              </p>

              <div class="button-container">
                <button class="button">Read More</button>
                <img src="https://code-help-porfolio-website.netlify.app/images/stack/Github.svg" alt="" />
                <img src="https://code-help-porfolio-website.netlify.app/images/stack/Git.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--___________ Project 3rd card_____________ -->
      <div class="project-03 projects-01 project">
        <div class="project-number-right">03</div>

        <div class="skills-img-text">
          <div class="flex">
            <div class="skills-img">
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/HTML.png" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Javascript.svg" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Express.png" alt="" />
              <img
                class="img"
                src="https://code-help-porfolio-website.netlify.app/images/stack/NextJsCircle.png"
                alt=""
              />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Tailwind.png" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/NodeJs.svg" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/MongoDB.svg" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Typescript.svg" alt="" />
              <img class="img" src=".https://code-help-porfolio-website.netlify.app/images/stack/Bootstrap.svg" alt="" />
              <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/HTML.png" alt="" />
            </div>
            <div class="car-text">
              <span>Tint & Orange</span>

              <p>
                Its is a car modification copany which provide you sheets to
                protect your car from scratch
              </p>

              <div class="button-container">
                <button class="button">Read More</button>
                <img src="https://code-help-porfolio-website.netlify.app/images/stack/Github.svg" alt="" />
                <img src="https://code-help-porfolio-website.netlify.app/images/stack/Git.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!--___________ Project 4th card_____________ -->
      <div class="project-04 projects-01 project">
        <div class="project-number-right number-left">04</div>

        <div class="flex flex-move-right">
          <div class="skills-img">
            <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Tailwind.png" alt="" />
            <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/NodeJs.svg" alt="" />
            <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/MongoDB.svg" alt="" />
            <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Typescript.svg" alt="" />
            <img class="img" src=".https://code-help-porfolio-website.netlify.app/images/stack/Bootstrap.svg" alt="" />
            <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/HTML.png" alt="" />
            <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Javascript.svg" alt="" />
            <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/Express.png" alt="" />
            <img class="img" src="https://code-help-porfolio-website.netlify.app/images/stack/NextJsCircle.png" alt="" />
          </div>
          <div class="car-text">
            <span>Tint & Orange</span>

            <p>
              Its is a car modification copany which provide you sheets to
              protect your car from scratch
            </p>

            <div class="button-container">
              <button class="button">Read More</button>
              <img src="https://code-help-porfolio-website.netlify.app/images/stack/Github.svg" alt="" />
              <img src="https://code-help-porfolio-website.netlify.app/images/stack/Git.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>

  <div id="skills" class="skills-container">
    <div class="skills-wrapper">
      <div class="skills-text left">
        <p class="skills-heading"><span>M</span>e and MyTech Stack</p>
        <p class="skills-para">
          Hi Everyone My name is Raj Gupta I am a Full Stack Web Developer.
          <br />
          <br />
          Non doloremque aspernatur, maiores voluptatum minus laudantium?
          Perspiciatis accusamus minima porro dolores necessitatibus, magni
          dolorem et qui veniam nulla sequi molestiae maxime. Lorem ipsum
          <br />
          <br />
          dolor sit amet consectetur adipisicing elit. Quis quidem quos
          ullam veritatis voluptates tenetur qui ipsa nulla culpa itaque?
        </p>
      </div>

      <div class="skills-skills-img">
        <img
          class="blob-vector"
          src="https://code-help-porfolio-website.netlify.app/images/userAsset/blob%20vector.png"
          alt=""
        />
        <div class="skills-languages-logo">
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/Bash.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/Bootstrap.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/ChartJs.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/CSS.png"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/Docker.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/Express.png"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/Vercel.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/Typescript.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/Graphql.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/HTML.png"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/Javascript.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/K8s.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/MaterialUI.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/MongoDB.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/Next.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/NextJsCircle.png"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/NodeJs.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/React.png"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/Redux.svg"
            alt=""
          />
          <img
            class="skills-language-logo"
            src="https://code-help-porfolio-website.netlify.app/images/stack/Saas.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div class="faded-text-container">
    <p class="faded-skill-text">skills</p>
  </div>

  <!--________ contact form section ________-->
  <div class="contact-wrapper">
    <div id="contact">
      <div class="contact-heading">
        <h1>Contact Me</h1>
        <p>Questions, Thoughts, Or Just Want To Say Hello?</p>
      </div>

      <div class="contact-input-form">
        <label for="input-name"></label>
        <input id="input-name" type="text" placeholder="Enter your name" />

        <label for="input-email"></label>
        <input
          id="input-email"
          type="text"
          placeholder="Enter your email address"
        />

        <label for="input-subject"></label>
        <input
          id="input-subject"
          type="text"
          placeholder="Enter your subject"
        />

        <label for="message-area"></label>
        <textarea
          name=""
          id="message-area"
          cols="30"
          rows="10"
          placeholder="Enter your message"
        ></textarea>

        <button class="contact-me-button">
          Send Message <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>

  <footer class="footer-section">
    <span class="profile-name">John Doe</span>
    <span class="footer-text">
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact Me</a>
    </span>
    <span class="footer-social-icon">
      <i class="fa-brands fa-linkedin"></i>
      <i class="fa-brands fa-square-github"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-facebook"></i>
    </span>
  </footer>
</div>
*/