<template>
	<div class="wrapper-content wrapper-content--fixed">
	  <section>
	    <div class="container">
	      <h1>Home Page</h1>
	      <p>{{ getMessage }}</p>
	    </div>
	  </section>
	</div>
</template>

<script>
	export default {
		computed: {
			getMessage() {
				return this.$store.getters.getMessage
			}
			
		}
	}
</script>