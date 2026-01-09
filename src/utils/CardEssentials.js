// cardEssentials.js
import cards from '../assets/data/cards.json'
// Numbers
import icon0 from '../assets/icons/0.png';
import icon1 from '../assets/icons/1.png';
import icon2 from '../assets/icons/2.png';
import icon3 from '../assets/icons/3.png';
import icon4 from '../assets/icons/4.png';
import icon5 from '../assets/icons/5.png';
import icon6 from '../assets/icons/6.png';
import icon7 from '../assets/icons/7.png';
import icon8 from '../assets/icons/8.png';
import icon9 from '../assets/icons/9.png';
import icon10 from '../assets/icons/10.png';
import icon11 from '../assets/icons/11.png';
import icon12 from '../assets/icons/12.png';
import icon13 from '../assets/icons/13.png';
import icon14 from '../assets/icons/14.png';
import icon15 from '../assets/icons/15.png';

// Variables
import manaX from '../assets/icons/mana_x.png';
import manaY from '../assets/icons/mana_y.png';
import manaZ from '../assets/icons/mana_z.png';

// Symbols
import manaInf from '../assets/icons/mana_infinite.png';
import manaQ from '../assets/icons/mana_q.png';
import manaT from '../assets/icons/mana_t.png';

// Single Mana
import manaC from '../assets/icons/mana_c.png';
import manaW from '../assets/icons/mana_w.png';
import manaU from '../assets/icons/mana_u.png';
import manaB from '../assets/icons/mana_b.png';
import manaR from '../assets/icons/mana_r.png';
import manaG from '../assets/icons/mana_g.png';
import manaS from '../assets/icons/mana_s.png';

// Double Mana
import mana2W from '../assets/icons/2W.png';
import mana2U from '../assets/icons/2U.png';
import mana2B from '../assets/icons/2B.png';
import mana2R from '../assets/icons/2R.png';
import mana2G from '../assets/icons/2G.png';

import manaCW from '../assets/icons/mana_cw.png';
import manaCU from '../assets/icons/mana_cu.png';
import manaCB from '../assets/icons/mana_cb.png';
import manaCR from '../assets/icons/mana_cr.png';
import manaCG from '../assets/icons/mana_cg.png';

import manaWU from '../assets/icons/mana_wu.png';
import manaWB from '../assets/icons/mana_wb.png';
import manaWR from '../assets/icons/mana_rw.png';
import manaWG from '../assets/icons/mana_gw.png';
import manaUB from '../assets/icons/mana_ub.png';
import manaUR from '../assets/icons/mana_ur.png';
import manaUG from '../assets/icons/mana_gu.png';
import manaBR from '../assets/icons/mana_br.png';
import manaBG from '../assets/icons/mana_bg.png';
import manaRG from '../assets/icons/mana_rg.png';

// Triple Mana
import manaBGW from '../assets/icons/mana_bgw.png';
import manaBRG from '../assets/icons/mana_brg.png';
import manaGUB from '../assets/icons/mana_gub.png';
import manaGWU from '../assets/icons/mana_gwu.png';
import manaRGW from '../assets/icons/mana_rgw.png';
import manaRWU from '../assets/icons/mana_rwu.png';
import manaUBR from '../assets/icons/mana_ubr.png';
import manaURG from '../assets/icons/mana_urg.png';
import manaWBR from '../assets/icons/mana_wbr.png';

// Penta Mana
import manaWUBRG from '../assets/icons/mana_wubrg.png';

// Phyrexian
import manaPhyC from '../assets/icons/mana_phyc.png';
import manaPhyW from '../assets/icons/mana_phyw.png';
import manaPhyU from '../assets/icons/mana_phyu.png';
import manaPhyB from '../assets/icons/mana_phyb.png';
import manaPhyR from '../assets/icons/mana_phyr.png';
import manaPhyG from '../assets/icons/mana_phyg.png';

// Combate
import flyingIcon from '../assets/symbols/flying.png';
import reachIcon from '../assets/symbols/reach.png';
import firstStrikeIcon from '../assets/symbols/first_strike.png';
import doubleStrikeIcon from '../assets/symbols/double_strike.png';
import trampleIcon from '../assets/symbols/trample.png';
import vigilanceIcon from '../assets/symbols/vigilance.png';
import hasteIcon from '../assets/symbols/haste.png';
import menaceIcon from '../assets/symbols/menace.png';
import deathtouchIcon from '../assets/symbols/deathtouch.png';
import lifelinkIcon from '../assets/symbols/lifelink.png';

// Defesa
import hexproofIcon from '../assets/symbols/hexproof.png';
import indestructibleIcon from '../assets/symbols/indestructible.png';


