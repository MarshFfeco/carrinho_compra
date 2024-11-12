<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

import welcome from '../components/welcome.vue';

const opt = {
    snap: true,
    type: "loop",
    perPage: 3,
    perMove: 3,
};

const items = [1,2,3,4,5,6,7,8,9]

</script>

<template>
    <welcome />

    <section id="products">
        <h2 class="text-2xl">Produtos</h2>

        <Splide id="carrousel" :options="opt" aria-label="My Favorite Images">
            <SplideSlide v-for="item in items">
                <div class="card">
                    <div class="card-image">
                        <picture>
                            <img src="../assets/image/0.jpg" alt="imagem do produto">
                        </picture>
                    </div>

                    <div class="card-tittle">
                        <h3>
                            Produto {{item}}
                        </h3>
                    </div>
                
                    <div class="card-description">
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus impedit 
                            ratione dolores sequi nulla!
                        </small>
                    </div>

                    <div class="card-footer">
                        <div class="card-price">
                            <p><strong>R$ 19,99</strong></p>
                        </div>

                        <div class="card-button">
                            <button>
                                Adicionar
                            </button>
                        </div>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
    </section>
</template>

<style scoped>

.card {
    width: 336px;

    margin-block: 25px;

    padding: 24px;

    border-radius: 10px;

    background-color: #fff;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

.card-image {
    padding-bottom: 24px;
}

.card-image img {
    width: 288px;
    height: 240px;
    
    object-fit: cover;
}

.card-tittle {
    font-size: 1.5rem;
    line-height: 2rem;
}

.card-description {
    padding-bottom: 24px;

    color: rgb(107 114 128 / 1);
}

.card-description small {
    overflow: hidden;
   display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2; 
   -webkit-box-orient: vertical;
}

.card-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card-price {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
}

#products {
    height: 100vh;
}

#products h2 {
    text-align: center;

    padding-top: 10vh;
}
</style>
