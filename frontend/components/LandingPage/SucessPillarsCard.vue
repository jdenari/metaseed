<template>
    <div class="card col lead my-2 mx-2">
      <div class="card-header">
        <img :src="imageSrc" alt="" class="my-1" />
      </div>
      <div class="card-body p-1 d-flex align-items-center my-5">
        <p class="card-text text-dark w-100 text-center">{{ text }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SucessPillarsCard',
    props: {
      imageSrc: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      }
    }
  }
  </script>