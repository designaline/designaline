"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { contact, createWhatsAppUrl } from "@/config/contact";
import { useTheme } from "@/contexts/ThemeContext";

const services = ["Architecture", "Interior Design", "Architecture + Interiors", "Renovation", "Other"] as const;

type FormValues = {
  name: string;
  phone: string;
  email: string;
  location: string;
  service: string;
  timeline: string;
  details: string;
};

type FormErrors = Partial<Record<keyof FormValues | "submit", string>>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  location: "",
  service: "",
  timeline: "",
  details: "",
};

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const phoneDigits = values.phone.replace(/\D/g, "");

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (phoneDigits.length < 7 || phoneDigits.length > 15) errors.phone = "Enter a valid phone number.";
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email)) errors.email = "Enter a valid email address or leave this blank.";
  if (!values.location.trim()) errors.location = "Please enter the project location.";
  if (!values.service) errors.service = "Please choose a service.";
  if (!values.details.trim()) errors.details = "Please share a few details about your project.";
  return errors;
}

function buildLeadMessage(values: FormValues) {
  return [
    "Hi Design A'Line, I'm planning a project and would like to discuss your services.",
    "",
    `Name: ${values.name.trim()}`,
    `Phone: ${values.phone.trim()}`,
    values.email ? `Email: ${values.email.trim()}` : null,
    `Project location: ${values.location.trim()}`,
    `Service required: ${values.service}`,
    values.timeline ? `Expected start: ${values.timeline}` : null,
    `Project details: ${values.details.trim()}`,
  ].filter(Boolean).join("\n");
}

export default function Contact() {
  const { isDark } = useTheme();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fieldClass = `w-full rounded-lg border px-4 py-3 transition-colors focus:border-[#1B6B36] focus:ring-2 focus:ring-[#1B6B36]/20 ${isDark ? "border-gray-600 bg-gray-900 text-white placeholder:text-gray-500" : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"}`;

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined, submit: undefined }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const whatsappWindow = window.open("", "_blank");
    if (!whatsappWindow) {
      setErrors({ submit: "WhatsApp was blocked by your browser. Use the WhatsApp or Call option below instead." });
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    whatsappWindow.opener = null;
    window.setTimeout(() => {
      whatsappWindow.location.href = createWhatsAppUrl(buildLeadMessage(values));
      setIsSubmitting(false);
    }, 350);
  }

  const contactItems = [
    { icon: Phone, label: "Phone", value: contact.phoneDisplay, href: contact.phoneHref },
    { icon: Mail, label: "Email", value: contact.email, href: contact.emailHref },
    { icon: MapPin, label: "Studio", value: contact.address, href: contact.mapsHref },
    { icon: Clock, label: "Business Hours", value: "Mon–Fri, 9 AM–6 PM IST", href: undefined },
  ];

  return (
    <motion.section id="contact" className={`py-20 ${isDark ? "bg-gray-900" : "bg-white"}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.1 }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-[#1B6B36]/20 bg-[#1B6B36]/10 px-4 py-2 text-sm font-medium">Book a Consultation</span>
          <h2 className={`mb-5 text-4xl font-bold lg:text-5xl ${isDark ? "text-white" : "text-gray-900"}`}>Tell Us About Your <span className="text-[#1B6B36]">Project</span></h2>
          <p className={`text-lg leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>Share the essentials below. We&apos;ll prepare a WhatsApp message for you to review and send directly to Design A&apos;Line.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <h3 className={`mb-6 text-2xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>Contact Information</h3>
            <div className="space-y-6">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="rounded-lg bg-[#1B6B36]/10 p-3 text-[#1B6B36]"><Icon size={20} aria-hidden="true" /></span>
                  <div>
                    <h4 className={`mb-1 font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{label}</h4>
                    {href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className={`leading-relaxed hover:text-[#1B6B36] ${isDark ? "text-gray-300" : "text-gray-600"}`}>{value}</a> : <p className={isDark ? "text-gray-300" : "text-gray-600"}>{value}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`rounded-2xl p-6 sm:p-8 ${isDark ? "border border-gray-700 bg-gray-800" : "bg-gray-50"}`}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="lead-name" label="Name" required error={errors.name}><input id="lead-name" name="name" autoComplete="name" value={values.name} onChange={(e) => updateField("name", e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "lead-name-error" : undefined} /></Field>
                <Field id="lead-phone" label="Phone Number" required error={errors.phone}><input id="lead-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={(e) => updateField("phone", e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "lead-phone-error" : undefined} /></Field>
                <Field id="lead-email" label="Email" hint="Optional" error={errors.email}><input id="lead-email" name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => updateField("email", e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "lead-email-error" : undefined} /></Field>
                <Field id="lead-location" label="Project Location" required error={errors.location}><input id="lead-location" name="location" autoComplete="address-level2" placeholder="City or locality" value={values.location} onChange={(e) => updateField("location", e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? "lead-location-error" : undefined} /></Field>
                <Field id="lead-service" label="Service Required" required error={errors.service}><select id="lead-service" name="service" value={values.service} onChange={(e) => updateField("service", e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.service)} aria-describedby={errors.service ? "lead-service-error" : undefined}><option value="">Select a service</option>{services.map((service) => <option key={service}>{service}</option>)}</select></Field>
                <Field id="lead-timeline" label="Expected Project Start" hint="Optional"><select id="lead-timeline" name="timeline" value={values.timeline} onChange={(e) => updateField("timeline", e.target.value)} className={fieldClass}><option value="">Select a timeline</option><option>Within 3 months</option><option>3–6 months</option><option>6–12 months</option><option>More than 12 months</option><option>Just exploring</option></select></Field>
              </div>

              <div className="mt-5"><Field id="lead-details" label="Project Details" required error={errors.details}><textarea id="lead-details" name="details" rows={5} placeholder="Project type, approximate size, and what you would like help with" value={values.details} onChange={(e) => updateField("details", e.target.value)} className={fieldClass} aria-invalid={Boolean(errors.details)} aria-describedby={errors.details ? "lead-details-error" : undefined} /></Field></div>

              {errors.submit && <div role="alert" className="mt-5 rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-800"><p>{errors.submit}</p><div className="mt-3 flex flex-wrap gap-4 font-semibold"><a href={createWhatsAppUrl()} target="_blank" rel="noreferrer" className="underline">Open WhatsApp</a><a href={contact.phoneHref} className="underline">Call {contact.phoneDisplay}</a></div></div>}

              <p className={`mt-5 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>WhatsApp will open with your details. Review the message, then tap Send—nothing is submitted automatically.</p>
              <button type="submit" disabled={isSubmitting} className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#1B6B36] px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-[#155a2e] disabled:cursor-wait disabled:opacity-70">{isSubmitting ? "Preparing WhatsApp…" : "Continue to WhatsApp"}{isSubmitting ? <MessageCircle className="ml-2" size={20} aria-hidden="true" /> : <Send className="ml-2" size={20} aria-hidden="true" />}</button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function Field({ id, label, required, hint, error, children }: { id: string; label: string; required?: boolean; hint?: string; error?: string; children: ReactNode }) {
  return <div><label htmlFor={id} className="mb-2 block text-sm font-medium">{label} {required && <span aria-hidden="true">*</span>}{hint && <span className="ml-1 font-normal text-gray-500">({hint})</span>}</label>{children}{error && <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600">{error}</p>}</div>;
}
