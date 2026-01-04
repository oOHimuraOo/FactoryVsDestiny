<script setup>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';
import ContentAreaSubComponent from '@/subcomponents/ContentAreaSubComponent.vue';
import SidebarSubcomponent from '@/subcomponents/SidebarSubcomponent.vue';
import CardModalSubcomponent from '@/subcomponents/CardModalSubcomponent.vue';
import LoreModalSubcomponent from '@/subcomponents/LoreModalSubcomponent.vue';
import releaseData from '@/assets/data/datas.json';


const cardsTotal = 298;
let cardsLauched = ref(0);

let activeView = ref('latest');

let CardModalVisible = ref(true);
let selectedCard = ref('000');
let cardModalInstance = null;

let loreModalVisible = ref(true);
let selectedLore = ref({t: '00', c: 0});
let loreModalInstance = null;

let newCards = ref([]);
let allCards = ref([]);
let newLores = ref([]);
let allLores = ref([]);


function changeView(viewName) {
  activeView.value = viewName;
  console.log(activeView.value);
}

function handleOpenCardModal(cardIndex) {
  selectedCard.value = cardIndex;

  // garante que o modal já foi montado
  const modalEl = document.getElementById('cardModal');
  if (modalEl) {
    if (!cardModalInstance) {
      cardModalInstance = new Modal(modalEl);
    }
    cardModalInstance.show();
  }
}

function handleOpenLoreModal(loreIndex) {
  selectedLore.value = loreIndex;

  const modalEl = document.getElementById('loreModal');
  if (modalEl) {
    if (!loreModalInstance) {
      loreModalInstance = new Modal(modalEl);
    }
    loreModalInstance.show();
  }
}

onMounted(() => {
  const modalEl = document.getElementById('cardModal');
  const loreModalEl = document.getElementById('loreModal');
  if (modalEl) {
    cardModalInstance = new Modal(modalEl);
  }

  if (loreModalEl) {
    loreModalInstance = new Modal(loreModalEl);
  }

  mountNewCards();
  mountAllCards();
  mountNewLores();
  mountAllLores();
});

// Função auxiliar para dividir cartas em grupos de no máximo 6
function splitCardsIntoGroups(cards) {
  let groups = [];
  let i = 0;
  while (i < cards.length) {
    if (cards.length - i === 6) {
      groups.push(cards.slice(i, i + 6));
      i += 6;
    } else if (cards.length - i === 3) {
      groups.push(cards.slice(i, i + 3));
      i += 3;
    } else if (cards.length - i > 6) {
      groups.push(cards.slice(i, i + 6));
      i += 6;
    } else {
      groups.push(cards.slice(i));
      i = cards.length;
    }
  }
  return groups;
}

// Função auxiliar para comparar datas (apenas data, sem hora)
function isDatePassed(releaseDate, today) {
  const release = new Date(releaseDate);
  const todayDate = new Date(today);
  release.setHours(0, 0, 0, 0);
  todayDate.setHours(0, 0, 0, 0);
  return release <= todayDate;
}

function mountNewCards() {
  const today = new Date();
  const passedReleases = releaseData.releaseSchedule.filter(release =>
    isDatePassed(release.date, today)
  );

  if (passedReleases.length === 0) {
    newCards.value = [];
    return;
  }

  // Ordenar por data decrescente (mais recente primeiro)
  passedReleases.sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestRelease = passedReleases[0];

  let cards = latestRelease.cards;

  // Se houver mais de 6 cartas, pega apenas as 6 primeiras
  if (cards.length > 6) {
    cards = cards.slice(0, 6);
  }

  // Dividir em grupos de 3 ou 6
  const groups = splitCardsIntoGroups(cards);
  newCards.value = groups;
}

function mountAllCards() {
  const today = new Date();
  let allCardsArray = [];

  // Coletar todas as cartas já lançadas
  releaseData.releaseSchedule.forEach(release => {
    if (isDatePassed(release.date, today)) {
      allCardsArray.push(...release.cards);
    }
  });

  // Dividir em grupos de no máximo 4 cartas
  const groups = [];
  for (let i = 0; i < allCardsArray.length; i += 4) {
    groups.push(allCardsArray.slice(i, i + 4));
  }
  console.log(groups.length);

  allCards.value = groups;
  cardsLauched.value = allCards.value.flat().length;
}

function mountNewLores() {
  const today = new Date();
  const passedReleases = releaseData.releaseSchedule.filter(release =>
    isDatePassed(release.date, today) && release.loreTopics.length > 0
  );

  if (passedReleases.length === 0) {
    newLores.value = [];
    return;
  }

  let allNewLores = [];

  // Coletar todas as lores de todas as releases passadas
  passedReleases.forEach(release => {
    release.loreTopics.forEach(topic => {
      topic.chapters.forEach(chapter => {
        // Para newLores, sempre marcar como lançado (true)
        allNewLores.push({
          t: topic.topic,
          c: chapter,
          r: true
        });
      });
    });
  });

  newLores.value = allNewLores;
}

function mountAllLores() {
  const today = new Date();
  let allLoresArray = [];

  // Para todas as releases, incluindo as futuras
  releaseData.releaseSchedule.forEach(release => {
    const isReleased = isDatePassed(release.date, today);

    release.loreTopics.forEach(topic => {
      topic.chapters.forEach(chapter => {
        allLoresArray.push({
          t: topic.topic,
          c: chapter,
          r: !isReleased
        });
      });
    });
  });

  allLores.value = allLoresArray;
}
</script>

<template>
  <div id="main-interface" class="h-100">
    <div class="d-flex h-100">
        <!-- SIDEBAR -->
        <SidebarSubcomponent :cards-lauched="cardsLauched" :cards-total="cardsTotal" @-view-change="changeView" :user-name="'β-013'"/>

        <!-- CONTENT AREA -->
        <ContentAreaSubComponent :active-view-name="activeView" :cards-liberated="newCards" :-logs-liberated="newLores" :-all-avaible-cards="allCards" @-open-card-modal="handleOpenCardModal" @-open-lore-modal="handleOpenLoreModal" :-all-avaible-lores="allLores"/>
    </div>
  </div>
  <CardModalSubcomponent id="cardModal" v-if="CardModalVisible" :card-index="selectedCard" />
  <LoreModalSubcomponent id="loreModal" v-if="loreModalVisible" :lore-index="selectedLore" />
</template>
