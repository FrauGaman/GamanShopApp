export default {
	state: {
		shopList: [
			{
				id: 1,
				title: 'Nike Red',
				descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt sint facilis earum nulla quasi aliquam fuga placeat id voluptas soluta, veritatis blanditiis, et, maxime sequi quibusdam dignissimos? Voluptas nisi, neque repellat, illo quisquam quasi? Non inventore numquam quidem voluptatem est, sed corrupti! Pariatur nam, aut blanditiis, repellat voluptates iusto sapiente?',
				img: require('../assets/shop-img/1.png'),
				gallery: [
					{ name: 'Nike Boots First', img: require('../assets/shop-img/1.png') },
					{ name: 'Nike Boots First', img: require('../assets/shop-img/2.png') },
					{ name: 'Nike Boots First', img: require('../assets/shop-img/3.png') }
				]
			},
			{
				id: 2,
				title: 'Nike Default',
				descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, hic, veniam rem quidem blanditiis tenetur. Quibusdam animi ex, numquam aspernatur odio, eos delectus. Quibusdam aperiam dolores fugit a facere iure.',
				img: require('../assets/shop-img/4.png'),
				gallery: [
					{ name: 'Nike Boots First', img: require('../assets/shop-img/4.png') },
					{ name: 'Nike Boots First', img: require('../assets/shop-img/5.png') },
					{ name: 'Nike Boots First', img: require('../assets/shop-img/6.png') }
				]
			},
			{
				id: 3,
				title: 'Nike Green',
				descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum beatae ea aut neque, sit soluta!',
				img: require('../assets/shop-img/7.png'),
				gallery: [
					{ name: 'Nike Boots First', img: require('../assets/shop-img/7.png') },
					{ name: 'Nike Boots First', img: require('../assets/shop-img/8.png') },
					{ name: 'Nike Boots First', img: require('../assets/shop-img/9.png') }
				]
			},
			{
				id: 4,
				title: 'Nike Street',
				descr: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum beatae ea aut neque, sit soluta!',
				img: require('../assets/shop-img/10.png'),
				gallery: [
					{ name: 'Nike Boots First', img: require('../assets/shop-img/11.png') },
					{ name: 'Nike Boots First', img: require('../assets/shop-img/12.png') }
				]
			}
		]
	},
	mutations: {},
	actions: {},
	getters: {
		getShopList(state) {
			return state.shopList
		},
		getProduct: (state) => (id) => {
			return state.shopList.find(product => product.id === +id)
		}
	}
}