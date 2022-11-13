<template>
    <div>
      	<b-button v-b-toggle.sidebar-1>Toggle Sidebar</b-button>
      	<b-sidebar id="sidebar-1" visible="true">
			<AccordionSideBar
				v-for="(item, index) in accordeonItems" 
				:key="index"
				:accordeonItem="item">
			</AccordionSideBar>
			<div class="p-3 mt-3 border-top">
				<FooterSideBarVue
					v-for="(item, index) in footerItems" 
					:key="index"
					:footerItem="item">
				</FooterSideBarVue>
			</div>
      	</b-sidebar>
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
        }
    }
</script>