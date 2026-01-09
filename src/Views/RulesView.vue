<script setup>
import { ref } from 'vue';

const rules = ref([
  {
    id: '1',
    title: 'O destino Chama',
    summary: 'Um estado de jogo que o jogador precisa verificar se atingiu. Semelhante a Benção da cidade.',
    details: `O jogador precis verificar continuamente se ele atingiu as caracteristicas de "Atende o chamado" ou "Recusa o chamado".`,
    SubRule: [
      {
      id: '1.1',
      title: 'Atende o chamado',
      summary: 'O jogador atende o chamado a partir do momento que ele controla 10 ou mais resíduos e não controla nenhuma permanente de Otimização ou Aberrante.',
      details: `Um jogador que atendeu o chamado tem a habilidade: Sacrifique 10 resíduos: crie um Ninho. Você só pode ativar essa habilidade em momentos que você pudesse conjurar um feitiço.`
      },
      {
      id: '1.2',
      title: 'Recusa o chamado',
      summary: 'O jogador recusa o chamado a partir do momento que ele controla 20 ou mais resíduos e não controla nenhuma permanente de Otimização ou Aberrante.',
      details: `Toda vez que um jogador recusa o chamado ele recebe a seguinte habilidade: Ao final da sua fase final, coloque um marcador de degradação em uma permanente que você controla que não possua um marcador de degradação.  Então, sacrifique dois resíduos.`
      },
    ]
  },
  {
    id: '2',
    title: 'o	Marcador de Degradação',
    summary: 'Uma permanente com marcador de degradação não desvira durante a próxima etapa de desvirar de seu controlador.',
    details: `Toda vez que um jogador virar a permanente com marcador de degradação, aquela permanente não será desvirada na proxima etapa de desvirar do seu controlador.`,
    SubRule: [
      {
        id: '2.1',
        title: 'Como Remover',
        summary: 'O controlador da permanente pode remover o marcador de degradação sacrificando uma poluição dele.',
        details: `Durante o seu turno, em qualquer momento que ele pudesse conjurar um feitiço, o jogador pode sacrificar uma poluição para remover o marcador de degradação de uma permanente que ele controla. Ele pode ativar esse efeito uma vez a cada turno para cada maracador de degradação que ele controla.`
      },
      {
        id: '2.2',
        title: 'Quando em terrenos',
        summary: 'Aquele Terreno se torna um deserto em adição a seus outros tipos.',
        details: `Enquanto o marcador de degradação estiver em um terreno, aquele terreno se torna um deserto em adição a seus outros tipos, cores e habilidades.`
      },
      {
        id: '2.3',
        title: 'Quando em não-terrenos',
        summary: 'Aquela permanente se torna um resíduo em adição a seus outros tipos.',
        details: `Enquanto o marcador de degradação estiver em uma permanente não-terreno, aquela permanente se torna um residuo em adição a seus outros tipos, cores e habilidades. Efeitos que contam, afetam ou interagem com residuos tambem interagem com aquela permanente.`
      },
      {
        id: '2.4',
        title: 'Limitador',
        summary: 'Permanentes não podem ter mais de um marcador de resíduo nelas.',
        details: `Permanentes não podem ter mais de um marcador de resíduo nelas. Caso alguma carta fosse acrescentar um marcador de residuo a alguma permanente e aquela permanente já possua marcadores de residuos, o efeito acontece e após a resolução os marcadores excedentes são descartados. Em casos em que um alvo precisa ser selecionado para fazer isso você não poderá selecionar a permanente com degradação como um alvo valido`
      }
    ]
  },
  {
    id: '3',
    title: 'Ficha de Poluição',
    summary: 'Ficha de Poluição sempre se refere a uma ficha especifica, com caracteristicas, tipos e habilidades especificas.',
    details: `sempre que uma carta falar sobre "ficha de poluição" ela se refere a uma ficha de um artefato incolor do tipo Poluição que possui 3 habilidades.`,
    SubRule: [
      {
        id: '3.1',
        title: 'Habilidade 1 da Ficha de Poluição',
        summary: 'no inicio da sua manutenção perca 1 de vida',
        details: `no inicio da manutenção do controlador se a ficha de poluição estiver no campo de batalha, aquele jogador perde 1 de vida.`
      },
      {
        id: '3.2',
        title: 'Habilidade 2 da Ficha de Poluição',
        summary: '1, T, Sacrifique: Descarte uma carta, então Compre uma carta. Ative essa habilidade apenas na sua fase principal anterior a fase de combate.',
        details: `Enquanto for a fase principal anterior a fase de combate do controlador da ficha de poluição, aquele jogador pode pagar 1 mana incolor, virar a ficha de poluição e sacrificar ela para descartar uma carta e então comprar uma carta.`
      },
      {
        id: '3.3',
        title: 'Habilidade 3 da Ficha de Poluição',
        summary: 'Sempre que uma ficha de poluição fosse deixar o campo de batalha cada oponente cria uma ficha de residuo.',
        details: `Qualquer efeito que faria a ficha de poluição deixar o campo de batalha, irá imediatamente fazer com que cada oponente do controlador da ficha de poluição criar uma ficha de residuo. Isso inclui tambem, mas não exclusivamente, efeitos que exilam, sacrificam, retornam para a mão ou para o grimório.`
      }
    ]
  },
  {
    id: '4',
    title: 'Ficha de Residuo',
    summary: 'Ficha de residuo se refere a uma ficha especifica, com caracteristicas, tipos e habilidades especificos.',
    details: `A ficha de residuo é uma ficha de artefato incolor do tipo residuo que possui apenas uma palavra chave.`,
    SubRule: [
      {
        id: '4.1',
        title: 'Escutar o chamado',
        summary: 'Escutar ao chamado, é uma palavra-chave que servirá como lembrete aos jogadores para fazerem eles verificarem se eles já podem atender ou recusar o chamado',
        details: `A palavra-chave "Escutar o chamado" não possui um efeito propriamente dito, ela serve apenas como lembrete para os jogadores verificarem se eles já podem atender ou recusar o chamado.`
      }
    ]
  },
  {
    id: '5',
    title: 'Fabrica',
    summary: 'Fábrica é um tipo de encantamento que funciona como uma Saga.',
    details: `As Fabricas são um subtipo de encantamento que funcionam de maneira similar as sagas, porem com algumas diferenças.`,
    SubRule: [
      {
        id: '5.1',
        title: 'Diferença 1',
        summary: 'Fabricas não são permanentes historicas',
        details: `As fabricas não são permanentes historicas, portanto efeitos que interagem com permanentes historicas não interagem com fabricas.`
      },
      {
        id: '5.2',
        title: 'Diferença 2',
        summary: 'A fábrica só inicia os efeitos de seus capítulos se você tiver pagado o custo de ativação',
        details: `Cada fabrica possui um custo de ativação que deve ser pago. Quando pago coloque um marcador de ativação na fabrica. Somente enquanto esse marcador estiver na fabrica os efeitos dos capitulos irão acontecer.`
      },
      {
        id: '5.3',
        title: 'Diferença 3',
        summary: 'Após o capítulo final você não irá sacrificar a fábrica. Você irá remover seus contadores de capítulos e ativação.',
        details: `Após a resolução do capitulo final da fabrica, ao invés de sacrificar a fabrica, remova todos os marcadores de capitulos e de ativação dela. A fabrica permanece no campo de batalha.`
      },
      {
        id: '5.4',
        title: 'Diferença 4',
        summary: 'Os seus capítulos não serão ativados novamente a não ser que você pague seu custo de ativação novamente',
        details: `Uma fabrica sem marcador de ativação é considerada inativa. Enquanto inativa, os efeitos dos capitulos da fabrica não irão acontecer. Para ativar a fabrica novamente, pague o custo de ativação dela e coloque um marcador de ativação nela.`
      }
    ]
  },
  {
    id: '6',
    title: 'Tecnologia',
    summary: 'Tecnologia é um tipo de encantamento que funciona como um Caso',
    details: `As Tecnologias são um subtipo de encantamento que funcionam de maneira similar aos Casos, porem com algumas diferenças.`,
    SubRule: [
      {
        id: '6.1',
        title: 'Diferença 1',
        summary: 'Cada tecnologia possui um efeito passivo que acontece enquanto a tecnologia estiver ativada.',
        details: `Cada tecnologia possui um efeito passivo que estará ativo enquanto a tecnologia estiver ativada. Esse efeito é descrito na parte superior da carta de tecnologia.`
      },
      {
        id: '6.2',
        title: 'Diferença 2',
        summary: 'Cada tecnologia possui uma habilidade chamada "Para desativar - "',
        details: `As Tecnologias possuem uma habilidade chamada "para desativar - ". Essa habilidade sempre irá descrever o que precisa acontecer para que a sua tecnologia seja desativada. Quando uma tecnologia é desativada, um efeito de desativação irá acontecer. A tecnologia não é considerada ativada.`
      },
      {
        id: '6.3',
        title: 'Diferença 3',
        summary: 'Algumas tecnologias podem possuir uma habilidade chamada "Para ativar - "',
        details: `Algumas tecnologias podem possuir uma habilidade chamada "para ativar - ". Essa habilidade sempre irá descrever o que precisa acontecer para que a sua tecnologia seja ativada. Quando uma tecnologia é ativada, um efeito de ativação irá acontecer. A tecnologia é considerada Ativada.`
      },
      {
        id: '6.4',
        title: 'Diferença 4',
        summary: 'Você só pode conjurar uma tecnologia se você controlar pelo menos uma permanente de Otimização.',
        details: `Para conjurar uma tecnologia você precisa controlar pelo menos uma permanente de Otimização. Se você não controlar nenhuma permanente de Otimização, você não pode conjurar tecnologias.`
      }
    ]
  },
  {
    id: '7',
    title: 'Processar',
    summary: 'Você pode sacrificar residuos para pagar o custo de mana para conjurar essa magica. Cada residuo sacrificado dessa maneira paga por uma mana de qualquer cor.',
    details: `Você pode sacrificar residuos para pagar o custo de mana para conjurar essa magica. Cada residuo sacrificado dessa maneira paga por uma mana de qualquer cor. Permanentes que tiveram pelo menos um residuo sacrificado dessa maneira para pagar seu custo é considerada processada.`,
    SubRule: []
  },
  {
    id: '8',
    title: 'Otimização',
    summary: 'Otimização é um grupo de subtipos de permanentes',
    details: `Otimização é um grupo de subtipos de permanentes. Esses subtipos são: Engenheiro, Drone, Constructo, Artificer e Fabrica`,
    SubRule: []
  },
  {
    id: '9',
    title: 'Eficiencia X',
    summary: 'Você pode conjurar essa magica virando uma permanete de otimização que você controla que não possua um marcador de degradação.',
    details: `Você pode conjurar essa magica virando uma permanente de otimização que você controla que não possua um marcador de degradação nela, e que seu custo de mana convertido seja X ou maior, ao inves de pagar o custo seu custo de mana. se você fizer coloque um marcador de degradação na permanente virada.`,
    SubRule: [
      {
        id: '9.1',
        title: 'Regra de ativação',
        summary: 'Você pode ativar essa habilidade a qualquer momento que você pudesse conjurar uma magica instantanea.',
        details: `Você pode ativar essa habilidade a qualquer momento que você pudesse conjurar uma magica instantanea.`
      }
    ]
  },
  {
    id: '10',
    title: 'Sobrecarga',
    summary: 'Como custo adicional para conjurar essa mágica, você pode adicionar qualquer quantidade de marcadores de degradação em permanentes que você controla. Se você fizer, crie uma cópia dessa mágica para cada marcador de degradação criado dessa forma.',
    details: `Ao conjurar essa magica, como custo adicional você pode adicionar qualquer quantidade de marcadores de degradação em permanentes que você controla que ainda não possuam marcadores de degradação. Se você fizer, crie uma cópia dessa magica para cada marcador de degradação criado dessa forma. Você pode escolher novos alvos para as copias.`,
    SubRule: []
  },
  {
    id: '11',
    title: 'Inspecionar X:',
    summary: 'Quando essa permanente entrar no campo de batalha, você pode inspecionar até X permanentes.',
    details: `Quando essa permanente entrar no campo de batalha, você pode inspecionar até X permanentes. Aquela permanente ganha “Na próxima vez que essa permanente fosse se tornar alvo de uma magica ou habilidade que um oponente controla, ao invés disso anule aquela magica ou habilidade. O controlador daquela magica ou habilidade cria uma ficha de poluição.`,
    SubRule: []
  },
  {
    id: '12',
    title: 'Ficha de componentes',
    summary: 'Ficha de componentes se refere a uma ficha especifica, com caracteristicas, tipos e habilidades especificas.',
    details: `A ficha de componente é uma ficha de artefato incolor do tipo Componente Residuo com uma habilidade.`,
    SubRule: [
      {
        id: '12.1',
        title: 'Habilidade da Ficha de Componente',
        summary: 'T, Sacrifique: Adicione uma mana de qualquer cor.',
        details: `Enquanto a ficha de componente estiver no campo de batalha, seu controlador pode virar ela e sacrifica-la para adicionar uma mana de qualquer cor a sua reserva de mana.`
      }
    ]
  },
  {
    id: '13',
    title: 'Ficha de Nucleo de recurso',
    summary: 'Ficha de nucleo de recurso se refere a uma ficha especifica, com caracteristicas, tipos e habilidades especificas.',
    details: `A ficha de nucleo de recurso é uma ficha de artefato incolor do tipo Residuo com uma habilidade.`,
    SubRule: [
      {
        id: '13.1',
        title: 'Habilidade da Ficha de Nucleo de recurso',
        summary: 'T: Adicione uma mana de qualquer cor.',
        details: `Enquanto a ficha de nucleo de recurso estiver no campo de batalha, seu controlador pode virar ela para adicionar uma mana de qualquer cor a sua reserva de mana.`
      }
    ]
  },
  {
    id: '14',
    title: 'Aberrante',
    summary: 'Aberrante é um grupo de subtipos de permanentes.',
    details: `Aberrante é um grupo de subtipos de permanentes. Esses subtipos são: Inseto, Mutante, Vorme, Bitter, Spitter e Ninho.`,
    SubRule: []
  },
  {
    id: '15',
    title: 'Assimilar',
    summary: 'Quando essa permanente entrar no campo de batalha, você pode sacrificar um residuo que você controla.',
    details: `Quando essa permanente entra no campo de batalha você pode sacrificar um resíduos que você controle. Se fizer isso coloque um marcador +1/+1 nessa criatura. Uma criatura que teve um residuo sacrificado dessa maneira é considerada Assimilada.`,
    SubRule: []
  },
  {
    id: '16',
    title: 'Devorar X',
    summary: 'Quando essa criatura causar dano de combate a uma criatura, se a criatura fosse morrer ao final do combate exile-a ao inves.',
    details: `Quando essa criatura causar dano de combate a uma criatura, se a criatura fosse morrer ao final do combate e seu custo de mana fosse X ou menor, exile-a ao inves. Sua criatura recebe +1/+1 para cada criatura exilada dessa forma por ela.`,
    SubRule: []
  },
  {
    id: '17',
    title: 'Absorver',
    summary: 'Durante qualquer fase de combate você pode sacrificar qualquer quantidade de residuos que você controla.',
    details: `Durante qualquer fase de combate você pode sacrificar qualquer quantidade de residuos que você controla. Se você fizer, essa criatura recebe +1/+1 para cada residuo sacrificado dessa maneira até o final do turno.`,
    SubRule: []
  },
  {
    id: '18',
    title: 'Multiplicar X',
    summary: 'Toda vez que você atacar, você poderá virar X desertos desvirados que você controla.',
    details: `Toda vez que você atacar, você poderá virar X desertos desvirados que você controla. Para cada deserto virado dessa maneira, crie uma ficha que é uma copia desta criatura, ela entra virada e atacando. Você pode escolher novos alvos para os ataques delas. Sacrifique essas criaturas ao final do combate.`,
    SubRule: []
  },
  {
    id: '19',
    title: 'Ficha de ninho',
    summary: 'Ficha de ninho se refere a uma ficha especifica, com caracteristicas, tipos e habilidades especificas.',
    details: `A ficha de ninho é uma ficha de artefato incolor do tipo Ninho com uma habilidade.`,
    SubRule: [
      {
        id: '19.1',
        title: 'Habilidade da Ficha de Ninho',
        summary: 'T, escolha um: Crie uma ficha de bitter, Crie uma ficha de spitter, crie uma ficha de vorme.',
        details: `A qualquer momento, você pode virar o ninho para escolher uma das seguintes opções: Crie uma ficha de bitter, Crie uma ficha de spitter, crie uma ficha de vorme.`
      }
    ]
  },
  {
    id: '20',
    title: 'Ficha de Bitter',
    summary: 'Ficha de bitter se refere a uma ficha especifica, com caracteristicas, tipos e habilidades especificas.',
    details: `A ficha de bitter é uma ficha de criatura verde do tipo Bitter, com força 1 e defesa 1, com duas habilidades.`,
    SubRule: [
      {
        id: '20.1',
        title: 'Habilidade 1 da Ficha de Bitter',
        summary: 'Assimilar',
        details: `A ficha de bitter possui Assimilar.`
      },
      {
        id: '20.2',
        title: 'Habilidade 2 da Ficha de Bitter',
        summary: 'Se essa criatura foi assimilada,',
        details: `Se essa criatura foi assimilada, ela possui "T, sacrifique qualquer quantidade de criaturas aberrantes que somem um ataque total maior ou igual a 4, crie uma ficha de ninho."`
      }
    ]
  },
  {
    id: '21',
    title: 'Ficha de Spitter',
    summary: 'Ficha de spitter se refere a uma ficha especifica, com caracteristicas, tipos e habilidades especificas.',
    details: `A ficha de spitter é uma ficha de criatura vermelha do tipo Spitter, com força 1 e defesa 1, com quatro habilidades.`,
    SubRule: [
      {
        id: '21.1',
        title: 'Habilidade 1 da Ficha de Spitter',
        summary: 'impeto',
        details: `A ficha de spitter possui impeto.`
      },
      {
        id: '21.2',
        title: 'Habilidade 2 da Ficha de Spitter',
        summary: 'Assimilar',
        details: `A ficha de spitter possui Assimilar.`
      },
      {
        id: '21.3',
        title: 'Habilidade 3 da Ficha de Spitter',
        summary: 'Sempre que essa ficha causar dano de combate a um jogador aquele jogador coloca um marcador de degradação em um terreno que ele controla.',
        details: `Sempre que essa ficha causar dano de combate a um jogador aquele jogador coloca um marcador de degradação em um terreno que ele controla.`
      },
      {
        id: '21.4',
        title: 'Habilidade 4 da Ficha de Spitter',
        summary: 'Sempre que essa ficha causar dano de combate a uma permanente se aquela permanente não tiver marcador de degradação coloque um marcador de degradação nela.',
        details: `Sempre que essa ficha causar dano de combate a uma permanente se aquela permanente não tiver marcador de degradação coloque um marcador de degradação nela.`
      }
    ]
  },
  {
    id: '22',
    title: 'Ficha de Vorme',
    summary: 'Ficha de vorme se refere a uma ficha especifica, com caracteristicas, tipos e habilidades especificas.',
    details: `A ficha de vorme é uma ficha de criatura verde e vermelha do tipo Vorme, com força 1 e defesa 2, com quatro habilidades.`,
    SubRule: [
      {
        id: '22.1',
        title: 'Habilidade 1 da Ficha de Vorme',
        summary: 'Defensor',
        details: `A ficha de vorme possui Defensor.`
      },
      {
        id: '22.1',
        title: 'Habilidade 1 da Ficha de Vorme',
        summary: 'Alcance',
        details: `A ficha de vorme possui Alcance.`
      },
      {
        id: '22.1',
        title: 'Habilidade 1 da Ficha de Vorme',
        summary: 'Assimilar',
        details: `A ficha de vorme possui Assimilar.`
      },
      {
        id: '22.2',
        title: 'Habilidade 2 da Ficha de Vorme',
        summary: 'Sempre que a ficha de Vorme bloquear uma criatura, coloque um marcador de degradação naquela criatura se ela não possuir um.',
        details: `Sempre que a ficha de Vorme bloquear uma criatura, coloque um marcador de degradação na criatura bloqueadora se ela ainda não possuir um marcador de degradação.`
      }
    ]
  },
  {
    id: '23',
    title: 'Poluir X',
    summary: 'Você pode descartar essa carta, pagando seu custo de poluir para fazer com que cada oponente crie fichas de poluição.',
    details: `Você pode pagar o custo de Poluir para descartar essa carta de sua mão. Se você fizer, cada oponente irá criar uma quantidade de fichas de poluição igual a metade do custo de poluir arredondao para baixo com um minimo de 1.`,
    SubRule: []
  },
  {
    id: '24',
    title: 'Desertificar X',
    summary: 'Você pode conjurar essa magica colocando X marcadores de degradação em Terrenos que você controla',
    details: `Ao inves de pagar o custo de mana para conjurar essa carta, você pode colocar X marcadores de degradação em terrenos que você controla que não possuam marcadores de degradação.`,
    SubRule: []
  },
  {
    id: '25',
    title: 'Otimizar X',
    summary: 'Toda vez que você Assimilar ou Processar uma magica você poderá sacrificar X resíduos. Se você fizer compre X cartas.',
    details: `Toda vez que você fosse ativar o efeito Assimilar ou Processar de uma magica, você pode sacrificar X residuos. Se você fizer, compre X cartas.`,
    SubRule: []
  },
  {
    id: '26',
    title: 'Evoluir X',
    summary: 'Toda vez que você Assimilar ou Processar uma mágica você poderá sacrificar X resíduos.',
    details: `toda vez que você fosse ativar o efeito Assimilar ou Processar de uma magica, você pode sacrificar x residuos. Se você fizer, escolha um entre os marcodores listados, você poderá colocar um  desses marcadores nesta criatura. Escolha um efeito ainda não escolhido dessa maneira para cada vez que você ativar esse efeito.`,
    SubRule: []
  },
  {
    id: '27',
    title: 'Terraplanar',
    summary: 'Como custo adicional para conjurar essa magica, você pode remover um marcador de degradação de um terreno que você controla. Se fizer, compre um card.',
    details: `Ao conjurar essa magica, como custo adicional você pode remover um marcador de degradação de um terreno que você controla. Se fizer, compre um card.`,
    SubRule: []
  },
  {
    id: '28',
    title: 'Purificar X',
    summary: 'No inicio da fase de manutenção de cada jogador, aquele jogador pode escolher sacrificar até X poluições que ele controla.',
    details: `No inicio da fase de manutenção de cada jogador, aquele jogador pode escolher sacrificar até X poluições que ele controla. se ele fizer, para cada polluição sacrificada dessa maneira, faça Scry 1.`,
    SubRule: []
  }
],

);

