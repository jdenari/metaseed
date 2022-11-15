<template>
    <div>
		<aside class="sideBar bg-light p-3" :class="{'sideBar-small': fullSideBar }">
			<div class="w-100 d-flex flex-row-reverse p-1 mb-3">
				<img 
					src="../../static/icons/arrow-bar-left.svg" 
					alt="Ícone de seta a esquerda" 
					class="pe-auto icon-SideBar" 
					@click="fullSideBar = !fullSideBar"
					v-if="!this.fullSideBar"
				>
				<img 
					src="../../static/icons/arrow-bar-right.svg" 
					alt="Ícone de seta a esquerda" 
					class="pe-auto icon-SideBar" 
					@click="fullSideBar = !fullSideBar"
					v-else
				>
			</div>
			<div v-if="!this.fullSideBar">
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
				],
				fullSideBar: false,
			}
		},
    }
</script>

<style scoped>
	.sideBar{
		width: 350px;
		height: 92vh;
	}
	.sideBar-small{
		width: 65px;
	}
	.icon-SideBar{
		cursor: pointer;
	}
</style>