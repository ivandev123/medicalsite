<template>
  <div class="clinic-addresses">
    <h2>Адреса клиник</h2>

    <Preloader style="margin-top: 20px;" v-if="!regions.length"/>
    <div class="clinic-addresses__content clinic-addresses__content_mt-20" v-if="regions.length">
      <div class="clinic-addresses__left">
        <InputSearch placeholder="Поиск по городам"/>

        <ul class="clinic-addresses__list clinic-addresses__list_mt-20">
          <li
              v-for="(region, idx) in regions"
              :key="region.id"
              @click="showMarker(region, idx)"
          >
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.00028 0.952393C4.06193 0.952393 0.857495 4.19958 0.857495 8.18596C0.831602 14.0172 7.72885 18.8522 8.00028 19.0476C8.00028 19.0476 15.169 14.0172 15.1431 8.19049C15.1431 4.19958 11.9386 0.952393 8.00028 0.952393ZM8.00028 11.8095C6.02709 11.8095 4.42889 10.19 4.42889 8.19049C4.42889 6.19096 6.02709 4.57144 8.00028 4.57144C9.97347 4.57144 11.5717 6.19096 11.5717 8.19049C11.5717 10.19 9.97347 11.8095 8.00028 11.8095Z" fill="#24c8bc"/>
            </svg>
            {{ region.address }}
          </li>
        </ul>
      </div>
      <div class="clinic-addresses__map" id="map"/>
    </div>
  </div>
</template>

<script>

import InputSearch from "@/components/utils/InputSearch.vue";
import Preloader from "@/components/Preloader.vue";
import {mapActions, mapState} from "vuex";

