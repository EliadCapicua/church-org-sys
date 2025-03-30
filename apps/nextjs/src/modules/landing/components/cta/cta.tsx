import { Button } from "@acme/ui/button";

export default function Cta() {
	return (
		<section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
			<div className="container lg:grid lg:grid-cols-2 place-items-center">
				<div className="lg:col-start-1">
					<h2 className="text-3xl md:text-4xl font-bold ">
						Unete a nuestro
						<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
							{" "}
							Programa de modelo celular{" "}
						</span>
						para la iglesia
					</h2>
					<p className="text-muted-foreground text-lg mt-4 mb-8 lg:mb-0">
						La Iglesia de Cristo es un organismo vivo y en crecimiento. La
						estrategia celular es una herramienta poderosa para ayudar a las
						iglesias a crecer y multiplicarse. Con el programa celular, cada
						miembro de la iglesia se convierte en un testigo activo del amor de
						Dios, llevando el mensaje de esperanza a cada rincón de su
						comunidad.
					</p>
				</div>

				<div className="space-y-4 lg:col-start-2">
					<Button className="w-full md:mr-4 md:w-auto">
						Solicitar un usuario
					</Button>
					<Button variant="outline" className="w-full md:w-auto">
						Ingresar en el sistema
					</Button>
				</div>
			</div>
		</section>
	);
}
