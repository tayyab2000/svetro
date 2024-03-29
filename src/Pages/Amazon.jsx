import { Consult, Header, ServiceHeader, Faq } from '../container';
import { images } from '../constants';
import { ServiceCard, ServiceDetail } from '../components';
import { motion } from 'framer-motion';
const amazon = {
	title: 'Amazon Private Label',
	subtitle:
		"Private labels Brand building, the advent of e-commerce giants like Amazon, are a new way for businesses to generate money. All it takes are Expertise to invest on right product on right Time. In an overly crowded and competitive sector, we help businesses create loyalty and trust. In less than 5 years, we've grown our businesses to over $10 million in yearly sales of our Amazon private label Brands, thanks to our thought-provoking strategies and innovative teams at Svetro.",
	btntext: 'Get a free Consultation',
	img: images.amazonimg,
};
const serviceData = [
	{
		title: 'Svtero Blitz Ranking (SBR)',
		subtitle:
			'As of current statistics around 75.1 million products have been sold on Amazon in previous year. The question in your mind may arise if I am coming with new product at such a marketplace how am I gonna rank and compete in such huge market ? We have the answer, Svetro Blitz Ranking (SBR) strategy which is applied by our expert team and consistently developed from the past 3 years and have an incredible results  for our clients resulting a perfect record of 99.9% accuracy.',
		img: images.blitz,
	},

	{
		title: 'Fast ROI Achievement',
		subtitle:
			"The main goal of every investment has been to achieve fast Return on Investment. The faster the ROI the higher is the probability of a success in a business. At Svtero we have generated a revenue of $1.5 million in previous year for our current clients. For customers of all sizes, from solo-preneur to partnerships to startups to small companies to enterprises, we've taken all the things we've learned, the mistakes we've made, and cut the fat to produce this powerful platform for marketing and brand creation. To keep expenses down and guarantee outcomes, we stick to proven and tested procedures.",
		img: images.roi,
		order: true,
	},
	{
		title: 'Out of the Box Sourcing',
		subtitle:
			'The backbone of global business is strong sourcing which enhance your net profit margins in a product. Svetro has cracked that formula for you, we have a specialized team of global sourcing around the world and contacts with verified traders and manufacturers in China, Pakistan and South, East Asia to get reasonable prices for our client’s products and bring them appealing profit margins.',
		img: images.sourcingimg,
	},
];
const headerData = {
	title: 'Our Amazon Private Label package comes with a lot of features',
	subtitle:
		'Lorem ipsum a lot of text and there is so much that we have to do to get this to look the way we want it to. This is placeholder text describing this visitor to this site.',
};

const wholeSale = {
	title: 'Amazon FBA Wholesale',
	subtitle:
		'Its all about reselling the successful brands earning on Amazon. FBA wholesale is business model in which We look for pre-existing brand items and contact their distributors or brands to obtain permission to resale their products on our Amazon stores. Svetro has established a prominent name in Wholesale business of Amazon holding 200+ accounts of our clients successfully raising a revenue of $3+ millions.',
};

const fbaData = [
	{
		title: 'Wholesale The Svetro way',
		subtitle:
			'We as an E-commerce company have a different unique approach of doing FBA wholesale than other typical service providers. Our R&D team has been exploring and generating new ways to execute incredible strategies regarding Product Research, Brand Research and Brand approval in the most efficient form it possibly can be. The continuous development in strategies and innovation made us enable to maintain our profit margins we have been delivering to our clients over the years.',
		img: images.wholesale,
		order: true,
	},
	{
		title: 'Expanding profit margins ',
		subtitle:
			'The talk of the table about wholesale has always been its low profit margins in comparison with Amazon Private Label. At Svetro we keep satisfying results a priority for our clients, that’s why we did research and studied numerous case study to tackle the challenge of profit margins Amazon wholesale Business model. So, we cracked the formula and brought some techniques and strategies which expanded our profit margins relatively comparable with Amazon Private Label. Arranging a reliable and much more affordable 3pl services against FBA services. Long-term dominancy Strategy of listings. Some our most used and successful strategies used by our team to sky-rocket the profit margins. ',
		img: images.profit,
	},
];

const amazonService = [
	{
		title: 'Hunting',
		subtitle:
			'A full-fledge research and analysis for set time frame of a product category to get a perfect product to launch.',
		icon: images.hunting,
	},
	{
		title: 'Sourcing',
		subtitle:
			'Using our contacts and communication skills, we source your product from China or around the globe with highest profit margins.',
		icon: images.sourcing,
	},
	{
		title: 'Account Creation',
		subtitle:
			'Creating Amazon account is a critical stage because of Amazon strict policy and guidelines. Our team make it to the perfection.',
		icon: images.account,
	},
	{
		title: 'Listing',
		subtitle:
			'We have expert Amazon content writers to make your listing with evaluation score of 10/10.',
		icon: images.listing,
	},
	{
		title: 'Listing optimization',
		subtitle:
			'We have experienced experts to optimize your listing against Amazon algorithm for guaranteed boosting of organic sales ',
		icon: images.aoptimize,
	},
	{
		title: 'Product Launch',
		subtitle:
			'We make sure to make this moment for our client as perfect and special as possible to be the long-running successful brand.',
		icon: images.launch,
	},
	{
		title: 'PPC',
		subtitle:
			'Pay-per-click campaigns that provide an optimal ROI for your business. This comes in our speciality.',
		icon: images.ppc,
	},
	{
		title: 'Account Management',
		subtitle:
			'Maintaining and management of account actively by experts to make achieve long term financial goals with sustainability.',
		icon: images.manage,
	},
];

const Amazon = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Header
				title={amazon.title}
				subtitle={amazon.subtitle}
				btnText={amazon.btntext}
				img={amazon.img}
			/>
			<ServiceHeader title={headerData.title} subtitle={headerData.subtitle} />
			<div className='container serviceSection__cards'>
				{amazonService.map((data, i) => (
					<motion.div
						key={i}
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						transition={{ duration: 0.3, delay: i * 0.3 }}
						variants={{
							visible: { opacity: 1, translateX: 0, translateY: 0 },
							hidden: { opacity: 0, translateX: -50, translateY: -50 },
						}}
					>
						<ServiceCard
							key={i}
							title={data.title}
							subtitle={data.subtitle}
							link='/contact'
							icon={data.icon}
						/>
					</motion.div>
				))}
			</div>

			{serviceData.map((data, i) => (
				<ServiceDetail
					key={i}
					title={data.title}
					subtitle={data.subtitle}
					img={data.img}
					order={data.order}
				/>
			))}

			<ServiceHeader title={wholeSale.title} subtitle={wholeSale.subtitle} />

			{fbaData.map((data, i) => (
				<ServiceDetail
					key={i}
					title={data.title}
					subtitle={data.subtitle}
					img={data.img}
					order={data.order}
				/>
			))}

			<Faq />
			<Consult />
		</motion.section>
	);
};

export default Amazon;
