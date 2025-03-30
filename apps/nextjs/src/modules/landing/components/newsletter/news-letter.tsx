import { Button } from "@acme/ui/button";
import { Input } from "@acme/ui/input";

export default function Newsletter() {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<section id="newsletter">
			<hr className="w-11/12 mx-auto" />

			<div className="container py-24 sm:py-32">
				<h3 className="text-center text-4xl md:text-5xl font-bold">
					Únase a nuestro diario{" "}
					<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
						Boletín informativo
					</span>
				</h3>
				<p className="text-xl text-muted-foreground text-center mt-4 mb-8">
					Reciba las últimas actualizaciones y noticias de nuestro equipo
					semanalmente.
				</p>

				<form
					className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2"
					onSubmit={handleSubmit}
				>
					<Input
						placeholder="email"
						className="bg-muted/50 dark:bg-muted/80 "
						aria-label="email"
					/>
					<Button>Suscríbete</Button>
				</form>
			</div>

			<hr className="w-11/12 mx-auto" />
		</section>
	);
}
