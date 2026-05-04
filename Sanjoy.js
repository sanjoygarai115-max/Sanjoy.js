<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sanjoy.js Portfolio</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Courier New", monospace;
    }

    body {
      background: #0f172a;
      color: #e2e8f0;
      line-height: 1.6;
    }

    header {
      padding: 2rem;
      text-align: center;
      border-bottom: 1px solid #1e293b;
    }

    header h1 {
      font-size: 2rem;
      color: #38bdf8;
    }

    header p {
      color: #94a3b8;
    }

    nav {
      display: flex;
      justify-content: center;
      gap: 1rem;
      padding: 1rem;
      flex-wrap: wrap;
      border-bottom: 1px solid #1e293b;
    }

    nav a {
      text-decoration: none;
      color: #38bdf8;
      transition: 0.3s;
    }

    nav a:hover {
      color: #facc15;
    }

    section {
      max-width: 900px;
      margin: 2rem auto;
      padding: 1.5rem;
      background: #020617;
      border-radius: 10px;
      border: 1px solid #1e293b;
    }

    h2 {
      margin-bottom: 1rem;
      color: #38bdf8;
    }

    .code-box {
      background: #020617;
      padding: 1rem;
      border-radius: 8px;
      border: 1px solid #1e293b;
      overflow-x: auto;
      color: #22c55e;
    }

    .skills span {
      display: inline-block;
      background: #1e293b;
      margin: 5px;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 0.9rem;
    }

    .card {
      margin-bottom: 1rem;
      padding: 1rem;
      background: #020617;
      border: 1px solid #1e293b;
      border-radius: 8px;
    }

    .card h3 {
      color: #facc15;
    }

    .contact a {
      display: block;
      margin: 0.5rem 0;
      color: #38bdf8;
      text-decoration: none;
    }

    footer {
      text-align: center;
      padding: 1rem;
      border-top: 1px solid #1e293b;
      margin-top: 2rem;
      color: #64748b;
    }

    @media (max-width: 600px) {
      header h1 {
        font-size: 1.5rem;
      }
    }
  </style>
</head>

<body>

  <header>
    <h1>Sanjoy.js</h1>
    <p>// Product Engineer Portfolio</p>
  </header>

  <nav>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </nav>

  <section id="about">
    <h2>// who am i?</h2>
    <div class="code-box">
<pre>
const himanshu = {
  role: "Product Engineer",
  experience: "12+ years in production",
  stack: ["React", "Next.js", "TypeScript", "AI"],
  shipped: "50+ projects",
  clients: "worldwide",
  motto: "Make it work. Make it clean."
};
</pre>
    </div>
  </section>

  <section id="skills">
    <h2>// stack</h2>
    <div class="skills">
      <span>React</span>
      <span>Next.js</span>
      <span>TypeScript</span>
      <span>AI</span>
      <span>Node.js</span>
    </div>
  </section>

  <section id="experience">
    <h2>// experience</h2>

    <div class="card">
      <h3>Senior Product Engineer</h3>
      <p>Worked on scalable production systems with global clients.</p>
    </div>

    <div class="card">
      <h3>Frontend Engineer</h3>
      <p>Built modern UI using React and Next.js.</p>
    </div>

  </section>

  <section id="projects">
    <h2>// shipped projects</h2>

    <div class="card">
      <h3>Project Alpha</h3>
      <p>High-performance web application.</p>
    </div>

    <div class="card">
      <h3>Project Beta</h3>
      <p>AI-powered product solution.</p>
    </div>

  </section>

  <section id="contact">
    <h2>// ready to build something?</h2>
    <div class="code-box">
<pre>
himanshu.startProject("yours");
</pre>
    </div>

    <div class="contact">
      <a href="#">Email: your@email.com</a>
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
    </div>
  </section>

  <footer>
    <p>© 2026 Sanjoy.js</p>
  </footer>

</body>
</html>
