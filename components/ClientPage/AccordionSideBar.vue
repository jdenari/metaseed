<template>
    <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-0" role="tab">
                <b-button 
                    block v-b-toggle.accordion-1 
                    variant="light"
                    class="rounded-0"
                    > {{ accordeonItem }}
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                    <b-card-text>{{ text }}</b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>
  
<script>
export default {
    name: 'AccordionSideBar',
    props: ['accordeonItem'],
    data() {
        return {
            text: `Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry`
        }
    }
}
</script>