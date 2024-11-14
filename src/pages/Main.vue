<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import welcome from '../components/welcome.vue';
import card from '../components/card.vue';
import { onMounted, ref, computed } from 'vue';

const opt = ref({
    type : "loop",
    gap: "20px",
    focus: "center",
    perPage: 4,
    trimSpace: false,
    pagination: false
});

const perPage = computed({
    set(newValue) {
        opt.value.perPage = newValue;
    }
})

onMounted(() => {
    myEventHandler()
    window.addEventListener("resize", myEventHandler);
})

function myEventHandler(e) {
    const car = document.getElementById("carrousel").clientWidth; 

    if(car < 1100)
        perPage.value = 1; 
    else if (car > 1100 && car < 1600)
        perPage.value = 2;
    else if (car > 1600)
        perPage.value = 4;
}

const items = [
    {
        id: 1,
        title: "Notebook",
        description: "Um notebook de alta performance.",
        price: 3500.00
    },
    {
        id: 2,
        title: "Smartphone",
        description: "Um smartphone com câmera de alta resolução.",
        price: 2500.00
    },
    {
        id: 3,
        title: "Tablet",
        description: "Um tablet com tela de 10 polegadas.",
        price: 1500.00
    },
    {
        id: 4,
        title: "Headphones",
        description: "Fones de ouvido com cancelamento de ruído.",
        price: 800.00
    },
    {
        id: 5,
        title: "Smartwatch",
        description: "Relógio inteligente com monitoramento de saúde.",
        price: 1200.00
    },
    {
        id: 6,
        title: "Camera",
        description: "Câmera digital com lente intercambiável.",
        price: 4500.00
    },
    {
        id: 7,
        title: "Printer",
        description: "Impressora multifuncional com Wi-Fi.",
        price: 600.00
    },
    {
        id: 8,
        title: "Monitor",
        description: "Monitor de 24 polegadas com resolução 4K.",
        price: 2000.00
    },
    {
        id: 9,
        title: "Keyboard",
        description: "Teclado mecânico com iluminação RGB.",
        price: 300.00
    },
    {
        id: 10,
        title: "Mouse",
        description: "Mouse ergonômico sem fio.",
        price: 150.00
    }
];
</script>

<template>
    <welcome />

    <section id="products">
        <h2 class="text-2xl">Produtos</h2>

        <Splide id="carrousel" :options="opt" aria-label="My Favorite Images">
            <SplideSlide v-for="item in items" :key="opt.perPage+item.id">
                <card :id="item.id" :title="item.title" :description="item.description" :price="item.price" />
            </SplideSlide>
        </Splide>
    
        <Splide id="second-carrousel"  :options="opt" aria-label="My Favorite Images">
            <SplideSlide v-for="item in items" :key="opt.perPage+item.id">
                <card :id="item.id" :title="item.title" :description="item.description" :price="item.price" />
            </SplideSlide>
        </Splide>
    </section>
</template>

<style scoped>
#products {
    height: 100vh;
}

#products h2 {
    text-align: center;

    padding-top: 10vh;
}

#products #carrousel {
    padding-bottom: 24px;
}

#products #second-carrousel {
    padding-top: 0;
}
</style>
