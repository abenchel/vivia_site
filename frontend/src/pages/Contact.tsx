import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const steps = [
	{
		title: "30 minutes avec un expert",
		description: "Un échange structuré pour comprendre vos objectifs et vos irritants opérationnels.",
	},
	{
		title: "Audit express des processus",
		description: "Identification des 3 gains rapides et des leviers d’automatisation prioritaires.",
	},
	{
		title: "Plan d’action clair",
		description: "Une synthèse simple avec priorités, effort estimé et impact attendu.",
	},
];

const Contact = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
	const [form, setForm] = useState({
		name: "",
		company: "",
		email: "",
		phone: "",
		message: "",
	});
	// Set your backend URL directly for Cloudflare deployment
	const baseUrl = "https://your-backend-url.com";

	const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = event.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (!baseUrl) {
			setStatus("error");
			return;
		}
		setIsSubmitting(true);
		setStatus("idle");
		try {
			const response = await fetch(`${baseUrl}/api/lead`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...form,
					source: "contact",
					submittedAt: new Date().toISOString(),
				}),
			});

			if (!response.ok) {
				throw new Error("Request failed");
			}

			setStatus("success");
			setForm({ name: "", company: "", email: "", phone: "", message: "" });
		} catch (error) {
			setStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-background">
			<Navbar />
			<main className="pt-24 md:pt-28">
				<section className="mx-auto max-w-6xl px-6 py-10">
					<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
						Contact
					</div>
					<h1 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground">
						Réserver un diagnostic productivité
					</h1>
					<p className="mt-3 max-w-2xl text-muted-foreground">
						Un format court et clair pour identifier les meilleures opportunités d’automatisation et de gains opérationnels.
					</p>
					<div className="mt-8 flex flex-wrap gap-3">
						<Button asChild variant="cta" size="lg">
							<a href="#form">Réserver un rendez-vous</a>
						</Button>
						<Button asChild variant="outline" size="lg">
							<a href="/services">Voir nos services</a>
						</Button>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 pb-12">
					<div className="grid gap-6 md:grid-cols-3">
						{steps.map((step) => (
							<Card key={step.title} className="border-white/10 bg-card/40 backdrop-blur">
								<CardHeader>
									<CardTitle className="text-xl">{step.title}</CardTitle>
									<CardDescription>{step.description}</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</section>

				<section id="form" className="mx-auto max-w-6xl px-6 pb-20">
					<div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
						<Card className="border-white/10 bg-card/40 backdrop-blur">
							<CardHeader>
								<CardTitle>Parlons de votre contexte</CardTitle>
								<CardDescription>Remplissez ce formulaire, nous revenons vers vous rapidement.</CardDescription>
							</CardHeader>
							<CardContent>
								<form className="grid gap-4" onSubmit={handleSubmit}>
									<div className="grid gap-2">
										<Label htmlFor="name">Nom complet</Label>
										<Input
											id="name"
											name="name"
											placeholder="Votre nom"
											value={form.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="company">Entreprise</Label>
										<Input
											id="company"
											name="company"
											placeholder="Nom de votre entreprise"
											value={form.company}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="email">Email professionnel</Label>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder="vous@entreprise.com"
											value={form.email}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="phone">Téléphone</Label>
										<Input
											id="phone"
											name="phone"
											type="tel"
											placeholder="+33 6 00 00 00 00"
											value={form.phone}
											onChange={handleChange}
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="message">Objectif principal</Label>
										<Textarea
											id="message"
											name="message"
											placeholder="Ex: automatiser le support, centraliser la data..."
											rows={4}
											value={form.message}
											onChange={handleChange}
											required
										/>
									</div>
									<Button type="submit" variant="cta" size="lg" className="mt-2 w-full" disabled={isSubmitting}>
										{isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
									</Button>
									{status === "success" && (
										<p className="text-sm text-emerald-400">Merci, votre demande a bien été envoyée.</p>
									)}
									{status === "error" && (
										<p className="text-sm text-red-400">
											Impossible d’envoyer pour le moment. Vérifiez la configuration et réessayez.
										</p>
									)}
								</form>
							</CardContent>
						</Card>

						<Card className="border-white/10 bg-card/30 backdrop-blur">
							<CardHeader>
								<CardTitle>Ce que vous obtenez</CardTitle>
								<CardDescription>Un diagnostic clair, actionnable, sans engagement.</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3 text-sm text-muted-foreground">
									<li>• Priorités d’automatisation adaptées à vos équipes</li>
									<li>• Estimation des gains de temps et d’impact</li>
									<li>• Recommandations outils & intégrations</li>
									<li>• Prochaine étape simple et planifiée</li>
								</ul>
								<div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
									<p className="text-sm text-foreground">
										Besoin d’un créneau rapide ?
										<span className="block text-muted-foreground">Nous répondons sous 24h ouvrées.</span>
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 pb-20">
					<Card className="border-white/10 bg-card/30 backdrop-blur">
						<CardHeader>
							<CardTitle>Contact direct</CardTitle>
							<CardDescription>Si vous préférez un contact rapide.</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-4 text-sm text-muted-foreground md:grid-cols-3">
							<div>
								<p className="text-foreground font-medium">Email</p>
								<a className="text-primary" href="mailto:contact@vivia.fr">contact@vivia.fr</a>
							</div>
							<div>
								<p className="text-foreground font-medium">Téléphone</p>
								<a className="text-primary" href="tel:+33123456789">+33 1 23 45 67 89</a>
							</div>
							<div>
								<p className="text-foreground font-medium">Localisation</p>
								<p>Paris, France</p>
							</div>
						</CardContent>
					</Card>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default Contact;
