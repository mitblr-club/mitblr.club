import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import * as y from 'yup';

import { useContext } from 'react';

import { cn } from '@/lib/utils';

import { SignUpContext } from '@/components/signup/context';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const firstStepSchema = y.object().shape({
  name: y.string().required('This field is required'),
  email: y.string().email().required('This field is required'),
  phoneNumber: y
    .string()
    .matches(/^[6-9]\d{9}$/, 'Input is invalid')
    .required('This field is required'),
});

export function Step1() {
  const { activeStep, setActiveStep, firstStepData, setFirstStepData } =
    useContext(SignUpContext);
  const form = useForm<y.InferType<typeof firstStepSchema>>({
    resolver: yupResolver(firstStepSchema),
  });

  function onSubmit(values: y.InferType<typeof firstStepSchema>) {
    console.log(values);
    setFirstStepData(values);
    setActiveStep((prev) => prev + 1);
  }

  return (
    <>
      <motion.div
        className="flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.25 }}
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3"
            id="1"
          >
            <FormField
              control={form.control}
              name="name"
              defaultValue={firstStepData.name}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Venkatesh" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              defaultValue={firstStepData.email}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="venkatesh@learner.manipal.edu"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              defaultValue={firstStepData.phoneNumber}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </motion.div>
    </>
  );
}
