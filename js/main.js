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
				'./favicons/phantom.app/apple-touch-icon.png'),

			new Post(
				'Decent.land',
				'https://Decent.land',
				'infrastructure',
				'./favicons/decent.land/favicon.ico'),

			new Post(
				'Nijatoes',
				'https://nijatoes.com',
				'personal blog',
				'./favicons/nijatoes.com/apple-icon-152x152.png'),

			new Post(
				'Ultiverse',
				'https://www.ultiverse.io/',
				'web3',
				'./favicons/ultiverse.io/favicon.53fc509c.ico'),

			new Post(
				'Port3',
				'https://port3.io',
				'web3',
				'./favicons/port3.io/favicon.ico'),

			new Post(
				'Crust',
				'https://crust.network/',
				'Web3 Storage',
				'./favicons/crust.network/favicon.ico'),

			new Post(
				'Rss3',
				'https://rss3.io/',
				'infrastructure',
				'./favicons/rss3.notion.site/RSS3.png'),

			new Post(
				'Cyberconnect',
				'https://cyberconnect.me/',
				'infrastructure',
				'./favicons/cyberconnect.me/favicon.ico'),

			new Post(
				'Showme',
				'https://showme.fan/',
				'NFT',
				'./favicons/showme.fan/favicon.ico'),

			new Post(
				'Nftscan',
				'https://www.nftscan.com/',
				'NFT',
				'./favicons/nftscan.com/favicon.png'),

			new Post(
				'Matters news',
				'https://matters.news/',
				'infrastructure',
				'./favicons/assets-next.matters.news/favicon-64x64.721b2438.png'),

			new Post(
				'Metaopus',
				'https://metaopus.co/',
				'NFT',
				'./favicons/metaopus.co/favicon.ico'),

			new Post(
				'BCA network',
				'https://bca.network/',
				'art-tech brand',
				'./favicons/bca.network/favicon.ico'),
			
			new Post(
				'Koii Network',
				'https://www.koii.network/',
				'web3',
				'./favicons/koii.network/KoiiNetwork-logo_64.svg'),
			
			new Post(
				'Permacast',
				'https://permacast.dev/#/',
				'podcast',
				'./favicons/permacast.dev/favicon.ico'),

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

document.getElementById("year").innerHTML = (new Date().getFullYear());
