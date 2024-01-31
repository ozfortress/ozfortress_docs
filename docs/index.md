<link rel="stylesheet" href="/stylesheets/extra.css" />

<style>
.grid-container {
  display: grid;
  column-gap: 24px;
  row-gap: 24px;
  grid-template-columns: auto auto auto;
  background: none;
}
.grid-item {
  background-color: var(--md-footer-bg-color);
  border-left: 4px solid var(--md-footer-bg-color);
  padding: 10px 18px 10px 18px;
  text-align: left;
  transition: ease 0.5s;
}

.grid-item:hover {
  border-left: 4px solid var(--md-accent-fg-color);
  transition: ease 0.3s;
}

.grid-item:hover h5 {
  color: var(--md-accent-fg-color);
  transition: ease 0.3s;
}

.grid-item h5 {
  color: var(--md-primary-bg-color--light);
  font-size: 16px;
  font-weight: 600;
  transition: ease 0.5s;
}

.grid-item hr {
  background-color: var(--md-primary-bg-color--light);
}

.grid-item p {
  color: var(--md-primary-bg-color);
}

.hero-container h2 {
  text-transform: none;
}

.hero-span {
  margin-top: -20px;
  color: var(--md-default-fg-color--light);
}

@media only screen and (min-width: 1220px) {
  .md-sidebar--primary {
    display: none;
  }
  .md-sidebar--secondary {
    display: none;
    order: 0;
    width: 0%;
  }
}

@media only screen and (max-width: 1219px) {
  .md-sidebar--secondary {
    display: none;
    order: 0;
    width: 0%;
  }

  .md-source-file {
    display: none;
  }
}
</style>

<div class="hero-container">
  <h1>ozfortress Docs</h1>
  <div class="hero-span">
    <span>A documentation site for <a href="https://ozfortress.com/">ozfortress</a>, Oceania's Premier Competitive Team Fortress league.</span>
  </div>
  <hr>
  <h2>Are you playing? Why aren't you playing!</h2>
  <p>Want to up your game? Does playing competitively interest you? Sign up to play at our main website <a href="https://ozfortress.com/">ozfortress.com</a>.</p>
  <hr>
</div>

<div class="grid-container">
  <a href="/rules/global">
  <div class="grid-item">
    <h5>Global Ruleset</h5>
    <hr>
    <p>The competitive ruleset at large that governs ozfortress competitions.</p>
  </div>
  </a>
  <a href="/rules/community_guidelines">
  <div class="grid-item">
    <h5>Community Guidelines</h5>
    <hr>
    <p>Player conduct guidelines that set our expectations for behaviour within ozfortress.</p>
  </div>
  </a>
  <a href="/rules/infractions">
  <div class="grid-item">
    <h5>Infractions Ruleset</h5>
    <hr>
    <p>ozfortress' punishment system, used to enforce our rulesets.</p>
  </div>
  </a>
  <a href="/faq/landing">
  <div class="grid-item">
    <h5>ozfortress FAQ</h5>
  </div>
  </a>
  <a href="/support/landing">
  <div class="grid-item">
    <h5>ozfortress Support</h5>
  </div>
  </a>
  <a href="/guides/landing">
  <div class="grid-item">
    <h5>ozfortress Guides</h5>
  </div>
  </a>
</div>