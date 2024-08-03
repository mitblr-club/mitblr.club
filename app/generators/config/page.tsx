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

const formSchema = z.object({
  name: z.string(),
  institution: z.string(),
  description: z.string(),
  eventsTableId: z.string(),
  blogTableId: z.string(),
  navLinks: z.array(
    z.object({
      title: z.string(),
      href: z.string(),
    })
  ),
  mediaLinks: z.object({
    instagram: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    institute: z.string().optional(),
  }),
  contactDetails: z.object({
    number: z.string().optional(),
    email: z.string().email().optional(),
  }),
});

export default function ConfigGenerator() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: 'Club Name',
      institution: 'Manipal Institute of Technology Bengaluru (MIT)',
      description: 'Enter the description of your site.',
      eventsTableId: 'df0bbd9604a846468e6aaf7f41042c1c',
      blogTableId: 'd8caac170c6243a18228b8467ec1f41e',
      navLinks: [
        {
          title: 'Home',
          href: '/',
        },
        {
          title: 'Blog',
          href: '/blog',
        },
        {
          title: 'Events',
          href: '/events',
        },
      ],
      mediaLinks: {
        instagram: 'https://www.instagram.com/',
        linkedin: 'https://in.linkedin.com/',
        github: 'https://github.com/',
        twitter: 'https://twitter.com/',
        institute: 'https://manipal.edu/mitblr.html',
      },
      contactDetails: {
        number: '+91 1234567890',
        email: 'abc.efg@gmail.com',
      },
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'navLinks',
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
                Configuration Generator
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Club/Chapter Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="institution"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institution</FormLabel>
                  <FormControl>
                    <Input {...field} disabled />
                  </FormControl>
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* NOTION DETAILS */}

          <div className="space-y-4">
            <h3 className="mt-6 scroll-m-20 text-2xl font-semibold tracking-tight">
              Notion Database IDs
            </h3>
            <i className="text-sm leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
              Struggling to find the Database ID? Watch{' '}
              <a
                href="https://www.youtube.com/watch?v=6CjnvwiX-T0"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-2 transition-colors duration-200 ease-in-out hover:text-black"
              >
                this video
              </a>
              .
            </i>
            <FormField
              control={form.control}
              name="eventsTableId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Events Table ID</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="blogTableId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Blog Table ID</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* NAVIGATION LINKS */}

          <div className="space-y-4">
            <h3 className="mt-6 scroll-m-20 text-2xl font-semibold tracking-tight">
              Navigation Links
            </h3>
            <i className="text-sm leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
              You can currently only add additional links.
            </i>
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-3">
                <FormField
                  {...form.register(`navLinks.${index}.title` as const)}
                  render={({ field }) => (
                    <FormItem className="w-6/12">
                      <FormControl>
                        <Input placeholder="Title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  {...form.register(`navLinks.${index}.href` as const)}
                  render={({ field }) => (
                    <FormItem className="w-5/12 font-mono">
                      <FormControl>
                        <Input
                          placeholder="Link"
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
                  className="w-1/12 hover:text-destructive"
                >
                  <Trash2Icon className="h-5 w-5" />
                </Button>
              </div>
            ))}
            <Button
              onClick={() => append({ title: 'Title', href: 'Link' })}
              variant="outline"
              className="w-full"
            >
              <PlusIcon className="mr-2 h-5 w-5" /> Add Item
            </Button>
          </div>

          {/* SOCIAL MEDIA LINKS */}

          <div className="space-y-4">
            <h3 className="mt-6 scroll-m-20 text-2xl font-semibold tracking-tight">
              Social Media Links
            </h3>
            <FormField
              control={form.control}
              name="mediaLinks.instagram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instagram</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mediaLinks.linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mediaLinks.github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mediaLinks.twitter"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Twitter</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mediaLinks.institute"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Institute</FormLabel>
                  <FormControl>
                    <Input {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* CONTACT DETAILS */}

            <div className="space-y-4">
              <h3 className="mt-6 scroll-m-20 text-2xl font-semibold tracking-tight">
                Contact Details
              </h3>
              <FormField
                control={form.control}
                name="contactDetails.number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Number</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactDetails.email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contact Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
        code={`import { NavItem } from '@/types/nav-item';

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: '${data.name}',
  institution: '${data.institution}',
  description: '${data.description}',
  eventsTableId: '${data.eventsTableId}',
  blogTableId: '${data.blogTableId}',
  navLinks: [${data.navLinks.map((field) => {
    return `
    {
        title: '${field.title}',
        href: '${field.href}',
    }`;
  })}
  ] satisfies NavItem[],
  mediaLinks: {
    instagram: '${data.mediaLinks.instagram}',
    linkedin: '${data.mediaLinks.linkedin}',
    github: '${data.mediaLinks.github}',
    twitter: '${data.mediaLinks.twitter}',
    institute: '${data.mediaLinks.institute}',
  },
  contactDetails: {
    number: '${data.contactDetails.number}',
    email: '${data.contactDetails.email}',
  }
};`}
        filename="config/site.ts"
      />
    </div>
  );
}
