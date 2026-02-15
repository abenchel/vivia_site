import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

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

const Diagnostic = () => {
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
          export { default } from "./Contact";
        },
