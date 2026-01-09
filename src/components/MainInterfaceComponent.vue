<script setup>
import { ref, onMounted, watch } from 'vue';
import { Modal } from 'bootstrap';
import ContentAreaSubComponent from '@/subcomponents/ContentAreaSubComponent.vue';
import SidebarSubcomponent from '@/subcomponents/SidebarSubcomponent.vue';
import CardModalSubcomponent from '@/subcomponents/CardModalSubcomponent.vue';
import LoreModalSubcomponent from '@/subcomponents/LoreModalSubcomponent.vue';
import releaseData from '@/assets/data/datas.json';


const cardsTotal = 298;
const finalReleaseDate = releaseData.collectionEndDate;
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
let newRelease = ref();


function changeView(viewName) {
  activeView.value = viewName;
}

function calculateNewReleaseIndex() {
  for (let idx = 0; idx < releaseData.releaseSchedule.length; idx++) {
    let el = releaseData.releaseSchedule[idx];
    let now = new Date();
    let targetDate = new Date(el.date);
    if (now < targetDate) {
      newRelease.value = el.date;
      break;
    }
  }
}


function handleOpenCardModal(cardIndex) {
  selectedCard.value = cardIndex;

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

watch(activeView, () => {
  if (activeView.value === 'latest') {
    mountNewCards();
  }
})

onMounted(() => {
  const modalEl = document.getElementById('cardModal');
  const loreModalEl = document.getElementById('loreModal');
  calculateNewReleaseIndex()
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

function isDatePassed(releaseDate, today) {
  const release = new Date(releaseDate);
  const todayDate = new Date(today);
  release.setHours(0, 0, 0, 0);
  todayDate.setHours(0, 0, 0, 0);
  return release <= todayDate;
}

function getNextReleaseDate(currentReleaseDate) {
  const currentDate = new Date(currentReleaseDate);
  for (let i = 0; i < releaseData.releaseSchedule.length - 1; i++) {
    const current = new Date(releaseData.releaseSchedule[i].date);
    const next = new Date(releaseData.releaseSchedule[i + 1].date);

    if (current.getTime() === currentDate.getTime()) {
      return next;
    }
  }
  return null;
}

function createVirtualReleaseDates(startDate, endDate, numGroups) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDiff = end.getTime() - start.getTime();

  const interval = end ? timeDiff / (numGroups + 1) : 7 * 24 * 60 * 60 * 1000;

  const virtualDates = [];
  for (let i = 1; i < numGroups; i++) {
    const virtualDate = new Date(start.getTime() + interval * i);
    virtualDates.push(virtualDate);
  }

  return virtualDates;
}

function getNextVirtualOrRealDate(latestDate, nextDate, CardGroupLength) {
  let today = new Date();
  let VirtualDates = createVirtualReleaseDates(latestDate, nextDate, CardGroupLength);

  let next = nextDate;

  if (VirtualDates.length > 0) {
    for (let i = 0; i < VirtualDates.length; i++) {
      if (today <= VirtualDates[i]) {
        next = VirtualDates[i];
        break;
      }
    }
  }

  return next;
}

function mountNewCards() {
  const today = new Date();
  const passedReleases = releaseData.releaseSchedule.filter(release =>
    isDatePassed(release.date, today)
  );

  if (passedReleases.length === 0) {
    newCards.value = [];
    newRelease.value = releaseData.releaseSchedule[0].date;
    return;
  }

  passedReleases.sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestRelease = passedReleases[0];
  const releaseDate = new Date(latestRelease.date);

  const cardGroups = splitCardsIntoGroups(latestRelease.cards);

  const nextReleaseDate = getNextReleaseDate(latestRelease.date);
  newRelease.value = getNextVirtualOrRealDate(releaseDate, getNextReleaseDate(latestRelease.date), cardGroups.length).toString();

  if (cardGroups.length === 1) {
    if (isDatePassed(releaseDate, today)) {
      newCards.value = cardGroups;
    } else {
      newCards.value = [];
    }
    return;
  }

  const virtualDates = nextReleaseDate
    ? createVirtualReleaseDates(releaseDate, nextReleaseDate, cardGroups.length)
    : createVirtualReleaseDates(releaseDate, null, cardGroups.length);

  const allReleaseDates = [releaseDate, ...virtualDates];

  const visibleGroups = [];

  for (let i = 0; i < cardGroups.length; i++) {
    const groupDate = allReleaseDates[i];

    if (isDatePassed(groupDate, today)) {
      visibleGroups.push(cardGroups[i]);
    }
  }

  if (visibleGroups.length > 0) {
    newCards.value = [visibleGroups[visibleGroups.length - 1]];
  } else {
    newCards.value = [];
  }
}

function mountAllCards() {
  const today = new Date();
  let allCardsArray = [];

  releaseData.releaseSchedule.forEach(release => {
    if (isDatePassed(release.date, today)) {
      allCardsArray.push(...release.cards);
    }
  });

  const groups = [];
  for (let i = 0; i < allCardsArray.length; i += 4) {
    groups.push(allCardsArray.slice(i, i + 4));
  }

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

  passedReleases.forEach(release => {
    release.loreTopics.forEach(topic => {
      topic.chapters.forEach(chapter => {
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
        <SidebarSubcomponent :cards-lauched="cardsLauched" :cards-total="cardsTotal" @-view-change="changeView" :user-name="'β-013'"/>
        <ContentAreaSubComponent :active-view-name="activeView" :cards-liberated="newCards" :-logs-liberated="newLores" :-all-avaible-cards="allCards" @-open-card-modal="handleOpenCardModal" @-open-lore-modal="handleOpenLoreModal" :-all-avaible-lores="allLores" :-release-date="finalReleaseDate" :-next-release="newRelease"/>
    </div>
  </div>
  <CardModalSubcomponent id="cardModal" v-if="CardModalVisible" :card-index="selectedCard" />
  <LoreModalSubcomponent id="loreModal" v-if="loreModalVisible" :lore-index="selectedLore" />
</template>
