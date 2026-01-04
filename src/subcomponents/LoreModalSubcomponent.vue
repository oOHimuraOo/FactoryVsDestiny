<script setup>
  import { defineProps } from 'vue';
  import * as LE from '../utils/LoreEssentials';

  const props = defineProps({
    loreIndex: Object
  })

</script>

<template>
  <div class="modal fade" id="readingModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content border-0">
                <div class="modal-header border-0 px-5 pt-4">
                    <div class="font-mono">
                        <span class="text-primary d-block small text-uppercase"> Topic {{ LE.LoreTopicNumberReader(props.loreIndex.t) }} // {{ LE.LoreTopicNameReader(props.loreIndex.t) }}</span>
                        <h2 class="modal-title fw-bold text-white text-uppercase" id="readingTitle">Capitulo {{ LE.LoreChapterNumberReader(props.loreIndex.t, props.loreIndex.c) }}: {{ LE.LoreChapterNameReader(props.loreIndex.t, props.loreIndex.c) }}</h2>
                        <div class="font-mono">
                            <span class="text-sky-600 d-block small text-uppercase"> Author: {{ LE.LoreAuthorReader(props.loreIndex.t) }} // Co-Author: {{ LE.LoreCoAuthorReader(props.loreIndex.t) }}</span>
                            <span class="text-sky-600 d-block small text-uppercase"> Revisor: {{ LE.LoreRevisorReader(props.loreIndex.t, props.loreIndex.c) }}</span>
                        </div>
                    </div>
                </div>
                <div class="modal-body px-5">
                    <div class="reading-container font-reading fs-4" id="readingBody" style="white-space: pre-line;">
                        {{ LE.LoreChapterText(props.loreIndex.t, props.loreIndex.c) }}
                    </div>
                </div>
                <div class="modal-footer border-0 justify-content-center pb-5">
                    <button type="button" class="btn btn-outline-primary px-5 font-mono" data-bs-dismiss="modal">RETORNAR_AO_TERMINAL</button>
                </div>
            </div>
        </div>
    </div>
</template>
