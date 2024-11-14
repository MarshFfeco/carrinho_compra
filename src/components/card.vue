<script setup>
    const props = defineProps({
        id: Number,
        title: String,
        description: String,
        price: Number,
    })
</script>

<template>
    <div class="card">
        <div class="card-image">
            <picture>
                <img src="../assets/image/0.jpg" alt="imagem do produto">
            </picture>
        </div>

        <div class="card-tittle">
            <h3>
                {{ props.title }}
            </h3>
        </div>
    
        <div class="card-description">
            <small>
                {{ props.description }}
            </small>
        </div>

        <div class="card-footer">
            <div class="card-price">
                <p><strong>R$ {{ props.price }}</strong></p>
            </div>

            <div class="card-button">
                <button>
                    Adicionar
                </button>
            </div>
        </div>
    </div>
</template>

<style>

.card {
    height: 438px;

    margin-block: 25px;

    padding: 24px;

    border-radius: 10px;

    background-color: #fff;

    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

.card-image {
    padding-bottom: 24px;
}

.card-image img {
    width: 100%;
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
    min-height: 34px;

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
</style>