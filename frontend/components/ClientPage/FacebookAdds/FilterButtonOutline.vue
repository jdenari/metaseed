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
    border: 1px solid rgb(255, 94, 94);
    border-radius: 4px;
    background-color:rgb(252, 221, 221);
    color: red;
    transition: all 0.3s ease;
}
  
.clicked {
    background-color: rgb(255, 94, 94);
    color: white;
    border-color: lightcoral;
}
</style>
  

