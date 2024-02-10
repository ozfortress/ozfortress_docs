---
summary: docs.ozfortress.com homepage.
---

<link rel="stylesheet" href="/stylesheets/extra.css" />

<style>
.grid-item {
  background-color: var(--md-footer-bg-color);
  border-left: 4px solid var(--md-footer-bg-color);
  padding: 10px 18px 10px 18px;
  text-align: left;
  transition: ease 0.3s;
}

.grid-item:hover {
  border-left: 4px solid var(--md-accent-fg-color);
  transition: ease 0.3s;
}

.grid-item h5 {
  color: var(--md-typeset-color);
  font-size: 16px;
  font-weight: 600;
  transition: ease 0.3s;
}

.grid-item hr {
  background-color: var(--md-typeset-color);
}

.grid-item p {
  color: var(--md-typeset-color);
}

.hero-container h2 {
  text-transform: none;
}

.hero-span {
  margin-top: -20px;
  color: var(--md-default-fg-color--light);
}

@media only screen and (max-width: 1219px) {
  /*.md-sidebar--secondary {
    display: none;
    order: 0;
    width: 0%;
  }

  .md-source-file {
    display: none;
  }*/

  .grid-container {
    display: grid;
    column-gap: 24px;
    row-gap: 24px;
    grid-template-columns: auto;
    background: none;
  }
}

@media only screen and (min-width: 1220px) {
  /*.md-sidebar--primary {
    display: none;
  }
  .md-sidebar--secondary {
    display: none;
    order: 0;
    width: 0%;
  }*/

  .grid-container {
    display: grid;
    column-gap: 24px;
    row-gap: 24px;
    grid-template-columns: auto auto;
    background: none;
  }
}
</style>

<div class="hero-container">
  <h1>ozfortress Docs</h1>
  <div class="hero-span">
    <span>A documentation site for <a href="https://ozfortress.com/">ozfortress</a>, Oceania's Premier Competitive Team Fortress league.</span>
  </div>
  <hr>
</div>

<div class="grid-container">
  <a href="/rules/global">
  <div class="grid-item">
    <h5>Global Ruleset</h5>
    <hr>
    <p>The competitive ruleset at large, used to govern most, if not all ozfortress competitions.</p>
  </div>
  </a>
  <a href="/rules/community_guidelines">
  <div class="grid-item">
    <h5>Community Guidelines</h5>
    <hr>
    <p>Conduct Guidelines that set our expectations for player behaviour within ozfortress.</p>
  </div>
  </a>
  <a href="/rules/infractions">
  <div class="grid-item">
    <h5>Player Behaviour Infractions</h5>
    <hr>
    <p>ozfortress' player behaviour enforcement system, keeping our community safe, accepting and inviting.</p>
  </div>
  <a href="/rules/penalties">
  <div class="grid-item">
    <h5>League Penalties</h5>
    <hr>
    <p>Penalty system used to penalise breaches of competition rulesets via minor/moderate/major penalty tiers.</p>
  </div>
  </a>
  <a href="/faq/landing">
  <div class="grid-item">
    <h5>Frequently Asked Questions</h5>
  </div>
  </a>
  <a href="/support/landing">
  <div class="grid-item">
    <h5>Support & Reporting Hub</h5>
  </div>
  </a>
  <a href="/guides/landing">
  <div class="grid-item">
    <h5>ozfortress Guides</h5>
  </div>
  </a>
</div>