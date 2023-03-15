<template>
    <div>
		<aside class="sideBar bg-dark-black py-3 pl-3" :class="{'sideBar-small': fullSideBar }">
			<div v-if="!this.fullSideBar">
				<div class="accordion" role="tablist">
					<b-card no-body class="mb-1">
						<b-card-header header-tag="header" class="p-2 d-flex" role="tab">
							<img src="../../../static/icons/facebook.svg" alt="" class="mx-2">
							<b-button 
								block v-b-toggle.accordion-1
								variant="light"
								class="rounded-0 m-0 px-2 p-0 text-left"
								> Marketing
							</b-button>
						</b-card-header>
						<b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<ul class="list-group list-group-flush">
									<li class="no-underline list-group-item stretched-link border-0 p-0 my-1"
									@click="$store.commit('CHANGE_CONTENT_TO_FACEBOOKADDS')"
									>Distribuição de Conteúdo</li>
									<li class="no-underline list-group-item stretched-link border-0 p-0 my-1"
										@click="$store.commit('CHANGE_CONTENT_TO_LEADS_MARKETING')"
										> Leads
									</li>
									<li class="no-underline list-group-item stretched-link border-0 p-0 my-1"
									@click="$store.commit('CHANGE_CONTENT_TO_DATABASE_MARKETING')"
										> Banco de Dados
									</li>
								</ul>
							</b-card-body>
						</b-collapse>
					</b-card>
				</div>
				<div class="accordion" role="tablist">
					<b-card no-body class="mb-1">
						<b-card-header header-tag="header" class="p-2 d-flex" role="tab">
							<img src="../../../static/icons/gear.svg" alt="" class="mx-2">
							<b-button 
								block v-b-toggle.accordion-2 
								variant="light"
								class="rounded-0 m-0 px-2 p-0 text-left"
								@click="$store.commit('CHANGE_CONTENT_TO_AUTOMATIZATION')"
								> Automatizações
							</b-button>
						</b-card-header>
					</b-card>
				</div>
				<div class="accordion" role="tablist">
					<b-card no-body class="mb-1">
						<b-card-header header-tag="header" class="p-2 d-flex" role="tab">
							<img src="../../../static/icons/laptop.svg" alt="" class="mx-2">
							<b-button 
								block v-b-toggle.accordion-3
								variant="light"
								class="rounded-0 m-0 px-2 p-0 text-left"
								@click="$store.commit('CHANGE_CONTENT_TO_DASHBOARD')"
								> Dashboards
							</b-button>
						</b-card-header>
					</b-card>
				</div>
				<div class="accordion" role="tablist">
					<b-card no-body class="mb-1">
						<b-card-header header-tag="header" class="p-2 d-flex" role="tab">
							<img src="../../../static/icons/person.svg" alt="" class="mx-2">
							<b-button 
								block v-b-toggle.accordion-4
								variant="light"
								class="rounded-0 m-0 px-2 p-0 text-left"
								> Perfil
							</b-button>
						</b-card-header>
						<b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
							<b-card-body>
								<ul class="list-group list-group-flush">
									<li class="no-underline list-group-item stretched-link border-0 p-0 my-1"
										@click="$store.commit('CHANGE_CONTENT_TO_PROFILE')"
									>Alterar Perfil</li>
									<li class="no-underline list-group-item p-0 my-1"
										@click="$bvModal.show('modalExitSideBar')"
										>Sair
									</li>
								</ul>
							</b-card-body>
						</b-collapse>
					</b-card>
				</div>
				<b-modal 
					id="modalExitSideBar" 
					ref="modalExitSideBar"
					ok-only
					hide-footer
					>
					<div class="d-block">Tem certeza que quer sair da sua conta? </div>
					<div class="d-flex flex-row-reverse w-100 mt-4">
						<button 
							@click="$store.commit('DEAUTHENTICATE');$bvModal.hide('modalExitSideBar')"
							class="btn btn-primary m-1"
							type="button"  
							>Sim
						</button>
						<button 
							@click="$bvModal.hide('modalExitSideBar')"
							class="btn btn-secondary m-1"
							type="button" 
							>Voltar
						</button>
            		</div>
        		</b-modal>
			</div>
		</aside>
    </div>
</template>

<script>
import FooterSideBarVue from './FooterSideBar.vue';
export default {
	name: 'BodyScrolling',
	components: {
		FooterSideBarVue
	},
	data (){
		return {
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
	height: 100%;
}
.sideBar-small{
	width: 65px;
}
.icon-SideBar{
	cursor: pointer;
}
</style>

<style scoped>

/*------------------------------------768px-md-------------------------------------------*/
@media screen and (max-width: 992px) {
	.sideBar{
		width: 100vw;
		height: auto;
	}
}
</style>