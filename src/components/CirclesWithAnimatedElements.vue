<script setup lang="ts"></script>

<template>
  <div class="circleContainer">
    <svg
      width="778"
      height="779"
      viewBox="0 0 778 779"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="389"
        cy="389.806"
        r="388.5"
        stroke="#0F0F10"
        stroke-opacity="0.2"
      />
      <circle
        cx="389"
        cy="389.806"
        r="282.5"
        stroke="#0F0F10"
        stroke-opacity="0.2"
      />
      <circle
        cx="389"
        cy="389.806"
        r="176.5"
        stroke="#0F0F10"
        stroke-opacity="0.2"
      />
    </svg>
    <img
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
}

.cardIcon {
  position: absolute;
  top: 32%;
  left: 23%;
}

.dashIcon {
  position: absolute;
  top: 0%;
  right: 25%;
}

.ftxTokenIcon {
  position: absolute;
  bottom: 7%;
  left: 76%;
}

.polygonIcon {
  position: absolute;
  top: 19.5%;
  right: 45%;
}

.solanaIcon {
  position: absolute;
  bottom: 5.5%;
  left: 38%;
}
</style>
