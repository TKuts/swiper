import { SwipeGallary } from "./components/SwipeGallary"

const images = [
	{ url: "/images/01.jpg", description: "img01" },
	{ url: "/images/02.jpg", description: "img02" },
	{ url: "/images/03.jpg", description: "img03" },
	{ url: "/images/04.jpg", description: "img04" },
	{ url: "/images/05.jpg", description: "img05" },
]

function App() {
	return (
		<div className="container">
			<h1>Swiper Gallary</h1>
			<SwipeGallary images={images} />
		</div>
	)
}

export default App
