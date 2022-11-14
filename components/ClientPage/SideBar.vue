<template>
    <div>
		<aside class="sidebar bg-light p-3">
			<div class="w-100 d-flex flex-row-reverse p-1 mb-3">
				<a href="" @click="changeSideBar">
					<img src="../../static/icons/arrow-bar-left.svg" alt="Ícone de seta a esquerda" class="buttonSideBar">
				</a>
			</div>
			<AccordionSideBar
				v-for="(item, index) in accordeonItems" 
				:key="index"
				:accordeonItem="item"
				class="p-1">
			</AccordionSideBar>
			<div class="p-3 mt-3 border-top">
				<FooterSideBarVue
					v-for="(item, index) in footerItems" 
					:key="index"
					:footerItem="item">
				</FooterSideBarVue>
			</div>
		</aside>
    </div>
</template>

<script>
	import AccordionSideBar from './AccordionSideBar.vue'
	import FooterSideBarVue from './FooterSideBar.vue';
    export default {
        name: 'BodyScrolling',
		components: {
			AccordionSideBar
			, FooterSideBarVue
		},
		data (){
			return {
				accordeonItems: [
					'Perfil'
					, 'Dashboards'
					, 'Formulários'
				],
				footerItems: [
					'Sobre'
					, 'Documentação'
					, 'Contato'
				]
			}
		},
        methods: {
			changeSideBar() {
				console.log('ativo')
			}
        }
    }
</script>

<style scoped>
	.sidebar{
		width: 350px;
		height: 92vh;
	}
</style>