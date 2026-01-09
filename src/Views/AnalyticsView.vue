<script setup>
  import { defineProps, defineEmits } from 'vue';
  import * as CE from '../utils/CardEssentials';

  const emit = defineEmits(['openCardModal']);
  const props = defineProps({
    CardsAvaible: Array
  })

  function openCardModal(cardIndex) {
    emit("OpenCardModal", cardIndex);
  }

  function createManaSymbolsArray(manaCost) {
    return manaCost.split('|')
  }

  function rarityClass(rarity) {
    switch (rarity?.toLowerCase()) {
      case 'common':
        return 'rarity-common';
      case 'uncommon':
        return 'rarity-uncommon';
      case 'rare':
        return 'rarity-rare';
      case 'mythic':
      case 'mythic rare':
        return 'rarity-mythic';
      case 'special':
        return 'rarity-special';
      default:
        return 'rarity-unknown';
    }
  }

</script>

<template>
  <section id="view-analytics" class="view-content">
      <div class="row g-4 mb-4" v-for="(cards, index) in props.CardsAvaible" :key="index">
        <div class="col-12 col-sm-6 col-md-3 mtg-card-container" v-for="(card, idx) in cards" :key="idx">
          <div class="mtg-card" @click="openCardModal(card)">
            <div class="card-art-wrapper">
              <img :src="CE.CardFullImageFinder(card)" class="card-art" :alt="CE.CardNameReader(card)">
              <div class="card-overlay"></div>
            </div>
            <div class="card-content">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <h5 class="fw-bold mb-0 text-white truncate">{{ CE.CardNameReader(card) }}</h5>
                  <h6 class="fw-bold mb-0 text-white truncate">{{ CE.CardTypeReader(card) }}</h6>
                </div>
                <div class="d-flex flex-column justify-content-center align-items-center">
                  <span class="mana-cost w-100 text-center mb-2" :class="rarityClass(CE.CardRarityReader(card))">
                    {{ CE.CardRarityReader(card) }}
                  </span>
                  <span class="mana-cost">
                    <img v-for="(simbolo, i) in createManaSymbolsArray(CE.CardCostReader(card))" :src="CE.CardSymbolMounter(simbolo)" :key="i" style="max-width: 20px;">
                  </span>
                </div>
              </div>
              <p class="text-primary font-mono x-small mb-0 text-uppercase" style="font-size: 0.7rem;"></p>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>
