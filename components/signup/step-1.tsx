import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as y from 'yup';

import { useContext } from 'react';

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
  applicationNumber: y
    .string()
    .matches(/^12[1234]\d{6}$/, 'Input is invalid')
    .required('This field is required'),
  registrationNumber: y
    .string()
    .matches(/^2[1234]\d{7}$/, 'Input is invalid')
    .required('This field is required'),
});

export function Step1() {
  const {
    activeStep,
    setActiveStep,
    setDirection,
    firstStepData,
    setFirstStepData,
    firstStepErrors,
  } = useContext(SignUpContext);
  const form = useForm<y.InferType<typeof firstStepSchema>>({
    resolver: yupResolver(firstStepSchema),
  });

  function onSubmit(values: y.InferType<typeof firstStepSchema>) {
    console.log(values);
    setFirstStepData(values);
    setActiveStep((prev) => prev + 1);
    setDirection(1);
  }

  return (
    <>
      <div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2"
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
            <FormField
              control={form.control}
              name="applicationNumber"
              defaultValue={firstStepData.applicationNumber}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Application Number</FormLabel>
                  <FormControl>
                    <Input placeholder="122115100" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="registrationNumber"
              defaultValue={firstStepData.registrationNumber}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Registration Number</FormLabel>
                  <FormControl>
                    <Input placeholder="225871000" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </>
  );
}
