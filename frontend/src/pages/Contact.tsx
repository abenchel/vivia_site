import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLocale } from '@/lib/locale';

// steps will be read from translations at render time

const Contact = () => {
	const { t } = useLocale();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
	const [form, setForm] = useState({
		name: "",
		company: "",
		email: "",
		phone: "",
		message: "",
	});
	const baseUrl = (import.meta.env.VITE_BACKEND_URL as string | undefined) || "";

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
						{t('contact.badge')}
					</div>
					<h1 className="mt-4 text-3xl md:text-5xl font-semibold text-foreground">
						{t('contact.h1')}
					</h1>
					<p className="mt-3 max-w-2xl text-muted-foreground">
						{t('contact.intro')}
					</p>
					<div className="mt-8 flex flex-wrap gap-3">
						<Button asChild variant="cta" size="lg">
							<a href="#form">{t('contact.buttons.book')}</a>
						</Button>
						<Button asChild variant="outline" size="lg">
							<a href="/services">{t('contact.buttons.services')}</a>
						</Button>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 pb-12">
					<div className="grid gap-6 md:grid-cols-3">
						{[0,1,2].map((i) => (
							<Card key={i} className="border-white/10 bg-card/40 backdrop-blur">
								<CardHeader>
									<CardTitle className="text-xl">{t(`contact.steps.${i}.title`)}</CardTitle>
									<CardDescription>{t(`contact.steps.${i}.description`)}</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</section>

				<section id="form" className="mx-auto max-w-6xl px-6 pb-20">
					<div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
						<Card className="border-white/10 bg-card/40 backdrop-blur">
							<CardHeader>
								<CardTitle>{t('contact.form.talkTitle')}</CardTitle>
								<CardDescription>{t('contact.form.talkDesc')}</CardDescription>
							</CardHeader>
							<CardContent>
								<form className="grid gap-4" onSubmit={handleSubmit}>
									<div className="grid gap-2">
										<Label htmlFor="name">{t('contact.form.labels.name')}</Label>
										<Input
											id="name"
											name="name"
											placeholder={t('contact.form.placeholders.name')}
											value={form.name}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="company">{t('contact.form.labels.company')}</Label>
										<Input
											id="company"
											name="company"
											placeholder={t('contact.form.placeholders.company')}
											value={form.company}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="email">{t('contact.form.labels.email')}</Label>
										<Input
											id="email"
											name="email"
											type="email"
											placeholder={t('contact.form.placeholders.email')}
											value={form.email}
											onChange={handleChange}
											required
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="phone">{t('contact.form.labels.phone')}</Label>
										<Input
											id="phone"
											name="phone"
											type="tel"
											placeholder={t('contact.form.placeholders.phone')}
											value={form.phone}
											onChange={handleChange}
										/>
									</div>
									<div className="grid gap-2">
										<Label htmlFor="message">{t('contact.form.labels.message')}</Label>
										<Textarea
											id="message"
											name="message"
											placeholder={t('contact.form.placeholders.message')}
											rows={4}
											value={form.message}
											onChange={handleChange}
											required
										/>
									</div>
									<Button type="submit" variant="cta" size="lg" className="mt-2 w-full" disabled={isSubmitting}>
										{isSubmitting ? t('contact.form.submit.sending') : t('contact.form.submit.send')}
									</Button>
									{status === "success" && (
										<p className="text-sm text-emerald-400">{t('contact.form.success')}</p>
									)}
									{status === "error" && (
										<p className="text-sm text-red-400">
											{t('contact.form.error')}
										</p>
									)}
								</form>
							</CardContent>
						</Card>

						<Card className="border-white/10 bg-card/30 backdrop-blur">
							<CardHeader>
								<CardTitle>{t('contact.whatYouGet.title')}</CardTitle>
								<CardDescription>{t('contact.whatYouGet.desc')}</CardDescription>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3 text-sm text-muted-foreground">
									{[0,1,2,3].map((i) => (
										<li key={i}>• {t(`contact.whatYouGet.bullets.${i}`)}</li>
									))}
								</ul>
								<div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
									<p className="text-sm text-foreground">
										{t('contact.whatYouGet.quickReplyTitle')}
										<span className="block text-muted-foreground">{t('contact.whatYouGet.quickReplyNote')}</span>
									</p>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>

				<section className="mx-auto max-w-6xl px-6 pb-20">
					<Card className="border-white/10 bg-card/30 backdrop-blur">
						<CardHeader>
							<CardTitle>{t('contact.contactDirect.title')}</CardTitle>
							<CardDescription>{t('contact.contactDirect.desc')}</CardDescription>
						</CardHeader>
						<CardContent className="grid gap-4 text-sm text-muted-foreground md:grid-cols-3">
							<div>
								<p className="text-foreground font-medium">{t('contact.contactDirect.emailLabel')}</p>
								<a className="text-primary" href="mailto:contact@vivia.fr">contact@vivia.fr</a>
							</div>
							<div>
								<p className="text-foreground font-medium">{t('contact.contactDirect.phoneLabel')}</p>
								<a className="text-primary" href="tel:+33123456789">+33 1 23 45 67 89</a>
							</div>
							<div>
								<p className="text-foreground font-medium">{t('contact.contactDirect.locationLabel')}</p>
								<p>{t('contact.contactDirect.location')}</p>
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
