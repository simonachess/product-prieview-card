export default function App() {
	return (
		<div className="h-screen flex justify-center items-start md:items-center px-4 py-7 md:px-0 md:py-0">
			<div className="flex flex-col sm:flex-row w-full md:w-[600px] md:h-[450px] bg-[#FFFFFF] rounded-xl">
				<header className="w-full md:w-1/2 flex justify-center">
					<img src="/img/image-product-desktop.jpg" alt="perfume" className="rounded-t-xl md:rounded-bl-xl md:rounded-tl-xl md:rounded-t-none md:shadow-md"
						srcSet="/img/image-product-mobile.jpg 686w, /img/image-product-desktop.jpg 900w"
						sizes="(max-width: 640px) 686px, 900px"/>
				</header>	
				<main className="w-full md:w-1/2 p-6 md:p-7">
					<span className="uppercase font-montserrat tracking-[5px] text-xs">Perfume</span>
					<h1 className="text-[32px] font-bold font-body text-[#1C232B] mb-4 md:mb-6 mt-3 md:mt-5 leading-8">
						Gabrielle Essence Eau De Parfum
					</h1>
					<p className="text-[#6C7289] font-montserrat text-sm leading-[23px] font-medium mb-6">
						A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
					</p>
					<div className="flex items-center mb-5 md:mb-7">
						<span className="text-[#3D8168] text-3xl font-bold mr-6 font-body">
							$149.99
						</span>
						<span className="font-montserrat line-through text-[#6C7289]">
							$169.99
						</span>
					</div>
					<button className="bg-[#3D8168] text-[#FFFFFF] w-full rounded-lg p-3 font-bold flex justify-center items-center hover:bg-[#1A4032]"
						onClick={()=>{}}>
							<img src="/img/icon-cart.svg" width="15" height="15" alt="cart"></img>
							<span className="ml-2.5">Add to Cart</span>
					</button>
				</main>
			</div>
		</div>
	)
}

