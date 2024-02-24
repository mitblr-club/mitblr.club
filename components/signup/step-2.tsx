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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const secondStepSchema = y.object().shape({
  hostelBlock: y.string().required('This field is required'),
  messProvider: y.string().required('This field is required'),
});

export function Step2() {
  const {
    activeStep,
    setActiveStep,
    setDirection,
    secondStepData,
    setSecondStepData,
    secondStepErrors,
  } = useContext(SignUpContext);
  const form = useForm<y.InferType<typeof secondStepSchema>>({
    resolver: yupResolver(secondStepSchema),
  });

  function onSubmit(values: y.InferType<typeof secondStepSchema>) {
    console.log(values);
    setSecondStepData(values);
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
            id="2"
          >
            <FormField
              control={form.control}
              name="hostelBlock"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hostel Block</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current residence" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="On-Campus Hostels">
                        On-Campus Hostels
                      </SelectItem>
                      <SelectItem value="Off-Campus Hostels">
                        Off-Campus Hostels
                      </SelectItem>
                      <SelectItem value="Day Scholar">Day Scholar</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="messProvider"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mess Provider</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current mess provider" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Fixed - Blue Dove">
                        Fixed - Blue Dove
                      </SelectItem>
                      <SelectItem value="Fixed - Chef's Touch">
                        Fixed - Chef&apos;s Touch
                      </SelectItem>
                      <SelectItem value="Variable - Blue Dove">
                        Variable - Blue Dove
                      </SelectItem>
                      <SelectItem value="Variable - Chef's Touch">
                        Variable - Chef&apos;s Touch
                      </SelectItem>
                      <SelectItem value="No Mess Provider">
                        No Mess Provider
                      </SelectItem>
                    </SelectContent>
                  </Select>
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
