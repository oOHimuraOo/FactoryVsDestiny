// LoreEssentials.js
import loreData from '../assets/data/lore.json';


function getLore(loreIndex) {
  return loreData[loreIndex] || null
}
function getChapter(loreIndex, chapterIndex) {
  return getLore(loreIndex)?.Capitulos[chapterIndex] || null;
}
/**
 * Retorna o número do tópico
 */
export function LoreTopicNumberReader(topicIndex) {
  return getLore(topicIndex)?.TopicoNumero || null;
}

/**
 * Retorna o número do capítulo
 */
export function LoreChapterNumberReader(topicIndex, chapterIndex) {
  return getChapter(topicIndex, chapterIndex)?.CapituloNumero || null;
}

/**
 * Retorna o nome do tópico
 */
export function LoreTopicNameReader(topicIndex) {
  return getLore(topicIndex)?.TopicoNome || null;
}

/**
 * Retorna o nome do capítulo
 */
export function LoreChapterNameReader(topicIndex, chapterIndex) {
  return getChapter(topicIndex, chapterIndex)?.CapituloNome || null;
}

/**
 * Retorna a carta associada ao tópico
 */
export function LoreTopicCardFinder(topicIndex) {
  return getLore(topicIndex)?.TopicoCard || null;
}

/**
 * Retorna a carta associada ao capítulo
 */
export function LoreChapterCardFinder(topicIndex, chapterIndex) {
  return getChapter(topicIndex, chapterIndex)?.CapituloCard || null;
}

/**
 * Retorna a sinopse do tópico
 */
export function LoreTopicSinopseReader(topicIndex) {
  return getLore(topicIndex)?.TopicoSinopse || null;
}

/**
 * Retorna a sinopse do capítulo
 */
export function LoreChapterSinopseReader(topicIndex, chapterIndex) {
  return getChapter(topicIndex, chapterIndex)?.CapituloSinopse || null;
}

/**
 * Retorna o texto completo do capítulo
 */
export function LoreChapterText(topicIndex, chapterIndex) {
  return getChapter(topicIndex, chapterIndex)?.CapituloTexto || null;
}

/**
 * Aplica formatação ao texto da lore
 */
export function LoreTextBeutify(text) {
  if (!text) return '';
  // Exemplo simples: quebra de linha e destaque
  return text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

/**
 * Retorna o autor do tópico
 */
export function LoreAuthorReader(topicIndex) {
  return getLore(topicIndex)?.TopicoAutor || null;
}

/**
 * Retorna o coautor do tópico
 */
export function LoreCoAuthorReader(topicIndex) {
  return getLore(topicIndex)?.TopicoCoAutor || null;
}

/**
 * Retorna o artista do tópico
 */
export function LoreArtistReader(topicIndex) {
  return getLore(topicIndex)?.TopicoArtista || null;
}

/**
 * Retorna o revisor do capítulo
 */
export function LoreRevisorReader(topicIndex, chapterIndex) {
  return getChapter(topicIndex, chapterIndex)?.CapituloRevisor || null;
}
