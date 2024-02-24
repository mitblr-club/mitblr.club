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

const thirdStepSchema = y.object().shape({
  course: y.string().required('This field is required'),
  yearOfGrad: y.string().required('This field is required'),
});

export function Step3() {
  const {
    activeStep,
    setActiveStep,
    setDirection,
    thirdStepData,
    setThirdStepData,
  } = useContext(SignUpContext);
  const form = useForm<y.InferType<typeof thirdStepSchema>>({
    resolver: yupResolver(thirdStepSchema),
  });

  function onSubmit(values: y.InferType<typeof thirdStepSchema>) {
    console.log(values);
    setThirdStepData(values);
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
                    <SelectContent>
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
                    <SelectContent>
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
      </div>
    </>
  );
}
