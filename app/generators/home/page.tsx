'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon, Trash2Icon } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import { useState } from 'react';

import CodeBlock from '@/components/code-block';
import { FormFooter } from '@/components/form-footer';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  tagline: z.string(),
  description: z
    .string()
    .max(1024, 'The answer cannot be more than 1024 characters.'),
  FAQConfig: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    })
  ),
});

export default function ConfigGenerator() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tagline: 'One Ecosystem for all Clubs.',
      description:
        'Empower your MIT Bengaluru club experience with our centralized platform, seamlessly managing and collaborating on events, blogs, and administration.',
      FAQConfig: [
        {
          question: 'What is mitblr.club?',
          answer:
            'mitblr.club serves as a centralized platform for MIT, Bengaluru clubs, streamlining event management, administrative functions, and fostering collaboration among clubs.',
        },
        {
          question: 'Who maintains the mitblr.club ecosystem?',
          answer:
            'While mitblr.club is maintained by the CodeX club, it is open-source and clubs are encouraged to contribute to the project.',
        },
        {
          question: 'Is mitblr.club free to use?',
          answer:
            'Yes, mitblr.club is compltely free to use, including obtaining a club specific subdomain and Outlook ID',
        },
        {
          question: 'Does mitblr.club have a mobile app?',
          answer:
            'Yes, mitblr.club has multiple apps designed for both Android and iOS. You can find the links to the apps on the home page.',
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'FAQConfig',
  });
  const [data, setData] = useState(form.getValues());

  function onSubmit(values: z.infer<typeof formSchema>) {
    setData(values);
  }

  return (
    <div className="mx-auto flex max-w-screen-xl flex-col lg:flex-row">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="col-span-1 max-h-screen w-full overflow-auto py-8 pl-4 pr-4 lg:py-12 lg:pl-8"
        >
          <div className="flex flex-col items-start overflow-y-auto md:flex-row md:items-center">
            <div className="space-y-2">
              <h1 className="inline-block font-heading text-2xl lg:text-4xl">
                Home Configuration
              </h1>
              <p className="lg:text-md text-muted-foreground">
                Using the{' '}
                <a
                  href="https://template.mitblr.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium underline underline-offset-2 transition-colors duration-200 ease-in-out hover:text-black"
                >
                  Tier 3 template
                </a>
                ? Type in your club{"'"}s details in order to export your own
                configuration file.
              </p>
            </div>
            <Button
              type="submit"
              variant="outline"
              className="my-6 hidden md:mx-6 lg:block"
            >
              Generate
            </Button>
          </div>

          {/* GENERAL DETAILS */}

          <div className="space-y-4">
            <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
              General Details
            </h3>
            <FormField
              control={form.control}
              name="tagline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Club/Chapter Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the central homepage tagline.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is the subtext below the tagline.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* FAQ ITEMS */}

          <div className="space-y-4">
            <h3 className="mt-6 scroll-m-20 text-2xl font-semibold tracking-tight">
              Frequently Asked Questions
            </h3>
            <i className="text-sm leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
              <a
                href="https://template.mitblr.club"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-2 transition-colors duration-200 ease-in-out hover:text-black"
              >
                Visit the site
              </a>{' '}
              to see a working example of this config.
            </i>
            {fields.map((field, index) => (
              <div key={field.id} className="flex flex-col gap-3">
                <div className="flex gap-3">
                  <FormField
                    {...form.register(`FAQConfig.${index}.question` as const)}
                    render={({ field }) => (
                      <FormItem className="w-full font-mono">
                        <FormControl>
                          <Input
                            placeholder="Question"
                            className="bg-muted"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    onClick={() => {
                      remove(index);
                      setData(form.getValues());
                    }}
                    size="icon"
                    variant="outline"
                    className="hover:text-destructive"
                  >
                    <Trash2Icon className="h-5 w-5" />
                  </Button>
                </div>

                <FormField
                  {...form.register(`FAQConfig.${index}.answer` as const)}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your answer here..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <hr className="my-1" />
              </div>
            ))}
            <Button
              onClick={() =>
                append({
                  question: 'Question',
                  answer: 'Enter your answer here...',
                })
              }
              variant="outline"
              className="w-full"
            >
              <PlusIcon className="mr-2 h-5 w-5" /> Add Item
            </Button>
          </div>

          <Button
            type="submit"
            variant="secondary"
            className="my-6 w-full lg:hidden"
          >
            Generate
          </Button>

          <FormFooter />
        </form>
      </Form>
      <CodeBlock
        code={`import { FAQItem } from "@/types/faq-item"

export const homeConfig = {
	tagline: "${data.tagline}",
	description: "${data.description}",
	FAQConfig : [${data.FAQConfig.map((field) => {
    return `
    {
        question: "${field.question}",
        answer: \`${field.answer}\`,
    }`;
  })}
  ] satisfies FAQItem[],
};`}
        filename="config/home.ts"
      />
    </div>
  );
}
