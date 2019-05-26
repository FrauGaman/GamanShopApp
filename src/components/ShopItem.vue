<template>
	<div class="item">
		<img :src="product.img" :alt="product.title">
		<router-link class="link" :to="/shop/+product.id">{{ product.title }}</router-link>
	</div>
</template>

<script>
	export default {
		props: {
			product: {
				type: Object,
				required: true
			}
		}
	}
</script>

<style lang="scss">
	.item__wrapper {
		display: flex;
		-ms-align-items: center;align-items: center;
		justify-content: space-between;
		-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;-ms-flex-wrap: wrap;-o-flex-wrap: wrap;flex-wrap: wrap;
	}
	.item {
		max-width: 48%;
		text-align: center;
	}
	p {
		font-size: 22px;
	}
</style>