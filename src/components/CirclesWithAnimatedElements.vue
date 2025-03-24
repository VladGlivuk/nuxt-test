<script setup lang="ts">
import { onMounted, ref, onUnmounted } from 'vue'
import gsap from 'gsap'

const cardRef = ref<HTMLElement | null>(null)
const containerRef = ref<HTMLElement | null>(null)

const updateSVGSize = () => {
  if (!containerRef.value) return
  const containerWidth = containerRef.value.offsetWidth
  console.log(containerWidth);
  const isMobile = window.innerWidth <= 375
  
  const scale = isMobile ? '340px' : containerWidth / 778
  
  gsap.set('svg', {
    scale: scale,
    transformOrigin: 'center center'
  })

  gsap.set('.outer-circle', {
    r: 388.5,
    cx: 389,
    cy: 389.806
  })
  gsap.set('.middle-circle', {
    r: 282.5,
    cx: 389,
    cy: 389.806
  })
  gsap.set('.inner-circle', {
    r: 176.5,
    cx: 389,
    cy: 389.806
  })
}

onMounted(() => {
  updateSVGSize()
  window.addEventListener('resize', updateSVGSize)

  gsap.from('.outer-circle', {
    duration: 1,
    scale: 0,
    opacity: 0,
    ease: 'back.out(1.7)'
  })

  gsap.from('.middle-circle', {
    duration: 1,
    scale: 0,
    opacity: 0,
    delay: 0.2,
    ease: 'back.out(1.7)'
  })

  gsap.from('.inner-circle', {
    duration: 1,
    scale: 0,
    opacity: 0,
    delay: 0.4,
    ease: 'back.out(1.7)'
  })

  const tiles = ['.cardIcon', '.dashIcon', '.ftxTokenIcon', '.polygonIcon', '.solanaIcon']
  
  tiles.forEach((tile, index) => {
    const element = document.querySelector(tile) as HTMLElement
    if (element) {
      const randomX = Math.random() * 100 - 50
      const randomY = Math.random() * 100 - 50
      
      gsap.set(element, {
        x: randomX,
        y: randomY,
        opacity: 0,
        rotation: Math.random() * 360
      })

      gsap.to(element, {
        duration: 0.8,
        opacity: 1,
        x: 0,
        y: 0,
        delay: index * 0.2,
        ease: 'back.out(1.7)'
      })

      gsap.to(element, {
        rotation: '+=360',
        duration: 5 + Math.random() * 5,
        repeat: -1,
        ease: 'none',
        delay: index * 0.2
      })
    }
  })

  if (cardRef.value) {
    cardRef.value.addEventListener('mouseenter', () => {
      gsap.to(cardRef.value, {
        scale: 1.1,
        duration: 0.3,
        ease: 'power2.out'
      })
    })

    cardRef.value.addEventListener('mouseleave', () => {
      gsap.to(cardRef.value, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      })
    })
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', updateSVGSize)
})
</script>

<template>
  <div ref="containerRef" class="circleContainer">
    <svg
      width="778"
      height="779"
      viewBox="0 0 778 779"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="outer-circle"
        cx="389"
        cy="389.806"
        r="388.5"
        stroke="#0F0F10"
        stroke-opacity="0.2"
      />
      <circle
        class="middle-circle"
        cx="389"
        cy="389.806"
        r="282.5"
        stroke="#0F0F10"
        stroke-opacity="0.2"
      />
      <circle
        class="inner-circle"
        cx="389"
        cy="389.806"
        r="176.5"
        stroke="#0F0F10"
        stroke-opacity="0.2"
      />
    </svg>
    <img
      ref="cardRef"
      src="@/libs/assets/images/png/yellowCard.png"
      class="cardIcon"
      alt=""
    />
    <img src="@/libs/assets/images/png/dash.png" class="dashIcon" alt="" />
    <img
      src="@/libs/assets/images/png/ftxToken.png"
      class="ftxTokenIcon"
      alt=""
    />
    <img
      src="@/libs/assets/images/png/polygon.png"
      alt=""
      class="polygonIcon"
    />
    <img src="@/libs/assets/images/png/solana.png" alt="" class="solanaIcon" />
  </div>
</template>

<style scoped lang="scss">
.circleContainer {
  position: relative;
  width: 100%;
  max-width: 778px;
  margin: 0 auto;
  aspect-ratio: 778/779;
  overflow: visible;

  svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  circle {
    transform-origin: center;
    vector-effect: non-scaling-stroke;
    stroke-width: 1px;
  }

  img {
    position: absolute;
    transform-origin: center;
    height: auto;
  }

  img:not(.cardIcon) {
    width: clamp(40px, 5vw, 80px);
  }
}

.cardIcon {
  top: 32%;
  left: 23%;
  cursor: pointer;
  width: 395px;
}

.dashIcon {
  top: 0%;
  right: 25%;
}

.ftxTokenIcon {
  bottom: 7%;
  left: 76%;
}

.polygonIcon {
  top: 19.5%;
  right: 45%;
}

.solanaIcon {
  bottom: 5.5%;
  left: 38%;
}

@media screen and (max-width: 375px) {
  .circleContainer {
    max-width: 100%;
    padding: 0 16px;
    margin: 0;
  }

  img:not(.cardIcon) {
    width: clamp(30px, 4vw, 60px);
  }

  .cardIcon {
    width: 168px;
  }

  .cardIcon {
    top: 35%;
    left: 20%;
  }

  .dashIcon {
    top: 5%;
    right: 20%;
  }

  .ftxTokenIcon {
    bottom: 10%;
    left: 70%;
  }

  .polygonIcon {
    top: 25%;
    right: 40%;
  }

  .solanaIcon {
    bottom: 8%;
    left: 35%;
  }
}

@media screen and (min-width: 376px) and (max-width: 768px) {
  .circleContainer {
    max-width: 100%;
    padding: 0 30px;
  }

  img:not(.cardIcon) {
    width: clamp(35px, 4.5vw, 70px);
  }

  .cardIcon {
    width: 280px;
  }
}
</style>