export default {
  name: "ClinicAddresses",
  components: {Preloader, InputSearch},
  data() {
    return {
      map: null,
    }
  },
  methods: {
    ...mapActions('region', ['getRegions']),

    showMarker(region, idx) {
      const marker = document.querySelector(`.yandex-map-section-${idx + 1}`)
      console.log(this.map)
      console.log()
    },
    async loadMap() {
      const markerIcon = '<svg style="cursor: pointer;" width="35px" height="35px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-svg><path fill-rule="evenodd" clip-rule="evenodd" d="M5.05002 4.05011C6.36284 2.73729 8.14341 1.99976 10 1.99976C11.8566 1.99976 13.6372 2.73729 14.95 4.05011C16.2628 5.36293 17.0004 7.1435 17.0004 9.00011C17.0004 10.8567 16.2628 12.6373 14.95 13.9501L10 18.9001L5.05002 13.9501C4.39993 13.3001 3.88425 12.5284 3.53242 11.6791C3.1806 10.8297 2.99951 9.91943 2.99951 9.00011C2.99951 8.0808 3.1806 7.17049 3.53242 6.32116C3.88425 5.47184 4.39993 4.70013 5.05002 4.05011ZM10 11.0001C10.5304 11.0001 11.0392 10.7894 11.4142 10.4143C11.7893 10.0393 12 9.53055 12 9.00011C12 8.46968 11.7893 7.96097 11.4142 7.5859C11.0392 7.21083 10.5304 7.00011 10 7.00011C9.46958 7.00011 8.96088 7.21083 8.5858 7.5859C8.21073 7.96097 8.00002 8.46968 8.00002 9.00011C8.00002 9.53055 8.21073 10.0393 8.5858 10.4143C8.96088 10.7894 9.46958 11.0001 10 11.0001Z" fill="#E75C21" data-svg/></svg>'
      const backgroundForPrompt = '<svg xmlns="http://www.w3.org/2000/svg" width="224px" height="94px" viewBox="0 0 224 94" fill="none">\n' + '<path d="M0 10C0 4.47716 4.47715 0 10 0H214C219.523 0 224 4.47715 224 10V73.7818C224 79.3047 219.523 83.7818 214 83.7818H110.296C106.711 83.7818 103.401 85.7004 101.619 88.8107L99.2354 92.971C98.4671 94.312 96.5329 94.312 95.7646 92.971L93.3811 88.8107C91.5992 85.7004 88.2888 83.7818 84.7043 83.7818H10C4.47715 83.7818 0 79.3047 0 73.7818V10Z" fill="white"/>\n' + '<path d="M0.5 10C0.5 4.7533 4.7533 0.5 10 0.5H214C219.247 0.5 223.5 4.7533 223.5 10V73.7818C223.5 79.0285 219.247 83.2818 214 83.2818H110.296C106.532 83.2818 103.056 85.2964 101.185 88.5621L98.8015 92.7224C98.2253 93.7282 96.7747 93.7282 96.1985 92.7224L93.815 88.5621C91.944 85.2964 88.4681 83.2818 84.7043 83.2818H10C4.75329 83.2818 0.5 79.0285 0.5 73.7818V10Z" stroke="#CBC2B3" stroke-opacity="0.5"/>\n' + '</svg>'

      // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты API
      await ymaps3.ready;
      this.mapIsReady = true

      // Создание карты
      this.map = new ymaps3.YMap(document.getElementById('map'), {
        location: {
          // Координаты центра карты
          // Порядок по умолчанию: «долгота, широта»
          center: [39.7225, 47.2275],

          // center: ['28.187515', '-34.497207'],

          // Уровень масштабирования
          // Допустимые значения: от 0 (весь мир) до 21.
          zoom: 11,
        }
      });

      this.map.addChild(new ymaps3.YMapDefaultSchemeLayer());
      this.map.addChild(new ymaps3.YMapDefaultFeaturesLayer());

      console.log('add', this.regions)
      this.regions.forEach((region, idx) => {
        const content = document.createElement('section');
        content.style.position = 'relative';
        content.id = `yandex-map-section-${region.id}`;
        const marker = new ymaps3.YMapMarker({
          coordinates: [+region.longitude, +region.latitude],
          // draggable: false
        }, content);
        content.innerHTML = `
            ${markerIcon}
            <div class="yandex-map-prompt yandex-map-prompt-${idx + 1} d-none">
                ${backgroundForPrompt}
                <div class="yandex-map-prompt__content">
                    <span class="yandex-map-prompt__street">${region.name}</span>
                    <span class="yandex-map-prompt__floor">${region.address}</span>
                    <span class="yandex-map-prompt__phone yandex-map-prompt__phone_mt-4">${region.phone}</span>
                </div>
            </div>`;

        content.onclick = event => {
          const sectionId = +event.target.closest('section').id.split('yandex-map-section-')[1]
          document.querySelectorAll('.yandex-map-prompt').forEach((elem, idx2) => {
            if (idx !== idx2) elem.classList.add('d-none')
          })
          document.querySelector(`.yandex-map-prompt-${idx + 1}`).classList.toggle('d-none')
          this.$emit('set-active-marker', sectionId)
        }
        // Добавляем слой для отображения схематической карты
        this.map.addChild(marker);
      })
    }
  },
  computed: {
    ...mapState('region', ['regions']),
  },
  watch: {
    'regions.length'() {
      this.loadMap()
    }
  },
  mounted() {
    this.getRegions()
  }
}
</script>

<style scoped lang="scss">
.clinic-addresses {
  margin-top: 40px;

  &__content {
    display: flex;
    justify-content: space-between;

    &_mt-20 {
      margin-top: 20px;
    }
  }

  &__left {
    width: 40%;
  }

  &__list {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    max-height: 350px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 4px;
      background: #FFFFFF;
      border-radius: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #24c8bc;
      border-radius: 6px;
    }

    &_mt-20 {
      margin-top: 20px;
    }

    & > li {
      display: flex;
      align-items: center;
      column-gap: 8px;

      font-weight: 500;
      font-size: 15px;
      line-height: 20px;
      color: #4B535A;
      cursor: pointer;

      & > svg {
        & path {
          transition: .35s all ease;
        }
      }

      &:hover {
        & > svg {
          & path {
            fill: #FFA765;
          }
        }
      }
    }
  }

  &__map {
    width: 55%;
    height: 411px;

    & ::v-deep(canvas) {
      border-radius: 25px;
    }
  }
}
</style>