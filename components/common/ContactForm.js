"use client";

import * as Yup from "yup";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { getCurrentLocale } from "@/utils/locale";
import { useTranslations } from "next-intl";

const ContactSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string().required("Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  const t = useTranslations();
  const locale = getCurrentLocale()
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full space-y-6">
      <Formik
        initialValues={{ name: "", phone: "", email: "", message: "" }}
        validationSchema={ContactSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          try {
            await fetch(
              "https://formsubmit.co/ajax/hamidrezahz1999@gmail.com",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify(values),
              }
            );

            resetForm();
            setOpen(true);
          } catch (error) {
            console.error("Form submission error:", error);
            alert(t("contact_form_error"));
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <Label htmlFor="name">{t("name")}</Label>
              <Field
                as={Input}
                name="name"
                id="name"
                placeholder={t("name_placeholder")}
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-destructive text-sm mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">{t("phone")}</Label>
              <Field
                as={Input}
                name="phone"
                id="phone"
                placeholder={t("phone_placeholder")}
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-destructive text-sm mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">{t("email")}</Label>
              <Field
                as={Input}
                type="email"
                name="email"
                id="email"
                placeholder={t("email_placeholder")}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-destructive text-sm mt-1"
              />
            </div>

            <div>
              <Label htmlFor="message">{t("message")}</Label>
              <Field
                as={Textarea}
                name="message"
                id="message"
                placeholder={t("message_placeholder")}
                rows={5}
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-destructive text-sm mt-1"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("sending") : t("send_message")}
            </Button>
          </Form>
        )}
      </Formik>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <div className="hidden" />
        </AlertDialogTrigger>
        <AlertDialogContent className="w-80 max-w-[350px] bg-background rounded-2xl border-border">
          <AlertDialogHeader>
            <AlertDialogTitle>{t("contact_success_title")}</AlertDialogTitle>
            <AlertDialogDescription>
              {t("contact_success_description")}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-row gap-2 items-center justify-between">
            <AlertDialogCancel className="w-auto h-full px-4 py-2 bg-background hover:bg-muted hover:text-primary text-foreground">
              {t("close")}
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Link
                href={`/${locale}`}
                className="w-auto h-full px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {t("homepage")}
              </Link>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ContactForm;
