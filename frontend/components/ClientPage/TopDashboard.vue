<template>
    <div class="main-top-dashboard d-flex m-auto">        
        <div class="text-center">
            <div class="row m-auto">
                <HighlightCard 
                    v-for="(item, index) in cardVariables" 
					:key="index"
					:cardVariable="item"
                    :cardNumber="num(item)"
                    class="col m-3"/>
            </div>
        </div>
    </div>
</template>
  
<script>
import HighlightCard from './HighlightCard.vue';
export default {
    name: 'TopDashboard',
    components: {
        HighlightCard
    },
    data () {
        return {
            cardVariables: ['Impressões', 'Cliques', 'Conversões', 'Custo'],
            cardNumbers: ['2.300', '259', '45', 'R$ 350,00']
        }
    },
    methods: {
        num(val) {
            return this.cardNumbers[this.cardVariables.findIndex(i => i === val)]
        }
    }
    
}
</script>

<style scoped>
    .main-top-dashboard{
        background-color:#FF6868;
        width: 100%;
    }
</style>