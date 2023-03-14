<template>
    <button
        type="button"
        class="btn"
        :class="{ 'clicked': isClicked }"
        @click="toggleClicked"
    >
        {{ FilterButtonOutlineText }}
    </button>
</template>
  
<script>
    export default {
        name: "SmallButton",
        props: {
            FilterButtonOutlineText: {
                type: String,
            },
        },
        data() {
            return {
                isClicked: true,
            };
        },
        methods: {
            toggleClicked() {
                this.isClicked = !this.isClicked;
                this.$emit("event");
            },
        },
    };
</script>
  
<style scoped>
.btn {
    border: 1px solid white;
    border-radius: 0px;
    background-color:white;
    color: #212536;
    transition: all 0.3s ease;
}
  
.clicked {
    background-color: rgb(248, 138, 138);
    border-color: rgb(248, 138, 138);
    color: white
}
</style>
  

