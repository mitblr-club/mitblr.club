import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function CourseForm({
  course,
  setCourse,
  gradYear,
  setGradYear,
}: {
  course: string;
  setCourse: Function;
  gradYear: string;
  setGradYear: Function;
}) {
  function handleLogin(event: any) {
    event.preventDefault();
    console.log('Hostel Status: ', course);
    console.log('Mess Status: ', gradYear);
  }

  return (
    <Card className="h-fit w-fit md:w-[400px]">
      <CardHeader>
        <CardTitle>Hostel Details</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin}>
          <div className="grid w-full items-center gap-10">
            <div className="flex flex-col gap-4">
              <Label htmlFor="course" className="text-lg">
                Course/Stream*
              </Label>
              <Select>
                <SelectTrigger className="w-fit">
                  <SelectValue placeholder="CSE(Core)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      value="CSE(Core)"
                      onChange={(e) => setCourse('CSE(Core)')}
                    >
                      CSE(Core)
                    </SelectItem>
                    <SelectItem
                      value="CSE(Artificial Intelligence)"
                      onChange={(e) =>
                        setCourse('CSE(Artificial Intelligence)')
                      }
                    >
                      CSE(Artificial Intelligence)
                    </SelectItem>
                    <SelectItem
                      value="CSE(Data Science)"
                      onChange={(e) => setCourse('CSE(Data Science)')}
                    >
                      CSE(Data Science)
                    </SelectItem>
                    <SelectItem
                      value="CSE(CyberSecurity)"
                      onChange={(e) => setCourse('CSE(CyberSecurity)')}
                    >
                      CSE(CyberSecurity)
                    </SelectItem>
                    <SelectItem value="IT" onChange={(e) => setCourse('IT')}>
                      IT
                    </SelectItem>
                    <SelectItem value="ECE" onChange={(e) => setCourse('ECE')}>
                      ECE
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-4">
              <Label htmlFor="gradYear" className="text-lg">
                Year of Graduation*
              </Label>
              <Select>
                <SelectTrigger className="w-fit">
                  <SelectValue placeholder="2025" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem
                      value="2025"
                      onChange={(e) => setGradYear('2025')}
                    >
                      2025
                    </SelectItem>
                    <SelectItem
                      value="2026"
                      onChange={(e) => setGradYear('2026')}
                    >
                      2026
                    </SelectItem>
                    <SelectItem
                      value="2027"
                      onChange={(e) => setGradYear('2027')}
                    >
                      2027
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <div className="flex w-full justify-around">
          <Button variant="secondary">Back</Button>
          <Button onClick={(e) => handleLogin(e)}>Next</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
