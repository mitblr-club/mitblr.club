import { yupResolver } from '@hookform/resolvers/yup';
import { motion } from 'framer-motion';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const secondStepSchema = y.object().shape({
  applicationNumber: y
    .string()
    .matches(/^12[1234]\d{6}$/, 'Input is invalid')
    .required('This field is required'),
  registrationNumber: y
    .string()
    .matches(/^2[1234]\d{7}$/, 'Input is invalid')
    .required('This field is required'),

  yearOfGrad: y.string().required('This field is required'),
});

export function Step2() {
  const { setActiveStep, secondStepData, setSecondStepData } =
    useContext(SignUpContext);
  const form = useForm<y.InferType<typeof secondStepSchema>>({
    resolver: yupResolver(secondStepSchema),
  });

  function onSubmit(values: y.InferType<typeof secondStepSchema>) {
    console.log(values);
    setSecondStepData(values);
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
            id="2"
          >
            <FormField
              control={form.control}
              name="applicationNumber"
              defaultValue={secondStepData.applicationNumber}
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
              defaultValue={secondStepData.registrationNumber}
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
            <FormField
              control={form.control}
              name="yearOfGrad"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year of Graduation</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select expected year of graduation" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent side="top">
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                    </SelectContent>
                  </Select>
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
