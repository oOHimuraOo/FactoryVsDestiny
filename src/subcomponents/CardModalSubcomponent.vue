<script setup>
  import { defineProps } from 'vue';
  import * as CE from '../utils/CardEssentials';

  const props = defineProps({
    cardIndex: String
  })

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

  function hasExtraSection() {
    if (CE.CardKeywordsReader(props.cardIndex).length > 0) return true;
    if (CE.CardPowerToghnessReader(props.cardIndex) != 'N/A') return true;
    if (CE.CardDefenseReader(props.cardIndex) != 'N/A') return true;
    if (CE.CardLoyaltyReader(props.cardIndex) != 'N/A') return true;

    return false;
  }

</script>

<template>
  <div class="modal fade" id="cardModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-body p-3">
                    <div class="row g-0">
                        <div class="col-12 col-md-5">
                            <img id="modalImg " :src="CE.CardImageFinder(props.cardIndex)" class="img-fluid w-100" style="object-fit: cover;">
                            <div class="image-frame-decoration"></div>
                            <label class="small d-block text-uppercase text-sky-600 fs-5">Artist // Designer</label>
                            <p class="font-reading mb-0 fs-6" style="color: #cbd5e1;" >{{ CE.CardArtistReader(props.cardIndex) }} // {{ CE.CardDesignerReader(props.cardIndex) }}</p>
                            <div class="image-frame-decoration"></div>
                            <label class="small d-block text-uppercase text-sky-600 fs-5">Card Collection Number</label>
                            <p class="font-reading mb-0 fs-6" style="color: #cbd5e1;" >{{ CE.CardNumberReader(props.cardIndex) }} / 298 CORE</p>
                        </div>
                        <div class="col-12 col-md-7 p-4 d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-start mb-3">
                                <div>
                                    <h2 id="modalName" class="fw-bold text-white mb-0">{{ CE.CardNameReader(props.cardIndex) }}</h2>
                                    <span id="modalType" class="text-primary font-mono small">{{ CE.CardTypeReader(props.cardIndex) }}</span>
                                </div>
                                <div class="d-flex flex-column">
                                  <span id="modalCost" class="mana-cost mb-2">
                                    <img v-for="(symbol, idx) in createManaSymbolsArray(CE.CardCostReader(props.cardIndex))" :src="CE.CardSymbolMounter(symbol)" :key="idx" style="max-width: 25px;" >
                                  </span>
                                  <span id="modalRarity" class="mana-cost text-center" :class="rarityClass(CE.CardRarityReader(props.cardIndex))">{{ CE.CardRarityReader(props.cardIndex) }}</span>
                                </div>
                            </div>
                            <hr class="border-secondary" v-if="hasExtraSection()">
                            <div class="flex-grow-1" v-if="hasExtraSection()">
                                <label class="small mb-2 d-block text-uppercase text-light fs-4" v-if="CE.CardKeywordsReader(props.cardIndex).length > 0">Keywords</label>
                                <img v-for="(keyword, index) in CE.CardKeywordsReader(props.cardIndex)" :src="CE.CardKeywordMounter(keyword.toLowerCase())" :key="index" :alt="keyword" class="mb-2 color-inverter" />
                                <label class="small mb-2 d-block text-uppercase text-light fs-4" v-if="CE.CardPowerToghnessReader(props.cardIndex) != 'N/A'">Power & Toughness</label>
                                <p class="font-reading mb-0 fs-4" style="color: #cbd5e1;" v-if="CE.CardPowerToghnessReader(props.cardIndex) != 'N/A'">{{ CE.CardPowerToghnessReader(props.cardIndex) }}</p>
                                <label class="small mb-2 d-block text-uppercase text-light fs-4" v-if="CE.CardDefenseReader(props.cardIndex) != 'N/A'">Defense</label>
                                <p class="font-reading mb-0 fs-4" style="color: #cbd5e1;" v-if="CE.CardDefenseReader(props.cardIndex) != 'N/A'">{{ CE.CardDefenseReader(props.cardIndex) }}</p>
                                <label class="small mb-2 d-block text-uppercase text-light fs-4" v-if="CE.CardLoyaltyReader(props.cardIndex) != 'N/A'">Loyalty</label>
                                <p class="font-reading mb-0 fs-4" style="color: #cbd5e1;" v-if="CE.CardLoyaltyReader(props.cardIndex) != 'N/A'">{{ CE.CardLoyaltyReader(props.cardIndex) }}</p>
                            </div>
                            <hr class="border-secondary">
                            <div class="flex-grow-1">
                                <label class="small mb-2 d-block text-uppercase text-light fs-4">Habilidades</label>
                                <p class="font-reading" style="color: #cbd5e1;">{{ CE.CardEffectReader(props.cardIndex) }}</p>
                            </div>
                            <hr class="border-secondary">
                            <div class="flex-grow-1">
                                <label class="small mb-2 d-block text-uppercase text-light fs-4">Flavortext</label>
                                <i class="font-reading" style="color: #cbd5e1;">{{ CE.CardFlavorReader(props.cardIndex) }}</i>
                            </div>
                            <div class="mt-4 pt-3 border-top border-secondary d-flex justify-content-end">
                                <button type="button" class="btn btn-sm btn-outline-info font-mono" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
  .color-inverter {
    filter: invert(1);
  }

  /* Adicione estas classes ao seu estilo existente */
.image-frame-decoration {
    position: relative;
    padding-bottom: 20px;
}

.image-frame-decoration::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 15%;
    right: 15%;
    height: 3px;
    background: linear-gradient(90deg,
        transparent 0%,
        rgba(30, 64, 175, 0.8) 25%,
        rgba(30, 64, 175, 0.8) 75%,
        transparent 100%);
    border-radius: 2px;
}

.image-shine-effect {
    position: relative;
    overflow: hidden;
}

.image-shine-effect::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    background: linear-gradient(to top,
        rgba(255, 255, 255, 0.03) 0%,
        transparent 100%);
    pointer-events: none;
}
</style>
