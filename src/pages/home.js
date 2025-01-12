export default function HomePage() {
  return `
  <main>
    <div id="hero-section">
    <img id="bg-hero-img" src="./public/images/first-bg.jpg" alt="bg image" />
      <div id="hero-content">
        <h1>Bienvenue sur PixHaven</h1>
        <p>Transformez vos idées en réalité avec nos outils IA !</p>
        <a id="cta-btn" href="/a-propos" data-link>Nous découvrir</a>
      </div>
    </div>
     <br />
      <h2 id="second-title">
        Des solutions numériques sur mesure pour propulser votre entreprise en
        ligne
      </h2>

      <br />

      <div id="btn-container">
        <button id="planify-btn">Plannifier une consultation</button>
      </div>

      <br /><br />

      <h3 id="third-title">PixHaven c'est quoi ?</h3>

      <p id="first-p">
        PixHaven est une plateforme conçue pour aider les entrepreneurs sans
        compétences techniques à créer et gérer leur propre entreprise en ligne.
        <br />
        Grâce à des outils d'intelligence artificielle, PixHaven permet de
        concevoir des sites internet, gérer des chatbots, optimiser le SEO,
        administrer les réseaux sociaux, <br />
        générer des image pour votre site, faire des publicité afin de faire
        connaitre votre entreprise en ligne. <br />
        L'objectif est d'offrir une solution complète qui facilite la création
        de revenus réguliers tout en respectant. <br />
        PixHaven est une ressource pour encourager l'indépendance financière et
        la liberté géographique, tout en fournissant un soutien personnalisé.
      </p>

      <br />

      <h4 id="fourth-title">Nos solutions</h4>

      <br />

      <h5 id="five-title">conception de site web</h5>

      <p id="second-p">
        Votre site web est souvent le premier point de contact avec vos <br />
        clients. Nous concevons des plateformes conviviales qui non seulement
        captent l'attention mais incitent également à l'action, avec un
        <br />développement front-end et back-end optimisées pour tous les
        appareils et besoins.
      </p>
  </main>
  `;
}