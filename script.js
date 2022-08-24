class Post {
	constructor(title, link, type, img) {
		this.title = title;
		this.link = link;
		this.type = type;
		this.img = img;
	}
}


const app = new Vue({
	el: '#app',
	data: {
		search: '',
		postList: [
			new Post(
				'Phantom',
				'https://phantom.app/',
				'wallet',
				'https://phantom.app/apple-touch-icon.png'),

			new Post(
				'Decent.land',
				'https://Decent.land',
				'infrastructure',
				'https://www.decent.land/favicon.ico'),

			new Post(
				'Nijatoes',
				'https://nijatoes.com',
				'personal blog',
				'https://nijatoes.com/ico/apple-icon-152x152.png'),

			new Post(
				'Ultiverse',
				'https://www.ultiverse.io/',
				'web3',
				'https://www.ultiverse.io/favicon.53fc509c.ico'),

			new Post(
				'Port3',
				'https://port3.io',
				'web3',
				'https://port3.io/favicon.ico'),

			new Post(
				'Crust',
				'https://crust.network/',
				'Web3 Storage',
				'https://crust.network/favicon.ico'),

			new Post(
				'Rss3',
				'https://rss3.io/',
				'infrastructure',
				'https://rss3.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F96a70338-2fd1-4aec-9149-37d5925f5b1f%2FRSS3.png?table=block&id=e033b87c-dc65-478b-8031-24040ec1bb38&spaceId=65d56479-c868-4cdb-930c-ac594e1f032c&width=720&userId=&cache=v2'),

			new Post(
				'Cyberconnect',
				'https://cyberconnect.me/',
				'infrastructure',
				'https://cyberconnect.me//favicon.ico'),

			new Post(
				'Showme',
				'https://showme.fan/',
				'NFT',
				'https://showme.fan/favicon.ico'),

			new Post(
				'Nftscan',
				'https://www.nftscan.com/',
				'NFT',
				'https://www.nftscan.com/favicon.png'),

			new Post(
				'Matters news',
				'https://matters.news/',
				'infrastructure',
				'https://assets-next.matters.news/_next/static/media/favicon-64x64.721b2438.png'),

			new Post(
				'Metaopus',
				'https://metaopus.co/',
				'NFT',
				'https://metaopus.co/static/images/favicon.ico'),

			new Post(
				'BCA network',
				'https://bca.network/',
				'art-tech brand',
				'https://bca.network/favicon.ico'),

		]
	},

//<-------------------------list end------------------------->>
//<------------------add your website above------------------>>


	computed: {
		filteredList() {
			return this.postList.filter(post => {
				return post.title.toLowerCase().includes(this.search.toLowerCase());
			});
		}
	}
});