const openRule = ref(null);
function toggleRule(id) {
  openRule.value = openRule.value === id ? null : id;
}
</script>

<template>
  <section id="view-rules" class="view-content container">
    <div class="row gx-3 gy-4">
      <div class="col-12" v-for="rule in rules" :key="rule.id">
        <article class="rule-card">
          <div class="rule-header p-4" @click="toggleRule(rule.id)">
            <div class="d-flex align-items-start justify-content-between gap-3">
              <div class="rule-meta flex-grow-1">
                <h3 class="rule-title mb-2 fs-3">{{ rule.title }}</h3>
                <p class="rule-summary mb-0 text-white fs-5">{{ rule.summary }}</p>
              </div>
              <button
                class="btn btn-toggle"
                @click="toggleRule(rule.id)"
                :class="{ active: openRule === rule.id }"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>
          </div>

          <div class="rule-details" v-show="openRule === rule.id">
            <div class="row g-0">
              <div class="col-12 col-lg-7 order-lg-2 p-4 border-start border-start-lg">
                <div class="mb-4">
                  <h5 class="text-accent mb-3 fs-3 fw-bold">Descrição Detalhada</h5>
                  <p class="rule-detail-text fs-4" style="white-space: pre-line;">{{ rule.details }}</p>
                </div>

                <div v-if="rule.SubRule && rule.SubRule.length > 0" class="subrules-section">
                  <h5 class="text-accent mb-3 fs-3 fw-bold">Características Associadas</h5>
                  <div class="subrules-list">
                    <div v-for="subRule in rule.SubRule" :key="subRule.id" class="subrule-item mb-3 p-3 rounded bg-subrule">
                      <h6 class="subrule-title mb-2 fs-4">{{ subRule.title }}</h6>
                      <p class="subrule-summary mb-2 text-white">{{ subRule.summary }}</p>
                      <p class="subrule-details text-secondary" style="white-space: pre-line; line-height: 1.6;">{{ subRule.details }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-lg-5 order-lg-1 p-4 d-flex align-items-center justify-content-center bg-example-section">
                <div class="example-card-container">
                  <div class="example-card-placeholder">
                    <svg width="100%" height="100%" viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="300" height="400" fill="url(#grad)" stroke="var(--border-tech)" stroke-width="2" rx="8"/>
                      <defs>
                        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style="stop-color: rgba(100, 200, 255, 0.1)" />
                          <stop offset="100%" style="stop-color: rgba(50, 150, 200, 0.15)" />
                        </linearGradient>
                      </defs>
                      <text x="50%" y="50%" font-size="16" fill="var(--primary-neon)" text-anchor="middle" dominant-baseline="middle" font-family="monospace">
                        Imagem de Exemplo
                      </text>
                      <text x="50%" y="60%" font-size="12" fill="var(--text-secondary)" text-anchor="middle" dominant-baseline="middle" font-family="monospace">
                        Clique para selecionar
                      </text>
                    </svg>
                  </div>
                  <p class="text-center text-muted small mt-3">{{ rule.title }}</p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #view-rules {
    padding: 2rem 1rem;
  }

  .rule-card {
    background: var(--panel-bg);
    border: 1px solid var(--border-tech);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    transition: all 0.3s ease;
  }

  .rule-card:hover {
    border-color: var(--primary-neon);
    box-shadow: 0 12px 32px rgba(0, 200, 255, 0.15);
  }

  .rule-header {
    background: linear-gradient(135deg, rgba(0, 200, 255, 0.08), rgba(100, 150, 200, 0.05));
    border-bottom: 1px solid var(--border-tech);
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .rule-header:hover {
    background: linear-gradient(135deg, rgba(0, 200, 255, 0.12), rgba(100, 150, 200, 0.08));
  }

  .rule-title {
    color: var(--primary-neon);
    font-weight: 700;
    font-size: 1.3rem;
    margin: 0;
    line-height: 1.3;
  }

  .rule-summary {
    color: #9aa7b8;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .btn-toggle {
    background: transparent;
    border: 1px solid var(--border-tech);
    color: var(--primary-neon);
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
    flex-shrink: 0;
    margin-top: 0.25rem;
  }

  .btn-toggle:hover {
    background: rgba(0, 200, 255, 0.1);
    border-color: var(--primary-neon);
  }

  .btn-toggle svg {
    transition: transform 0.3s ease;
  }

  .btn-toggle.active svg {
    transform: rotate(180deg);
  }

  /* Conteúdo expandido */
  .rule-details {
    border-top: 1px solid var(--border-tech);
  }

  .border-start-lg {
    border-left: 1px solid var(--border-tech) !important;
  }

  @media (max-width: 991px) {
    .border-start-lg {
      border-left: none !important;
      border-top: 1px solid var(--border-tech);
    }
  }

  .rule-detail-text {
    color: #cbd5e1;
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .text-accent {
    color: var(--primary-neon);
    font-weight: 600;
    font-size: 0.95rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .text-secondary {
    color: #9aa7b8 !important;
  }

  /* Sub-regras/Características */
  .subrules-section {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .bg-subrule {
    background: rgba(0, 200, 255, 0.05) !important;
    border: 1px solid rgba(0, 200, 255, 0.1);
    transition: all 0.2s ease;
  }

  .subrule-item:hover {
    background: rgba(0, 200, 255, 0.08) !important;
    border-color: rgba(0, 200, 255, 0.2);
  }

  .subrule-title {
    color: var(--primary-neon);
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0;
  }

  .subrule-summary {
    color: #9aa7b8;
  }

  .subrule-details {
    color: #cbd5e1;
  }

  /* Seção de imagem de exemplo */
  .bg-example-section {
    background: linear-gradient(135deg, rgba(0, 200, 255, 0.05), rgba(100, 150, 200, 0.03));
  }

  .example-card-container {
    width: 100%;
    max-width: 280px;
  }

  .example-card-placeholder {
    aspect-ratio: 300 / 400;
    border: 2px dashed var(--border-tech);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 200, 255, 0.03);
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .example-card-placeholder:hover {
    border-color: var(--primary-neon);
    background: rgba(0, 200, 255, 0.08);
  }

  .example-card-placeholder svg {
    width: 100%;
    height: 100%;
  }

  /* Responsivo - Mobile */
  @media (max-width: 767px) {
    #view-rules {
      padding: 1.5rem 0.75rem;
    }

    .rule-header {
      padding: 1.25rem !important;
    }

    .rule-title {
      font-size: 1.1rem;
    }

    .rule-summary {
      font-size: 0.85rem;
    }

    .btn-toggle {
      width: 36px;
      height: 36px;
    }

    .rule-card p {
      padding: 1rem !important;
    }

    .rule-detail-text {
      font-size: 0.9rem;
    }

    .subrule-item {
      padding: 0.75rem !important;
    }

    .subrule-title {
      font-size: 0.85rem;
    }

    .subrule-summary,
    .subrule-details {
      font-size: 0.8rem;
    }

    .example-card-container {
      max-width: 200px;
      margin-bottom: 1rem;
    }

    .text-accent {
      font-size: 0.85rem;
    }
  }

  /* Responsivo - Tablet */
  @media (max-width: 991px) {
    .example-card-container {
      max-width: 240px;
    }

    .rule-title {
      font-size: 1.15rem;
    }

    .rule-detail-text {
      font-size: 0.9rem;
    }
  }
</style>
