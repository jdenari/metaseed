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
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>
  
<script>
export default {
    name: 'AccordionSideBar',
    props: ['accordeonItem'],
}
</script>