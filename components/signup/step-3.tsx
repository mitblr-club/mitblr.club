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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const thirdStepSchema = y.object().shape({
  course: y.string().required('This field is required'),
  hostelBlock: y.string().required('This field is required'),
  messProvider: y.string().required('This field is required'),
});

export function Step3() {
  const { activeStep, setActiveStep, thirdStepData, setThirdStepData } =
    useContext(SignUpContext);
  const form = useForm<y.InferType<typeof thirdStepSchema>>({
    resolver: yupResolver(thirdStepSchema),
  });

  function onSubmit(values: y.InferType<typeof thirdStepSchema>) {
    console.log(values);
    setThirdStepData(values);
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
            id="3"
          >
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course/Stream</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your current course/stream" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent side="top">
                      <SelectItem value="CSE(Core)">CSE(Core)</SelectItem>
                      <SelectItem value="CSE(Artificial Intelligence)">
                        CSE(Artificial Intelligence)
                      </SelectItem>
                      <SelectItem value="CSE(Data Science)">
                        CSE(Data Science)
                      </SelectItem>
                      <SelectItem value="CSE(CyberSecurity)">
                        CSE(CyberSecurity)
                      </SelectItem>
                      <SelectItem value="IT">IT</SelectItem>
                      <SelectItem value="ECE">ECE</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
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
                    <SelectContent side="top">
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
                    <SelectContent side="top">
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
      </motion.div>
    </>
  );
}
