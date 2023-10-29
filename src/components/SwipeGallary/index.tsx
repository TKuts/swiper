import "./index.scss"

interface SwipeGallaryProps {
	images: {
		url: string,
		description: string
	}[]
}

export const SwipeGallary = ({ images }: SwipeGallaryProps) => (
	<div className="gallary">
		<div className="gallary-container">
			{
				images.map((image, index) => (
					<div
						key={index}
						className="gallary-container-item"
					>
						<img
							src={image.url}
							alt={image.description}
							loading="lazy"
						/>
					</div>
				))
			}
		</div>
	</div>

)
