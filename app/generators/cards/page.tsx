'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon, Trash2Icon } from 'lucide-react';
import { useFieldArray, useForm } from 'react-hook-form';
import { z } from 'zod';

import { useState } from 'react';

import CodeBlock from '@/components/code-block';
import { FormFooter } from '@/components/form-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  cardsConfig: z.array(
    z.object({
      Title: z.string(),
      Description: z.string(),
      Icon: z
        .string()
        .startsWith('<', 'Invalid JSX.')
        .endsWith(' />', 'Invalid JSX.'),
    })
  ),
});

export default function ConfigGenerator() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardsConfig: [
        {
          Title: 'Web Template',
          Description:
            "Ready to use no code website template, integrated with a Notion API, to manage your club's website, free of cost.",
          Icon: `<Github />`,
        },
        {
          Title: 'Club Domain',
          Description:
            'A subdomain for every club, free of cost, with the name of your choice. Additionally, you also get your own Outlook id.',
          Icon: `<Instagram />`,
        },
        {
          Title: 'Notice Board',
          Description:
            'Mobile app for your club to post notices, events, and other updates. You can also send push notifications to all your members.',
          Icon: `<LinkedIn />`,
        },
        {
          Title: 'Logistics&Ops',
          Description:
            "Mobile app to manage your club's logistics and operations, and to simplify the process of managing your club, all in one place.",
          Icon: `<Twitter />`,
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'cardsConfig',
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
                Cards Configuration
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
                ? Add cards to your club{"'"}s page by exporting a{' '}
                <code className="text-md rounded-sm bg-muted px-1 py-0.5">
                  config/cards.tsx
                </code>{' '}
                file.
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

          {/* CARD ITEMS */}

          <div className="space-y-4">
            <h3 className="mt-6 scroll-m-20 text-2xl font-semibold tracking-tight">
              Card Items
            </h3>
            <p className="text-sm leading-7 text-muted-foreground [&:not(:first-child)]:mt-6">
              To add icons to your cards, visit{' '}
              <a
                href="https://template.mitblr.club"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline underline-offset-2 transition-colors duration-200 ease-in-out hover:text-black"
              >
                lucide.dev/icons
              </a>{' '}
              and select an icon of your choice. Then, click on <b>Copy JSX</b>{' '}
              and paste the result in the{' '}
              <code className="text-md rounded-sm bg-muted px-1 py-0.5">
                Icon
              </code>{' '}
              field. We will handle the rest :{')'}
            </p>
            {fields.map((field, index) => (
              <Card key={field.id}>
                <CardHeader className="pb-3">
                  <FormField
                    {...form.register(`cardsConfig.${index}.Title` as const)}
                    render={({ field }) => (
                      <FormItem className="w-full">
                        <FormControl>
                          <Input placeholder="Card Title" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                  <FormField
                    {...form.register(
                      `cardsConfig.${index}.Description` as const
                    )}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Enter the card description here..."
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-3">
                    <FormField
                      {...form.register(`cardsConfig.${index}.Icon` as const)}
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormControl>
                            <Input
                              placeholder="<YourIcon />"
                              className="bg-muted font-mono"
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
                </CardContent>
              </Card>
            ))}
            <Button
              onClick={() =>
                append({
                  Title: '',
                  Description: '',
                  Icon: '<RickAstley />',
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
        code={`import * as Lucide from 'lucide-react';
			
export default cardsConfig = {${data.cardsConfig.map((field) => {
          return `
	{
		Title: "${field.Title}",
		Description: \`${field.Description}\`,
		Icon: <Lucide.${field.Icon.substring(
      1,
      field.Icon.length - 3
    )} className="h-10 w-10" />
	}`;
        })}
};`}
        filename="config/cards.tsx"
      />
    </div>
  );
}
