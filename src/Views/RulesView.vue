<script setup>
import { ref } from 'vue';

const rules = ref([
  {
    id: 'r1',
    title: 'Setup and Objective',
    summary: 'How to set up the game and the main objective players pursue.',
    details: `Players construct their fabricator arrays and attempt to reach the Destiny score. Each round, players may deploy one card, resolve effects, and update the board state. The objective is to obtain the highest Destiny score by end of the final round.`
  },
  {
    id: 'r2',
    title: 'Turn Structure',
    summary: 'Step-by-step of what happens during a player turn.',
    details: `1) Draw phase: draw one card. 2) Main phase: play cards, activate abilities. 3) Combat/resolution: resolve active conflicts. 4) End phase: cleanup and pass turn.`
  },
  {
    id: 'r3',
    title: 'Resource and Mana',
    summary: 'How resources are generated and spent.',
    details: `Resources are tracked as Energy Points. Each card has a cost indicated on its top-right. Spend Energy to play cards. Unspent Energy does not carry over unless an effect states otherwise.`
  },
  {
    id: 'r4',
    title: 'Keywords and Abilities',
    summary: 'Common keywords used in cards and what they mean.',
    details: `Keywords: Hexproof, Indestructible, Swift. Abilities may chain and resolve in the order declared unless otherwise specified.`
  },
  {
    id: 'r5',
    title: 'Winning the Game',
    summary: 'Conditions that determine victory and tiebreakers.',
    details: `The game ends after the final scheduled round. The player with the highest Destiny score wins. Ties are broken by Fabricator Progress, then by number of cards in deck.`
  }
]);

const openRule = ref(null);
function toggleRule(id) {
  openRule.value = openRule.value === id ? null : id;
}
</script>

<template>
  <section id="view-rules" class="view-content container">
    <div class="row mb-4">
      <div class="col-12">
        <h2 class="fw-bold">Game Rules</h2>
        <p class="text-secondary">A concise and readable presentation of the game's rules. Click an item to expand details.</p>
      </div>
    </div>

    <div class="row gx-3 gy-3">
      <div class="col-12" v-for="rule in rules" :key="rule.id">
        <article class="rule-card p-3">
          <div class="d-flex align-items-start justify-content-between">
            <div class="rule-meta me-3">
              <h4 class="mb-1 fw-bold">{{ rule.title }}</h4>
              <p class="mb-0 text-muted small">{{ rule.summary }}</p>
            </div>
            <div class="ms-auto">
              <button class="btn btn-sm btn-outline-info" @click="toggleRule(rule.id)">
                <span v-if="openRule === rule.id">Hide</span>
                <span v-else>Read</span>
              </button>
            </div>
          </div>

          <div class="rule-details mt-3" v-show="openRule === rule.id">
            <div class="p-3 bg-dark rounded">
              <p class="mb-0" style="white-space: pre-line; line-height:1.6; color: #cbd5e1;">{{ rule.details }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .rule-card {
    border: 1px solid var(--border-tech);
    background: var(--panel-bg);
    box-shadow: 0 6px 18px rgba(0,0,0,0.45);
    border-radius: 6px;
  }

  .rule-card h4 {
    color: var(--primary-neon);
    margin-bottom: 0.25rem;
  }

  .rule-meta p {
    color: #9aa7b8;
  }

  .rule-details .bg-dark {
    border: 1px solid rgba(255,255,255,0.03);
  }

  @media (max-width: 767px) {
    .rule-card {
      padding: 1rem !important;
    }

    .rule-card h4 { font-size: 1.05rem; }
  }
</style>
