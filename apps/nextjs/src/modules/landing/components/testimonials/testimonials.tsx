import { Avatar, AvatarFallback, AvatarImage } from "@acme/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@acme/ui/card";

interface TestimonialProps {
	image: string;
	name: string;
	comment: string;
}

const testimonials: TestimonialProps[] = [
	{
		image: "https://github.com/shadcn.png",
		name: "El vacío que el éxito no llenó",
		comment:
			"Siempre pensé que tener éxito en mi carrera era todo lo que necesitaba. Trabajé duro, logré mis metas, compré una casa, viajé... pero al final del día, sentía un vacío que nada podía llenar. Intenté muchas cosas: meditación, entretenimiento, relaciones pasajeras... pero nada funcionó. Un día, un amigo me invitó a la iglesia. No esperaba nada, pero cuando escuché la palabra de Dios, algo en mi corazón se quebró. Sentí paz por primera vez en años. Ahora entiendo que lo que faltaba en mi vida era Dios.",
	},
	{
		image: "https://github.com/shadcn.png",
		name: "En medio de la ansiedad y la depresión",
		comment:
			"La ansiedad me consumía. No podía dormir, mi mente estaba llena de pensamientos negativos, y sentía que la vida no tenía sentido. Busqué ayuda profesional, y aunque fue útil, sentía que aún faltaba algo más. Un día, desesperado, oré por primera vez en mucho tiempo. No sabía qué esperar, pero sentí un alivio inmediato. Empecé a leer la Biblia, a confiar en Dios y a rodearme de personas que también habían encontrado esperanza en Él. Hoy, mi ansiedad no me domina, porque sé que Dios cuida de mí.",
	},

	{
		image: "https://github.com/shadcn.png",
		name: "Un milagro en mi familia",
		comment:
			"Mi esposo fue diagnosticado con una enfermedad terminal. Los médicos no nos daban esperanza. Lloramos, nos desesperamos, pero en ese momento decidimos aferrarnos a la fe. Oramos sin cesar, nuestra familia se unió en oración, y aunque parecía imposible, Dios obró un milagro. Meses después, en un examen de rutina, los médicos no encontraron rastro de la enfermedad. No tengo dudas de que Dios escucha y responde. Desde ese día, nuestra vida cambió por completo.",
	},
	{
		image: "https://github.com/shadcn.png",
		name: "Un encuentro en la cárce",
		comment:
			"Nunca pensé en Dios hasta que terminé en la cárcel. Mis malas decisiones me llevaron allí, y al principio sentí que mi vida había acabado. Pero dentro de la prisión conocí a un grupo de creyentes que compartían el Evangelio con los internos. Escuchar sobre el amor y el perdón de Dios me hizo llorar. Me di cuenta de que aún había esperanza para mí. Acepté a Cristo, y aunque sigo pagando por mis errores, hoy tengo paz y un propósito. Dios me dio una nueva oportunidad.",
	},
	{
		image: "https://github.com/shadcn.png",
		name: "Restaurando un matrimonio roto",
		comment:
			"Mi matrimonio estaba a punto de terminar. Mi esposa y yo apenas nos hablábamos, el amor parecía haberse apagado, y el divorcio era inminente. Fue en ese momento que decidimos darle una última oportunidad a Dios. Buscamos ayuda en la iglesia, empezamos a orar juntos y a aplicar los principios de la Biblia en nuestra relación. Poco a poco, Dios sanó nuestro matrimonio. Hoy no solo estamos juntos, sino que nuestro amor es más fuerte que nunca",
	},
	{
		image: "https://github.com/shadcn.png",
		name: "De la soledad a una nueva familia",
		comment:
			"Siempre me sentí solo. Tenía amigos, pero en los momentos difíciles nadie estaba realmente ahí para mí. Un día, alguien me invitó a un grupo de estudio bíblico. Fui sin muchas expectativas, pero encontré algo que nunca había tenido: una familia en la fe. No solo aprendí de Dios, sino que también encontré personas que me amaban genuinamente. Hoy ya no me siento solo, porque sé que Dios y su iglesia están conmigo.",
	},
];

export default function Testimonials() {
	return (
		<section id="testimonials" className="container py-24 sm:py-32">
			<h2 className="text-3xl md:text-4xl font-bold">
				Descubra por qué hoy{" "}
				<span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
					las personas{" "}
				</span>
				siguen buscando de Dios
			</h2>

			<p className="text-lg text-muted-foreground pt-4 pb-8">
				Cada uno de estos testimonios refleja cómo, en diferentes
				circunstancias, las personas siguen buscando a Dios porque encuentran en
				Él paz, restauración, propósito y esperanza.
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
				{testimonials.map(({ image, name, comment }: TestimonialProps) => (
					<Card
						key={name}
						className="max-w-md md:break-inside-avoid overflow-hidden"
					>
						<CardHeader className="flex flex-row items-center gap-4 pb-2">
							<Avatar>
								<AvatarImage alt="" src={image} />
								<AvatarFallback>OM</AvatarFallback>
							</Avatar>

							<div className="flex flex-col">
								<CardTitle className="text-lg">{name}</CardTitle>
							</div>
						</CardHeader>

						<CardContent className="text-sm italic">
							&quot;{comment}&quot;
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
