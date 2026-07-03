"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Github, Globe2, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import SectionContainer from "@/components/layout/section-container";
import SectionHeader from "@/components/layout/section-header";

const formSchema = z.object({
  firstName: z.string().trim().min(1).max(20),
  lastName: z.string().trim().min(1).max(20),
  email: z.string().email(),
  subject: z.string().trim().min(1),
  message: z.string().trim().min(2).max(255)
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "Request a Demo",
      message: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { firstName, lastName, email, subject, message } = values;
    window.location.href = `mailto:admin@taurusai.io?subject=${subject}&body=Hello, I am ${firstName} ${lastName} (${email}).%0D%0A%0D%0A${message}`;
  }

  return (
    <SectionContainer id="contact">
      <SectionHeader
        subTitle="Contact"
        title="Ready to Transform Your Enterprise?"
        description="Get a personalized demo of our quantum-safe platform and see how Taurus AI can accelerate your digital transformation."
      />
      <section className="mx-auto grid max-w-screen-lg grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <div className="flex flex-col gap-6 *:border *:p-6">
            <div className="bg-muted">
              <div className="mb-4 flex items-center gap-3">
                <Building2 className="text-primary size-4" />
                <div className="font-bold">Headquarters</div>
              </div>
              <div className="text-muted-foreground">Ontario, Canada</div>
            </div>

            <div className="bg-muted">
              <div className="mb-4 flex items-center gap-3">
                <Globe2 className="text-primary size-4" />
                <div className="font-bold">Global Offices</div>
              </div>
              <div className="text-muted-foreground">Dubai, UAE · Wyoming, USA · India</div>
            </div>

            <div className="bg-muted">
              <div className="mb-4 flex items-center gap-3">
                <Mail className="text-primary size-4" />
                <div className="font-bold">Email us</div>
              </div>
              <div className="text-muted-foreground">
                <a href="mailto:admin@taurusai.io" className="hover:text-primary">
                  admin@taurusai.io
                </a>
              </div>
            </div>

            <div className="bg-muted">
              <div className="mb-4 flex items-center gap-3">
                <Github className="text-primary size-4" />
                <div className="font-bold">Open Source</div>
              </div>
              <div className="text-muted-foreground">
                <a
                  href="https://github.com/Taurus-Ai-Corp"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary">
                  github.com/Taurus-Ai-Corp
                </a>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted">
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                <div className="flex flex-col gap-4 md:flex-row">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="First name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Last name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@company.com" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Request a Demo">Request a Demo</SelectItem>
                          <SelectItem value="PQC Migration">PQC Migration</SelectItem>
                          <SelectItem value="Partnership Inquiry">Partnership Inquiry</SelectItem>
                          <SelectItem value="Press Inquiry">Press Inquiry</SelectItem>
                          <SelectItem value="General Question">General Question</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Tell us about your requirements..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button className="mt-4">Send Message</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </section>
    </SectionContainer>
  );
};
