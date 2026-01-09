import loreData from '../assets/data/lore.json';

function getLore(loreIndex) {
  return loreData[loreIndex] || null
}

function getChapter(loreIndex, chapterIndex) {
  return getLore(loreIndex)?.Capitulos[chapterIndex] || null;
}

export function LoreTopicNumberReader(topicIndex) {
  return getLore(topicIndex)?.TopicoNumero || null;
}

export function LoreChapterNumberReader(topicIndex, chapterIndex) {
  return getChapter(topicIndex, chapterIndex)?.CapituloNumero || null;
}

export function LoreTopicNameReader(topicIndex) {
  return getLore(topicIndex)?.TopicoNome || null;
}

export function LoreChapterNameReader(topicIndex, chapterIndex) {
  return getChapter(topicIndex, chapterIndex)?.CapituloNome || null;
}

export function LoreTopicCardFinder(topicIndex) {
  return getLore(topicIndex)?.TopicoCard || null;
}

export function LoreChapterCardFinder(topicIndex, chapterIndex) {
  return getChapter(topicIndex, chapterIndex)?.CapituloCard || null;
}

export function LoreTopicSinopseReader(topicIndex) {
  return getLore(topicIndex)?.TopicoSinopse || null;
}

export function LoreChapterSinopseReader(topicIndex, chapterIndex) {
  return getChapter(topicIndex, chapterIndex)?.CapituloSinopse || null;
}

export function LoreChapterText(topicIndex, chapterIndex) {
  return getChapter(topicIndex, chapterIndex)?.CapituloTexto || null;
}

export function LoreTextBeutify(text) {
  if (!text) return '';
  // preciso criar a logica que irá realmente ser implementada aqui. Pore enquanto aqui não tem demais. nem to usando a função ainda.
  return text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export function LoreAuthorReader(topicIndex) {
  return getLore(topicIndex)?.TopicoAutor || null;
}

export function LoreCoAuthorReader(topicIndex) {
  return getLore(topicIndex)?.TopicoCoAutor || null;
}

export function LoreArtistReader(topicIndex) {
  return getLore(topicIndex)?.TopicoArtista || null;
}

export function LoreRevisorReader(topicIndex, chapterIndex) {
  return getChapter(topicIndex, chapterIndex)?.CapituloRevisor || null;
}