const keywordMap = {
  'flying': flyingIcon,
  'reach': reachIcon,
  'first strike': firstStrikeIcon,
  'double strike': doubleStrikeIcon,
  'trample': trampleIcon,
  'vigilance': vigilanceIcon,
  'haste': hasteIcon,
  'menace': menaceIcon,
  'deathtouch': deathtouchIcon,
  'lifelink': lifelinkIcon,
  'hexproof': hexproofIcon,
  'indestructible': indestructibleIcon,
};

const symbolMap = {
  '0': icon0,
  '1': icon1,
  '2': icon2,
  '3': icon3,
  '4': icon4,
  '5': icon5,
  '6': icon6,
  '7': icon7,
  '8': icon8,
  '9': icon9,
  '10': icon10,
  '11': icon11,
  '12': icon12,
  '13': icon13,
  '14': icon14,
  '15': icon15,
  'X': manaX,
  'Y': manaY,
  'Z': manaZ,
  'INF': manaInf,
  'Q': manaQ,
  'T': manaT,
  'C': manaC,
  'W': manaW,
  'U': manaU,
  'B': manaB,
  'R': manaR,
  'G': manaG,
  'S': manaS,
  '2/W': mana2W,
  '2/U': mana2U,
  '2/B': mana2B,
  '2/R': mana2R,
  '2/G': mana2G,
  'C/W': manaCW,
  'C/U': manaCU,
  'C/B': manaCB,
  'C/R': manaCR,
  'C/G': manaCG,
  'W/U': manaWU,
  'W/B': manaWB,
  'W/R': manaWR,
  'W/G': manaWG,
  'U/B': manaUB,
  'U/R': manaUR,
  'U/G': manaUG,
  'B/R': manaBR,
  'B/G': manaBG,
  'R/G': manaRG,
  'B/G/W': manaBGW,
  'B/R/G': manaBRG,
  'G/U/B': manaGUB,
  'G/W/U': manaGWU,
  'R/G/W': manaRGW,
  'R/W/U': manaRWU,
  'U/B/R': manaUBR,
  'U/R/G': manaURG,
  'W/B/R': manaWBR,
  'W/U/B/R/G': manaWUBRG,
  'PHYC': manaPhyC,
  'PHYW': manaPhyW,
  'PHYU': manaPhyU,
  'PHYB': manaPhyB,
  'PHYR': manaPhyR,
  'PHYG': manaPhyG
};

function getCard(cardIndex) {
  return cards[cardIndex] || null
}

export function CardNameReader(cardIndex) {
  return getCard(cardIndex)?.name || 'Unknown Name'
}

export function CardCostReader(cardIndex) {
  return getCard(cardIndex)?.cost || 'N/A'
}

export function CardSymbolMounter(symbol) {
  return (
    symbolMap[symbol] ||
    'https://placehold.co/175x290/8835a2/ffffff?text=No%20symbol%20Image%20Found'
  )
}

export function CardKeywordMounter(Keyword) {
  return (
    keywordMap[Keyword] || 'https://placehold.co/175x290/8835a2/ffffff?text=No%20symbol%20Image%20Found'
  )
}

export function CardColorDiscover(cardIndex) {
  return getCard(cardIndex)?.color || 'Colorless'
}

export function CardTypeReader(cardIndex) {
  return getCard(cardIndex)?.type || 'Unknown Type'
}

export function CardRarityReader(cardIndex) {
  return getCard(cardIndex)?.rarity || 'Common'
}

export function CardKeywordsReader(cardIndex) {
  return getCard(cardIndex)?.keywords || []
}

export function CardEffectReader(cardIndex) {
  return getCard(cardIndex)?.effect || 'No Effect'
}

export function CardFlavorReader(cardIndex) {
  return getCard(cardIndex)?.flavor || 'No Flavor Text'
}

export function CardPowerToghnessReader(cardIndex) {
  const card = getCard(cardIndex)
  return card?.power && card?.toughness ? `${card.power}/${card.toughness}` : 'N/A'
}

export function CardDefenseReader(cardIndex) {
  return getCard(cardIndex)?.defense || 'N/A'
}

export function CardLoyaltyReader(cardIndex) {
  return getCard(cardIndex)?.loyalty || 'N/A'
}

export function CardArtistReader(cardIndex) {
  return getCard(cardIndex)?.artist || 'Unknown Artist'
}

export function CardDesignerReader(cardIndex) {
  return getCard(cardIndex)?.designer || 'Unknown Designer'
}

export function CardNumberReader(cardIndex) {
  return getCard(cardIndex)?.number || 'N/A'
}

export function CardImageFinder(cardIndex) {
  return (
    getCard(cardIndex)?.image ||
    'https://placehold.co/175x290/3588a2/ffffff?text=No%20Card%20Image%20Found'
  )
}

export function CardFullImageFinder(cardIndex) {
  return (
    getCard(cardIndex)?.fullImage ||
    'https://placehold.co/175x290/35a288/ffffff?text=No%20Image%20Found'
  )
}
